import React from 'react';
import {useSelector} from 'react-redux';
import {View, Image, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {COLORS, icons} from '../constants';

const OrderDelivery = ({route, navigation}) => {
  // const restaurant, streetName, fromLocation, toLocation, region
  const currentLocation = useSelector(state => state.order.currentLocation);
  const streetName = currentLocation.streetName;
  const fromLocation = currentLocation.gps;
  const toLocation = {
    latitude: 1.5347282806345879,
    longitude: 110.35632207358996,
  };

  const mapRegion = {
    latitude: (fromLocation.latitude + toLocation.latitude) / 2,
    longitude: (fromLocation.longitude + toLocation.longitude) / 2,
    latitudeDelta: Math.abs(fromLocation.latitude + toLocation.latitude) * 2,
    longitudeDelta: Math.abs(fromLocation.longitude + toLocation.longitude) * 2,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={mapRegion}
        style={styles.container}>
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
          //rotation
        >
          <Image source={icons.car} style={styles.car} />
        </Marker>
      </MapView>
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
