import React from 'react';
import {View} from 'react-native';

import PrimaryButton from '../../components/button';

export default function TaskHome({navigation}: any) {
  return (
    <View>
        <View style={[]}>

        </View>
      <PrimaryButton
        text="Create Task"
        onPress={() => {
          navigation.navigate('CreateTask');
        }}
      />
      <PrimaryButton
        text="Task List"
        onPress={() => {
          navigation.navigate('Task');
        }}
      />
    </View>
  );
}
