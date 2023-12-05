import {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import rncStyles from 'rncstyles';
import {fbSignUp} from '../../../config/firebase/firebase-methods';
import { add } from '../../../config/redux/reducers/userSlice';
import { useDispatch } from "react-redux";

export default function SignUp({navigation}: any) {
  const dispatch = useDispatch();
  const [model, setModel] = useState<any>({});
  // sir way
  // const SignUpUser = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(model.email, model.password)
  //     .then(res => {
  //       console.log('User account created & signed in!');
  //       model.id = res.user.uid;
  //       database()
  //         .ref(`users/${model.id}`)
  //         .set(model)
  //         .then(() => {
  //           ToastAndroid.show(`welcome ${model.fullName}`, ToastAndroid.SHORT);
  //           navigation.navigate('ProductHome');
  //         })
  //         .catch(err => {});
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };

  const SignUpUser = () => {
    dispatch(add({ ...model }))
    fbSignUp(model)
      .then((res: any) => {
        ToastAndroid.show(`welcome ${model.fullName}`, ToastAndroid.SHORT);
        navigation.navigate('ProductHome');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <View style={[rncStyles.h100, rncStyles.bgWhite]}>
        <View style={[rncStyles.p2, rncStyles.justifyContentCenter]}>
          <View style={rncStyles.py3}>
            <Text
              style={[
                rncStyles.fs1,
                rncStyles.textPrimary,
                rncStyles.textBold,
                rncStyles.mb1,
              ]}>
              Sign Up
            </Text>
            <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>
              Please Enter Your Information and create Acount.
            </Text>
          </View>
          <ScrollView>
            <View>
              <View style={rncStyles.pb1}>
                <Text style={[rncStyles.textPrimary, rncStyles.p1]}>
                  Full Name
                </Text>
                <TextInput
                  style={[
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                    rncStyles.textSecondary,
                  ]}
                  value={model.fullName}
                  onChangeText={e => setModel({...model, fullName: e})}
                  placeholder="eg. Muhammad Zaid"
                />
              </View>
              <View style={rncStyles.pb1}>
                <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Email</Text>
                <TextInput
                  keyboardType="email-address"
                  style={[
                    rncStyles.textSecondary,
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                  ]}
                  placeholder="example@abc.com"
                  value={model.email}
                  onChangeText={e => setModel({...model, email: e})}
                />
              </View>
              <View style={rncStyles.pb1}>
                <Text style={[rncStyles.textPrimary, rncStyles.p1]}>
                  Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  style={[
                    rncStyles.textSecondary,
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                  ]}
                  placeholder="Enter Password atleast 6 characters"
                  value={model.password}
                  onChangeText={e => setModel({...model, password: e})}
                />
              </View>
              {/* <View style={rncStyles.pb1}>
                <Text style={[rncStyles.textPrimary, rncStyles.p1]}>
                  Retype Password
                </Text>
                <TextInput
                  secureTextEntry={true}
                  style={[
                     rncStyles.textSecondary,
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                  ]}
                  placeholder="Enter Password atleast 6 characters"
                />
              </View> */}
              <View style={rncStyles.py2}>
                <TouchableOpacity
                  style={[rncStyles.btnPrimary, rncStyles.rounded]}
                  onPress={SignUpUser}>
                  <Text
                    style={[
                      rncStyles.fs5,
                      rncStyles.textWhite,
                      rncStyles.textCenter,
                    ]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <View
            style={[
              rncStyles.py2,
              rncStyles.flexRow,
              rncStyles.justifyContentCenter,
            ]}>
            <Text
              style={[
                rncStyles.textBold,
                rncStyles.textSecondary,
                rncStyles.fs5,
              ]}>
              Have an Account?
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  rncStyles.textBold,
                  rncStyles.fs5,
                  rncStyles.ms1,
                  rncStyles.textPrimary,
                ]}
                onPress={() => {
                  navigation.navigate('Login');
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
