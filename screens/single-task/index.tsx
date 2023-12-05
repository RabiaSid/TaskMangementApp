import React from 'react';
import {View, ToastAndroid} from 'react-native';
import rncStyles from 'rncstyles';
import TaskCard from '../../components/card/task-card';
import PrimaryButton from '../../components/button';
import {fbDelete, fbEdit} from '../../config/firebase/firebase-methods';

export default function SingleTask({navigation, route}: any) {
  const obj = route.params;

  const DeleteTask = () => {
    fbDelete('task', obj.id)
      .then(res => {
        ToastAndroid.show('Task Delete Succesfully', ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const MarkAsRead = () => {
    fbEdit('task', obj.id, {...obj, isDone: true})
      .then(res => {
        ToastAndroid.show('Task Mark As Done', ToastAndroid.SHORT);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={rncStyles.p1}>
      <TaskCard title={obj.title} task={obj.task}>
        <View style={[rncStyles.flexRow, rncStyles.justifyContentAround]}>
          <PrimaryButton text="Mark As Done" onPress={MarkAsRead}/>
          <PrimaryButton color="error" text="Delete" onPress={DeleteTask} />
        </View>
      </TaskCard>
    </View>
  );
}
