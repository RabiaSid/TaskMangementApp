import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from '../../../../styles';
import rncStyles from 'rncstyles';
import BaseColor from '../../../constant';

type CardProps = {
  onPress?: (...args: any[]) => any;
  title: string;
  image: any;
  price: string;
};

export default function ProductCard(props: CardProps) {
  const {title, image, price, onPress} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.productCarddiv,
        rncStyles.justifyContentCenter,
        rncStyles.alignItemsCenter,
        rncStyles.shadow2,
        // rncStyles
      ]}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.productCardImage}
        resizeMode="contain"
      />
      <View style={styles.productCardDesc}>
        <Text
          style={{
            color: BaseColor.lightGrey,
            fontSize: 12,
          }}
          numberOfLines={1}>
          {title}
        </Text>
        <Text
          style={{
            color: BaseColor.black,
            fontSize: 16,
            fontWeight: '400',
          }}>
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
