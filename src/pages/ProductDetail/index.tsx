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

const ProductDetail: React.FC = ({ route }:any) => {
    // const [itemState, setItemSate] = useState(props.params.params)
    console.log('route gun', route.params)

    return (
        <SafeAreaView style={styles.container}>
            <Text>userId: {route.params.userId}</Text>
            <Text>id: {route.params.id}</Text>
            <Text>title: {route.params.title}</Text>
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

export default ProductDetail;