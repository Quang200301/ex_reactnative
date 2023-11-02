import { View, Text, SafeAreaView, FlatList, StyleSheet, Pressable, Alert } from 'react-native';
import dataProduct from '../dataProduct';

import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { addItem, decrement, increment, removeItem } from '../Component/features.js/counterSlice';
const cart = ({ navigation }) => {
    const dispatch = useDispatch();

    const addedItems = useSelector((state) => state.cart.cart);
    // console.log('âddd=>', addedItems)
    const addToCart = item => {
        dispatch(addItem(item));
    };
    const renderItem = ({ item }) => {
        return (
            <SafeAreaView style={styles.containers}>
                <View style={styles.container}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                    <Pressable onPress={() => addToCart(item)}>
                        <Text style={{ borderWidth: 1, borderRadius: 6 }}>Add cart</Text>
                    </Pressable>
                </View>

            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text>Alo</Text>
                <Text onPress={() => navigation.navigate('cartproduct')}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                    {/* <Text>{addedItems.cart.cart.length}</Text> */}
                    <Text>{addedItems.length}</Text>

                </Text>

            </View>

            <FlatList
                data={dataProduct}
                renderItem={renderItem}

            />
        </SafeAreaView>
    )


}
export default cart;

const styles = StyleSheet.create({
    containers: {
        flex: 1,

    },
    container: {
        marginHorizontal: 32,
        marginVertical: 18,
        backgroundColor: '#D81B60',
        margin: 12,
        borderRadius: 12,
        alignItems: 'center'

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})