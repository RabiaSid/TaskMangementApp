import {StyleSheet, Dimensions} from 'react-native';
import BaseColor from './constant';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  screenContainer: {
    height: deviceHeight / 1,
    width: deviceWidth / 1,
  },
  profileHeaderdiv: {
    width: deviceWidth / 1,
  },

  profileHeaderdivText: {
    width: deviceWidth / 1.3,
  },
  profileHeaderdivImage: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: 45,
    height: 45,
  },
  backText: {
    color: BaseColor.black,
  },
  profileSearchdiv: {
    width: deviceWidth / 1.3,
  },
  profileSearchButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    width: 45,
    height: 45,
  },
  Menudiv: {
    width: deviceWidth / 1,
  },
  MenuButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    minWidth: 45,
    height: 25,
    paddingHorizontal: 5,
  },
  productCarddiv: {
    width: deviceWidth / 2.3,
    padding: 5,
    backgroundColor:"white",
    marginHorizontal:3,
    marginVertical:3,
    borderRadius: 5,
  },
  productCardImage: {
      width: deviceWidth / 2.4,
      height: deviceHeight / 4,
    borderRadius: 5,
},
productCardDesc: {
    width: deviceWidth / 2.4,
    borderRadius: 5,
},
productDetaildiv: {
  width: deviceWidth / 1,
  //   backgroundColor:"red"
},
productDetailImage: {
  width: deviceWidth / 1,
  height: deviceHeight / 2.2,
  borderRadius: 5,
},
productDetailDesc: {
  width: deviceWidth / 1.1,
    borderRadius: 5,
},
});
