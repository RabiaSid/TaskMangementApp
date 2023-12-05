import React from 'react';
import {View} from 'react-native';
import PrimaryButton from '../../components/button';
import rncStyles from 'rncstyles';
import {Text} from 'react-native';
import {styles} from '../../../styles';
import {useSelector} from 'react-redux';

export default function AppHome({navigation}: any) {
  const userData = useSelector((state: any) => state.user);

  return (
    <View>
      <View style={[rncStyles.p1]}>
        <Text style={[styles.backText, {fontWeight: 'bold'}]}>
          {userData?.fullName &&
            userData.fullName.charAt(0).toUpperCase() +
              userData.fullName.slice(1)}
        </Text>
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
