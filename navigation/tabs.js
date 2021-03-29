import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import {COLORS, icons} from '../constants';
import {Home} from '../screens';
import SelectedCustomButton from '../components/Tabs/SelectedCustomButton';

const Tab = createBottomTabNavigator();

const tabBarIcon = (focused, icon) => (
  <Image
    source={icon}
    resizeMode="contain"
    style={{...styles.icon, ...{tintColor: focused ? COLORS.primary : COLORS.secondary,}}}
  />
)

const tabBarButton = props => (
  <TabBarCustomButton {...props} />
)

const TabBarCustomButton = ({accessibilityState, children, onPress}) => {
  const isSelected = accessibilityState.selected

  if(isSelected) {
    return (
      <SelectedCustomButton onPress={onPress} >
        {children}
      </SelectedCustomButton>
    )
  }

  return (
    <TouchableOpacity style={styles.normalButton} activeOpacity={1} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

const CustomTabBar = props => {
  return (
    <BottomTabBar {...props} />
  )
}

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: styles.tabBar
      }}
      tabBar={(props) => (
        <CustomTabBar {...props} />
      )}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, icons.cutlery),
          tabBarButton: tabBarButton
        }}
      />

      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, icons.search),
          tabBarButton: tabBarButton
        }}
      />

      <Tab.Screen
        name="Like"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, icons.like),
          tabBarButton: tabBarButton
        }}
      />

      <Tab.Screen
        name="User"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => tabBarIcon(focused, icons.user),
          tabBarButton: tabBarButton
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    backgroundColor: "transparent",
    elevation: 0
  },
  selectedButton: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.white
  },
  normalButton: {
    flex: 1,
    height: 60,
    backgroundColor: COLORS.white
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Tabs;
