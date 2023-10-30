import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { removeItem} from '../Component/features.js/counterSlice';
import { incrementQuantity} from '../Component/features.js/counterSlice';
import { decrementQuantity} from '../Component/features.js/counterSlice';
import { selectTotalAllQuantity,selectTotalAllPrice } from '../Component/features.js/cartSelectors';
import { useSelector, useDispatch } from 'react-redux';


export default function CartProduct() {
  const CartItems = useSelector((state) => state.cart.cart);
  const totalQuantity = useSelector(selectTotalAllQuantity);
  const totalPrice = useSelector(selectTotalAllPrice);
  const dispatch = useDispatch();
  const removeItemFromCart = (item) => {
    dispatch(removeItem(item));
  };
  const incrementItemQuantity = (item)=>{
    dispatch(incrementQuantity(item));
  };
  const decrementItemQuantity = (item)=>{
    dispatch(decrementQuantity(item));
  };
  const renderItem = ({ item }) => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.showCart}>
          <Text>{item.name}</Text>
          <Text>{item.totalPrice } $</Text>
          <View style={{ flexDirection: 'row', gap: 14 }}>
          <Pressable onPress={() => decrementItemQuantity(item)}>
              <Text style={styles.remove}>-</Text>
            </Pressable>
            <Text>{item.quantity}</Text>
            <Pressable onPress={() => incrementItemQuantity(item)}>
              <Text style={styles.remove}>+</Text>
            </Pressable>
            <Pressable onPress={() => removeItemFromCart(item)}>
              <Text style={styles.remove}>Remove</Text>
            </Pressable>
          </View>

        </View>

      </SafeAreaView>
    )
  }
  return (
    <View>
      <Text>CartItems:</Text>
      <FlatList
        data={CartItems}
        renderItem={renderItem}
      />
      <View style={styles.totalItem}>
        <View style={{flexDirection:'row',gap:100}}>
        <Text style={{fontSize:20,fontWeight:'800'}}>TotalPrice:</Text>
        <Text style={{fontSize:20,fontWeight:'800'}}>{totalPrice}$</Text>
        </View>
       <View  style={{flexDirection:'row',gap:110}}>
       <Text style={{fontSize:20,fontWeight:'800'}}>TotalQuantity:</Text>
       <Text style={{fontSize:20,fontWeight:'800'}}>{totalQuantity}</Text>
       </View>
       
      </View>
    </View>
  )


};
const styles = StyleSheet.create({
  showCart: {
    backgroundColor: 'grey',
    padding: 10,
    marginHorizontal: 18,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 12

  },
  container: {
    flex: 1,
  },
  plus: {
    fontSize: 15,
    backgroundColor: '#1E88E5',
    borderRadius: 12,
    padding: 10
  },
  minus: {
    fontSize: 15,
    backgroundColor: '#1E88E5',
    borderRadius: 12,
    padding: 10
  },
  remove: {
    fontSize: 10,
    backgroundColor: '#1E88E5',
    borderRadius: 12,
    padding: 10
  },
  totalItem:{
    backgroundColor:'#FF9E80',
    position:"absolute",
    width:'90%',
    height:90,
    justifyContent:"center",
    alignItems:'center',
    marginTop:530,
    marginLeft:20,
    borderRadius:26
  }
})
