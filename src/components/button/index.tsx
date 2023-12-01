import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import rncStyles from 'rncstyles';

export default function PrimaryButton(props: any) {
  const {onPress, text, color} = props;
  return (
    <View style={[rncStyles.p1]}>
      <TouchableOpacity
        style={color == "info" ? rncStyles.btnInfo : rncStyles.btnPrimary}>
        <Text
          style={[
            rncStyles.textBold,
            rncStyles.textWhite,
            rncStyles.textCenter
          ]}
          onPress={onPress}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
