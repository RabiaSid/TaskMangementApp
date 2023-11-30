import React, {useState} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import InputField from '../../components/input';
import rncStyles from 'rncstyles';
import Button from '../../components/button';
import PrimaryButton from '../../components/button';

export default function CreateTask() {
  const [model, setModel] = useState<any>({});

  return (
    <View>
      <View style={rncStyles.pb1}>
        <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Email</Text>
        <InputField
          placeholder="eg. Muhammad Zaid"
          value={model.email}
          onChangeText={(e: any) => setModel({...model, email: e})}
        />
        <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Email</Text>
        <InputField
          placeholder="eg. Muhammad Zaid"
          value={model.email}
          onChangeText={(e: any) => setModel({...model, email: e})}
        />
        <PrimaryButton  text="Add Task"/>
      </View>
    </View>
  );
}
