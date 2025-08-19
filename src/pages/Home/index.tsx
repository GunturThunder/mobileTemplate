import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Alert,
    Image,
    ListRenderItem,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction, removeFromCartAction } from '../../store/pages/Product/actions';
import { Product } from '../../store/pages/Product/types';

const HomePage: React.FC = () => {
    const dispatch = useDispatch()
    const {products, cart} = useSelector((state:any) => state.ProductReducer)

    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
        alignItems:'center',
        justifyContent:'center'
    }
});

export default HomePage;

            {/* <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.productList}
                showsVerticalScrollIndicator={false}
            /> */}