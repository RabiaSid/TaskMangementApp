import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  Image,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import rncStyles from 'rncstyles';
import {styles} from '../../../../styles';
import BaseColor from '../../../constant';


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function ProductDetail({navigation, route}: any) {
    // const [listData, setListData] = useState<any>({});

    console.log(route.params, "===========> screen ")

    let obj = route.params

  // let getData = () => {
  //   Get('products/7')
  //     .then(res => {
  //       console.log(res.data);
  //       setListData({...res.data});
  //     })
  //     .catch(err => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);


  return (
    <KeyboardAvoidingView>
      <View style={[rncStyles.bgWhite, styles.screenContainer]}>
      
      <View
    // onPress={onPress}
      style={[
        styles.productDetaildiv,
        rncStyles.justifyContentCenter,
        rncStyles.alignItemsCenter,
      ]} >
        <ImageBackground source={{
          uri: obj.image,
        }} resizeMode="contain" style={styles.productDetailImage}>
    </ImageBackground>
      <View style={styles.productDetailDesc}>
        <Text
          style={{
            color: BaseColor.lightGrey,
            fontSize: 12,

          }}
          numberOfLines={1}>
         {obj.title}
        </Text>
        <Text style={{
            color: BaseColor.black,
            fontSize: 16,
            fontWeight:'400'
          }} >{obj.price}</Text>
          <Text style={{
            color: BaseColor.black,
            fontSize: 16,
            fontWeight:'400'
            
          }} >{obj.description}</Text>
      </View>
    </View>
     
       
      </View>
    </KeyboardAvoidingView>
  )
}
