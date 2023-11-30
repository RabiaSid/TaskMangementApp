import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import rncStyles from 'rncstyles';

export default function PrimaryButton(props: any) {
    const {onPress, text} = props
  return (
    <View style={[rncStyles.p1]}>
        <TouchableOpacity style={[rncStyles.bgInfo, rncStyles.p1, rncStyles.rounded]}>
              <Text
                style={[
                  rncStyles.textBold,
                  rncStyles.fs5,
                  rncStyles.ms1,
                  rncStyles.textPrimary,
                ]}
                onPress={onPress}>
                {text}
              </Text>
            </TouchableOpacity>
    </View>
  )
}
