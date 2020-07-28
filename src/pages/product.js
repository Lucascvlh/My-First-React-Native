import React from 'react';
import {View, Text} from 'react-native'

const Product = () =>(
  <View>
    <Text>Product</Text>
  </View>
);

Product.navigationOptions = ({navigation}) =>({
  title: navigation.state.params.product.title,
})
export default Product;   