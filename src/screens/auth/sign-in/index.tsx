import {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
  ToastAndroid,
} from 'react-native';
import rncStyles from 'rncstyles';
import {fbLogin} from '../../../config/firebase/firebase-methods';
import {useDispatch} from 'react-redux';
import { add } from '../../../config/redux/reducers/userSlice';

export default function Login({navigation}: any) {
  const dispatch = useDispatch();
  const [model, setModel] = useState<any>({});

  // sir way
  // const LogInUser = () => {
  //   auth()
  //     .signInWithEmailAndPassword(model.email, model.password)
  //     .then(res => {
  //       let id = res.user.uid;
  //       database()
  //         .ref(`users/${id}`)
  //         .on('value', data => {
  //           let user = data.val();
  //           console.log(user);
  //           ToastAndroid.show(`welcome ${model.email}`, ToastAndroid.SHORT);
  //           navigation.navigate('ProductHome');
  //         });
  //     })
  //     .catch(err => {});
  // };

  const LogInUser = () => {
    fbLogin(model)
      .then((res: any) => {
        console.log('Response data:', res);
        dispatch(add({...res}));
        ToastAndroid.show(`welcome ${res.fullName}`, ToastAndroid.SHORT);
        navigation.navigate('ProductHome');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={[rncStyles.h100, rncStyles.bgWhite]}>
        <View
          style={[
            rncStyles.h100,
            rncStyles.p2,
            rncStyles.justifyContentCenter,
          ]}>
          <ScrollView>
            <View style={rncStyles.py5}>
              <View style={rncStyles.flexCenter}>
                <Image
                  resizeMode="contain"
                  style={[rncStyles.roundedPill, {width: 140, height: 140}]}
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xKaQDRmiaG94pbm-BCrgPSZRksQ_BSGxmY3qGxEPI_DYyVLB2QpDM02N81rto21mths&usqp=CAU',
                  }}
                />
              </View>
              <View style={rncStyles.flexCenter}>
                <Text
                  style={[
                    rncStyles.fs1,
                    rncStyles.textPrimary,
                    rncStyles.textBold,
                    rncStyles.mb1,
                  ]}>
                  Muhammad Zaid
                </Text>
                <Text style={[rncStyles.fs5, rncStyles.textSecondary]}>
                  @Muhammad_zaid
                </Text>
              </View>
            </View>

            <View>
              <View style={rncStyles.pb1}>
                <Text style={[rncStyles.textPrimary, rncStyles.p1]}>Email</Text>
                <TextInput
                  style={[
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                    rncStyles.textSecondary,
                  ]}
                  placeholder="eg. Muhammad Zaid"
                  value={model.email}
                  onChangeText={e => setModel({...model, email: e})}
                />
              </View>

              <View style={rncStyles.pb1}>
                <Text style={[rncStyles.textPrimary, rncStyles.p1]}>
                  Password
                </Text>
                <TextInput
                  keyboardType="number-pad"
                  style={[
                    rncStyles.input,
                    rncStyles.bgWhite,
                    rncStyles.rounded,
                    rncStyles.border1,
                    rncStyles.borderPrimary,
                    rncStyles.textSecondary,
                  ]}
                  placeholder="Enter Password atleast 6 characters"
                  value={model.password}
                  onChangeText={e => setModel({...model, password: e})}
                />
              </View>
              <View style={rncStyles.py2}>
                <TouchableOpacity
                  style={[rncStyles.btnPrimary, rncStyles.rounded]}
                  onPress={LogInUser}>
                  <Text
                    style={[
                      rncStyles.fs5,
                      rncStyles.textWhite,
                      rncStyles.textCenter,
                    ]}>
                    Update
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
              Don't Have an Account?
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
                  navigation.navigate('SignUp');
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
