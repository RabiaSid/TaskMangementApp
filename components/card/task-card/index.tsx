import React, { Children } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import rncStyles from 'rncstyles';
 

export default function TaskCard(props: any) {
  const {children, title, task} = props;
  return (
    <View
      style={[
        rncStyles.m1,
        rncStyles.bgWhite,
        rncStyles.rounded,
        rncStyles.shadow1,
        rncStyles.p1,
      ]}>
      <View>
        <Text style={[rncStyles.textBold, rncStyles.textBlack, rncStyles.fs3]}>
          {title}
        </Text>
      </View>
      <View>
        <Text
        numberOfLines={2}
          style={[rncStyles.textBold, rncStyles.textSecondary, rncStyles.fs5]}>
          {task}
        </Text>
      </View>
      {children}
      
    </View>
  );
}
