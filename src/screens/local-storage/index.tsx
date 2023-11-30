import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

export default function LocalStorage() {

  return <View></View>;
}

// import React from 'react'
// import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'
// import { useState, useEffect } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import rncStyles from 'rncstyles';

// function LocalStorage() {
//     const [list, setList] = useState([])
//     const [text, setText] = useState('')
//     const [rendertodo, setRendertodo] = useState([])

//     const storeData = async () => {
//         try {
//             list.push(text)
//             const jsonValue = JSON.stringify(list);
//             await AsyncStorage.setItem('todos', jsonValue);
//             getData()
//         } catch (e) {
//             // saving error
//         }
//     };
//     const getData = async () => {
//         try {
//             const jsonValue = await AsyncStorage.getItem('todos');
//             const data = jsonValue != null ? JSON.parse(jsonValue) : null;
//             setRendertodo([...data])
//         } catch (e) {
//             // error reading value
//         }
//     };
//     return (
//         <View style={[rncStyles.p2, rncStyles.textBlack, rncStyles.w100, rncStyles.h100]}>
//             <View style={[rncStyles.h100, rncStyles.p2, rncStyles.bgLight]}>
//                 <TextInput onChangeText={(e) => setText(e)} placeholder="Enter Your Todos" placeholderTextColor='black' style={[rncStyles.input, rncStyles.border1, rncStyles.my1]} />
//                 <Button onPress={storeData} title='aDD todo' />
//                 <View>
//                     {rendertodo.map((e) => <View>
//                         <Text>{e}</Text>
//                     </View>)}
//                 </View>
//             </View>
//         </View>
//     )
// }

// export default LocalStorage