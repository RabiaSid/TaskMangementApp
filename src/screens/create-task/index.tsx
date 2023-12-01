import React, {useState} from 'react';
import {View, ToastAndroid} from 'react-native';
import rncStyles from 'rncstyles';
import PrimaryButton from '../../components/button';
import TextInputField from '../../components/text-input';
import {fbAdd} from '../../config/firebase/firebase-methods';

export default function CreateTask() {
  const [model, setModel] = useState<any>({});

  const SaveTask = () => {
    setModel({})
    fbAdd('task', model).then(() => {
      ToastAndroid.show('Successfully Added Task', ToastAndroid.SHORT);
    }).catch((err) => {
      console.log(err)
    });
  };

  return (
    <View>
      <View style={rncStyles.pb1}>
        <TextInputField
          label="Title"
          placeholder="Add Task Title"
          value={model.title}
          onChangeText={(e: any) => setModel({...model, title: e})}
        />

        <TextInputField
          label="Task"
          placeholder="Add Task "
          value={model.task}
          onChangeText={(e: any) => setModel({...model, task: e})}
        />
        <PrimaryButton text="Save Task" onPress={SaveTask} />
      </View>
    </View>
  );
}
