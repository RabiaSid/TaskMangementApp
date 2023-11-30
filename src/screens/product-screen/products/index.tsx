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
import rncStyles from 'rncstyles';
import {styles} from '../../../../styles';
import BaseColor from '../../../constant';
import ProductCard from '../../../components/card/product-card';
import {useState, useEffect} from 'react';
import {Get} from '../../../config/api-method';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from "react-redux";
import {Colors} from 'react-native/Libraries/NewAppScreen';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default function Product({navigation}: any) {
  const [listData, setListData] = useState<any>([]);
  const userData = useSelector((state: any) => state.user);
  // const [selectedCategory, setSelectedCategory] = useState('All');

  let getData = () => {
    Get('products')
      .then(res => {
        console.log(res.data);
        setListData([...res.data]);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <KeyboardAvoidingView>
      <View style={[rncStyles.bgWhite, styles.screenContainer]}>
        <View
          style={[
            rncStyles.flexRow,
            styles.profileHeaderdiv,
            rncStyles.flexCenter,
            rncStyles.pt1,
          ]}>
          <View
            style={[
              rncStyles.flexColumn,
              styles.profileHeaderdivText,
              rncStyles.ps2,
            ]}>
            <Text
              style={[
                styles.backText,
                {color: BaseColor.lightGrey, fontSize: 12},
              ]}>
              Hellow There!!!
            </Text>
            <Text
              style={[rncStyles.fs6, styles.backText, {fontWeight: 'bold'}]}>
                {userData?.fullName &&
                      userData.fullName.charAt(0).toUpperCase() +
                        userData.fullName.slice(1)}
              
            </Text>
          </View>
          <View style={[styles.profileHeaderdivImage]}></View>
        </View>

        <View
          style={[
            rncStyles.flexRow,
            rncStyles.justifyContentCenter,
            rncStyles.alignItemsCenter,
            {width: deviceWidth / 1, paddingVertical: 5},
          ]}>
          <View style={[rncStyles.flexColumn, styles.profileSearchdiv]}>
            <TextInput
              placeholder="Input"
              placeholderTextColor="black"
              style={[
                rncStyles.px1,
                rncStyles.border1,
                {borderColor: `#9caccb`, height: 45},
                {borderRadius: 5},
              ]}
            />
          </View>
          <View style={[rncStyles.ps1]}>
            <TouchableOpacity
              style={[
                styles.profileSearchButton,
                rncStyles.flexRow,
                rncStyles.justifyContentCenter,
                rncStyles.alignItemsCenter,
              ]}>
              <Icon name="search" size={30} color={BaseColor.white}></Icon>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView>
          <View
            style={[rncStyles.flexRow, styles.Menudiv, rncStyles.flexCenter]}>
            <View style={{paddingHorizontal: 3}}>
              <TouchableOpacity
                style={[
                  styles.MenuButton,
                  rncStyles.flexRow,
                  rncStyles.justifyContentCenter,
                  rncStyles.alignItemsCenter,
                ]}
                // onPress={() => setSelectedCategory('All')}
              >
                <Text>All</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 3}}>
              <TouchableOpacity
                style={[
                  styles.MenuButton,
                  rncStyles.flexRow,
                  rncStyles.justifyContentCenter,
                  rncStyles.alignItemsCenter,
                ]}
                // onPress={() => setSelectedCategory("men's")}
              >
                <Text>men's</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 3}}>
              <TouchableOpacity
                style={[
                  styles.MenuButton,
                  rncStyles.flexRow,
                  rncStyles.justifyContentCenter,
                  rncStyles.alignItemsCenter,
                ]}
                // onPress={() => setSelectedCategory("women's")}
              >
                <Text>women's</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 3}}>
              <TouchableOpacity
                style={[
                  styles.MenuButton,
                  rncStyles.flexRow,
                  rncStyles.justifyContentCenter,
                  rncStyles.alignItemsCenter,
                ]}
                // onPress={() => setSelectedCategory('electronics')}
              >
                <Text>electronics</Text>
              </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 3}}>
              <TouchableOpacity
                style={[
                  styles.MenuButton,
                  rncStyles.flexRow,
                  rncStyles.justifyContentCenter,
                  rncStyles.alignItemsCenter,
                ]}
                // onPress={() => setSelectedCategory('jewelery')}
              >
                <Text>jewelery</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* {selectedCategory === 'All' && ( */}
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              width: deviceWidth / 1,
              paddingHorizontal: 5,
              justifyContent: 'center',
              paddingTop: 10,
            }}>
            {listData.map((x: any, i: any) => (
              <ProductCard
                key={i}
                title={x.title}
                price={x.price}
                image={x.image}
                // onPress={() => navigation.navigate(`/${x.id}`)}
                onPress={() => navigation.navigate('ProductDetail', x)}
              />
            ))}
          </View>
          {/* )} */}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}
