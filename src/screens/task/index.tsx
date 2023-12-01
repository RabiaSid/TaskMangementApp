import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import rncStyles from 'rncstyles';
import TaskCard from '../../components/card/task-card';

export default function Task({navigation}: any) {
  
  return (
    <View style={rncStyles.p1}>
     <TaskCard />
    </View>
  );
}
