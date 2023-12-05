import React from 'react'
import { View, Text } from 'react-native'
import rncStyles from 'rncstyles';
import TaskCard from '../../components/card/task-card';
import PrimaryButton from '../../components/button';

export default function SingleTask({navigation, route} : any) {
  const obj = route.params
  return (
    <View style={rncStyles.p1}>
      <TaskCard title={obj.title} task={obj.task}>
                <View style={[rncStyles.flexRow, rncStyles.justifyContentAround]}>
                  <PrimaryButton text="Mark As Done"/>
                  <PrimaryButton color="error" text="Delete"/>
                  {/* <IconButton
                    name="edit"
                    onPress={() => {
                      navigation.navigate('SingleTask', x);
                    }}
                  />
                  <IconButton
                    name="delete"
                    onPress={() => {
                      navigation.navigate('SingleTask', x);
                    }}
                  /> */}
                </View>
              </TaskCard>
    </View>
  )
}
