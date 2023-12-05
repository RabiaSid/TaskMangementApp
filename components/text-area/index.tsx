import React from 'react';
import {TextInput, View} from 'react-native';
import rncStyles from 'rncstyles';

export default function TextArea(props: any) {
  const {placeholder, value, onChangeText} = props;
  return (
    <View style={[rncStyles.p1]}>
      <TextInput
        multiline={true}
        numberOfLines={4}
        verticalAlign="top"
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
