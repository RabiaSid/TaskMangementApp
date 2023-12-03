import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/auth/sign-in';
import SignUp from '../../screens/auth/sign-up';
import CreateTask from '../../screens/create-task';
import Task from '../../screens/task';
import AppHome from '../../screens/app-home';
import SingleTask from '../../screens/single-task';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      // initialRouteName="SignUp"
      // screenOptions={{
      //     headerShown: false,
      //   }}
    >
      <Stack.Screen
        name="AppHome"
        component={AppHome}
      />
      <Stack.Screen
        name="Task"
        component={Task}
      />
      <Stack.Screen
        name="CreateTask"
        component={CreateTask}
      />
      <Stack.Screen
        name="SingleTask"
        component={SingleTask}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
      
    </Stack.Navigator>
  );
}

export default StackNavigation;
