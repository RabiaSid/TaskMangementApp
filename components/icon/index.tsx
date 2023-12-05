import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { _dark } from 'rncstyles';

export default function PrimaryIcon(props: any) {
  const {name, color, size, onPress} = props;
  return <Icon name={name} color={color ?? _dark} size={size ?? 30} onPress={onPress}></Icon>;
}
