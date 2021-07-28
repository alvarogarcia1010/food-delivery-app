import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { View, Image, StyleSheet } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import DestinationHeader from '../components/OrderDelivery/DestinationHeader';
import DeliveryInfo from '../components/OrderDelivery/DeliveryInfo';

import {COLORS, SIZES, GOOGLE_API_KEY, icons} from '../constants';
import { calculateAngle } from '../utils/calculateAngle';

const OrderDelivery = ({route, navigation}) => {
  const restaurant = route.params.restaurant

  const currentLocation = useSelector(state => state.order.currentLocation);
  const [fromLocation, setFromLocation] = useState(currentLocation.gps);
  const [toLocation, setToLocation] = useState(restaurant.location);

  const [region, setRegion] = useState({
    latitude: (fromLocation.latitude + toLocation.latitude) / 2,
    longitude: (fromLocation.longitude + toLocation.longitude) / 2,
    latitudeDelta: Math.abs(fromLocation.latitude - toLocation.latitude) * 2,
    longitudeDelta: Math.abs(fromLocation.longitude - toLocation.longitude) * 2,
  });

  const mapview = useRef();
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [angle, setAngle] = useState(0);
  const streetName = restaurant.streetName;

  const onReadyMap = result => {
    setDuration(result.duration);
    setDistance(result.distance);

    if (!isReady) {
      mapview.current.fitToCoordinates(result.coordinates, {
        edgePadding: {
          right: SIZES.width / 20,
          bottom: SIZES.height / 4,
          left: SIZES.width / 20,
          top: SIZES.height / 8,
        },
      });

      let nexLocation = {
        latitude: result.coordinates[0]['latitude'],
        longitude: result.coordinates[0]['longitude'],
      };

      if (result.coordinates.length >= 2) {
        let angle = calculateAngle(result.coordinates);
        setAngle(angle);
      }

      setFromLocation(nexLocation);
      setIsReady(true);
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        ref={mapview}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
        style={styles.container}>
        
        <MapViewDirections
          origin={fromLocation}
          destination={toLocation}
          apikey={GOOGLE_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          timePrecision="now"
          precision="high"
          onReady={onReadyMap}
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
          rotation={angle}>
          <Image source={icons.car} style={styles.car} />
        </Marker>
      </MapView>

      <DestinationHeader
        distance={distance}
        duration={duration}
        streetName={streetName}
      />

      <DeliveryInfo restaurant={restaurant} />
    </View>
  );
};

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
});

export default OrderDelivery;
