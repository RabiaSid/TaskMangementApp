import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductHome from '../../screens/product-screen';
import ProductDetail from '../../screens/product-screen/product-detail';
import Login from '../../screens/auth/sign-in';
import SignUp from '../../screens/auth/sign-up';
import CreateTask from '../../screens/create-task';
import Task from '../../screens/task';
import TaskHome from '../../screens/task-home';

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
        name="TaskHome"
        component={TaskHome}
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
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ProductHome"
        component={ProductHome}
      />
      <Stack.Screen
        options={{
         title:'Product Item',
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
