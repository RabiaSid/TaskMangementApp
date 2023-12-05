import React from 'react';
import {Text, TextInput, View} from 'react-native';
import rncStyles from 'rncstyles';

export default function TextInputField(props: any) {
  const {placeholder, label, value, onChangeText} = props;
  return (
    <View style={[rncStyles.px1]}>
      <Text style={[rncStyles.textPrimary, rncStyles.p1]}>{label}</Text>
      <TextInput
        style={[
          rncStyles.input,
          rncStyles.bgWhite,
          rncStyles.rounded,
          rncStyles.border1,
          rncStyles.borderPrimary,
          rncStyles.textSecondary,
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
