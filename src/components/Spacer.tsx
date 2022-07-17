import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SpacerInterface {
  value?: number;
}

const Spacer = ({value}: SpacerInterface) => {
  return <View style={{height: value ? value : 10}}></View>;
};

export default Spacer;
