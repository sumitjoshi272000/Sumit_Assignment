import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import About from './Filter';
import Search from './Search';
import {TouchableOpacity, View} from 'react-native';
import SvgUri from 'react-native-svg-uri';
const Tab = createBottomTabNavigator();

const CustomTabButtonForHome = (props: any) => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [
            props.style,
            {
              marginBottom: 15,
            },
          ]
        : [
            props.style,
            {
              marginBottom: 20,
            },
          ]
    }>
    <SvgUri source={require('./assets/Home.svg')} />
    {props.accessibilityState.selected ? (
      <View
        style={{
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: '#E7E049',
          width: 40,
          marginTop: 2,
        }}></View>
    ) : null}
  </TouchableOpacity>
);

const CustomTabButtonForFilter = (props: any) => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [
            props.style,
            {
              marginBottom: 15,
            },
          ]
        : [
            props.style,
            {
              marginBottom: 20,
            },
          ]
    }>
    <SvgUri source={require('./assets/Filter.svg')} />
    {props.accessibilityState.selected ? (
      <View
        style={{
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: '#E7E049',
          width: 40,
          marginTop: 2,
        }}></View>
    ) : null}
  </TouchableOpacity>
);

const CustomTabButtonForSearch = (props: any) => (
  <TouchableOpacity
    {...props}
    style={
      props.accessibilityState.selected
        ? [
            props.style,
            {
              marginBottom: 15,
            },
          ]
        : [
            props.style,
            {
              marginBottom: 20,
            },
          ]
    }>
    <SvgUri source={require('./assets/Search.svg')} />
    {props.accessibilityState.selected ? (
      <View
        style={{
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: '#E7E049',
          width: 40,
          marginTop: 2,
        }}></View>
    ) : null}
  </TouchableOpacity>
);

const tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: '#000000',
          height: 75,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: CustomTabButtonForHome,
        }}
      />
      <Tab.Screen
        name="Filter"
        component={About}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: CustomTabButtonForFilter,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarButton: CustomTabButtonForSearch,
        }}
      />
    </Tab.Navigator>
  );
};

export default tabs;
