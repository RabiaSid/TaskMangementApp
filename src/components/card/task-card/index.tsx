import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import rncStyles from 'rncstyles';

export default function TaskCard(props: any) {
    const {onPress, title, task} = props;
  return (
      <TouchableOpacity
      onPress={onPress}
        style={[
          rncStyles.m1,
          rncStyles.bgWhite,
          rncStyles.rounded,
          rncStyles.shadow1,
          rncStyles.p1,
        ]}>
        <View>
          <Text
            style={[rncStyles.textBold, rncStyles.textBlack, rncStyles.fs3]}>
            {title}
          </Text>
        </View>
        <View>
          <Text
            style={[rncStyles.textBold, rncStyles.textSecondary, rncStyles.fs5]}>
            {task}
          </Text>
        </View>
      </TouchableOpacity>
  );
}
