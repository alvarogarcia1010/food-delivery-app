import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'

const Restaurant = ({ route }) => {
  const [restaurant, setRestaurant] = useState(null)
  const [currentLocation, setCurrentLocation] = useState(null)

  useEffect(() => {
    const { item, currentLocation } = route.params
    setRestaurant(item)
    setCurrentLocation(currentLocation)
  }, [])

  return (
    <SafeAreaView>
      <Text>Restaurant</Text>
    </SafeAreaView>
  )
}

export default Restaurant
