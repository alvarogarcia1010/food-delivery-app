import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {View, Image, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import {COLORS, SIZES, FONTS, GOOGLE_API_KEY, icons} from '../constants';
import { useRef } from 'react';

const OrderDelivery = ({route, navigation}) => {
  // const restaurant, streetName, fromLocation, toLocation, region
  const currentLocation = useSelector(state => state.order.currentLocation);
  const streetName = currentLocation.streetName;

  const [fromLocation, setFromLocation] = useState(currentLocation.gps)
  const [toLocation, setToLocation] = useState({
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  })

  const [region, setRegion] = useState({
    latitude: (fromLocation.latitude + toLocation.latitude) / 2,
    longitude: (fromLocation.longitude + toLocation.longitude) / 2,
    latitudeDelta: Math.abs(fromLocation.latitude - toLocation.latitude) * 2,
    longitudeDelta: Math.abs(fromLocation.longitude - toLocation.longitude) * 2,
  })

  const mapview = useRef()
  const [duration, setDuration] = useState(0)
  const [distance, setDistance] = useState(0)
  const [isReady, setIsReady] = useState(false)
  const [angle, setAngle] = useState(0)

  return (
    <View style={styles.container}>
      <MapView
        ref={mapview}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={styles.container}>
        {/* Map View Direction */}
        <MapViewDirections 
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          timePrecision='now'
          precision='high'
          onReady={result => {
            setDuration(result.duration)
            setDistance(result.distance)

            if(!isReady){
              mapview.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                    right: (SIZES.width / 20),
                    bottom: (SIZES.height / 4),
                    left: (SIZES.width / 20),
                    top: (SIZES.height / 8)
                }
              })

              let nexLocation = {
                latitude: result.coordinates[0]['latitude'],
                longitude: result.coordinates[0]['longitude']
              }

              if (result.coordinates.length >= 2) {
                let angle = calculateAngle(result.coordinates)
                setAngle(angle)
            }

              setFromLocation(nexLocation)
              setIsReady(true)
            }
          }}
        />
        {/* Destino  */}
        <Marker coordinate={toLocation}>
          <View style={styles.markerContainer}>
            <View style={styles.marker}>
              <Image source={icons.pin} style={styles.pin} />
            </View>
          </View>
        </Marker>

        {/* Carrito */}
        <Marker
          coordinate={fromLocation}
          anchor={{x: 0.5, y: 0.5}}
          flat={true}
          rotation={angle}
        >
          <Image source={icons.car} style={styles.car} />
        </Marker>
      </MapView>
      <DestinationHeader distance={distance} duration={duration} streetName={streetName} />
    </View>
  );
};

const DestinationHeader = ({streetName, distance, duration}) => {

  return (
    <View style={styles.header}>
      <View style={styles.destinationHeader}>
        <Image
          source={icons.red_pin}
          style={{
            width: 30,
            height: 30,
            marginRight: SIZES.padding
          }}
        />

        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.body3 }}>{streetName} ({distance.toFixed(2)} kms)</Text>
        </View>

        <Text style={{ ...FONTS.body3 }}>{Math.ceil(duration)} mins</Text>
      </View>
    </View>
  )
}

function calculateAngle(coordinates) {
  let startLat = coordinates[0]["latitude"]
  let startLng = coordinates[0]["longitude"]
  let endLat = coordinates[1]["latitude"]
  let endLng = coordinates[1]["longitude"]
  let dx = endLat - startLat
  let dy = endLng - startLng

  return Math.atan2(dy, dx) * 180 / Math.PI
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  markerContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  marker: {
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  pin: {
    height: 25,
    width: 25,
    tintColor: COLORS.white,
  },
  car: {
    width: 40,
    height: 40,
  },
  header: {
    position: 'absolute',
    top: 15,
    left: 0,
    right: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  destinationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white
  }
});

export default OrderDelivery;
