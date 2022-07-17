import {View, Text, Image} from 'react-native';
import React from 'react';
import {windowWidth} from '../utils/constraints';
import Spacer from './Spacer';
import {IDataProps} from '../utils/types';

const DataComponent = ({
  name,
  message,
  time,
  numberOfMessage,
  image,
}: IDataProps) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <View style={{width: windowWidth * 0.15}}>
          <Image
            source={image}
            style={{width: 60, height: 60, borderRadius: 30}}
          />
        </View>
        <View
          style={{
            marginLeft: 20,
            width: windowWidth * 0.65,
            justifyContent: 'center',
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text
              style={{
                color: '#000000',
                fontSize: 16,
                fontWeight: '600',
              }}>
              {name}
            </Text>
            <Text style={{color: '#000000'}}>{time}</Text>
          </View>
          <Spacer value={5} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>{message}</Text>

            {numberOfMessage ? (
              <View
                style={{
                  height: 18,
                  width: 18,
                  borderRadius: 9,
                  backgroundColor: '#000000',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: '#FFFFFF', fontSize: 12, fontWeight: 'bold'}}>
                  {numberOfMessage}
                </Text>
              </View>
            ) : (
              <View
                style={{
                  height: 10,
                  width: 10,
                  borderRadius: 5,
                  backgroundColor: '#E7E049',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Text
                  style={{color: '#FFFFFF', fontSize: 12, fontWeight: 'bold'}}>
                  {numberOfMessage}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DataComponent;
