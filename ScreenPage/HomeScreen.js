import { View, Text, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import dataProduct from '../dataProduct';
import { useState } from 'react';

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const renderItem = ({ item }) => {
        if (categoryFilter && item.category !== categoryFilter) {
            return null;
        }
        if (searchQuery.length > 0 &&
            !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            !item.descrice.toLowerCase().includes(searchQuery.toLowerCase())) {
            return null;
        }
        return (
            <View style={styles.container}>
                <Text>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{item.descrice}</Text>
                <Text>{item.category}</Text>

            </View>
        );
    }
    const filterByCategory = (category) => {
        setCategoryFilter(category);
    }
    const clearFilter = () => {
        setCategoryFilter('');
    }
    return (

        <View>
            <View>
                <TextInput
                    style={styles.search}
                    placeholder='search here '
                    onChangeText={text => setSearchQuery(text)}
                    value={searchQuery}
                />
            </View>
            {/* Tìm kiếm theo category */}
            <View style={styles.buttomcategory}>
                <TouchableOpacity
                    style={categoryFilter === 'áo' ? styles.activeButton : styles.button}
                    onPress={() => filterByCategory('áo')}
                >
                    <Text style={{ color: 'white' }}>Filter by Áo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={categoryFilter === 'quần' ? styles.activeButton : styles.button}
                    onPress={() => filterByCategory('quần')}
                >
                    <Text style={{ color: 'white' }}>Filter by Quần</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={categoryFilter === '' ? styles.activeButton : styles.button}
                    onPress={clearFilter}
                >
                    <Text style={{ color: 'white' }}>Show All</Text>
                </TouchableOpacity>
            </View>
            {/* Tìm kiếm theo category */}
            <FlatList
                data={dataProduct.filter(item => {
                    return searchQuery === ''   || (item.name.toLowerCase().includes(searchQuery.toLowerCase())
                                                || item.descrice.toLowerCase().includes(searchQuery.toLowerCase()));
                })}
                
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 16,

    },
    search: {
        marginVertical: 12,
        marginHorizontal: 16,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 16
    },
    buttomcategory: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'space-around',
    },
    button: {
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 8,
      },
      activeButton: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 8,
      },
     
})