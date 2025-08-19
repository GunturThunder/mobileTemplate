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
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction, getDetail, removeFromCartAction, searchTitle } from '../../store/pages/Product/actions';
import { Product } from '../../store/pages/Product/types';

const ProductPage: React.FC = ({navigation}:any) => {
    const dispatch = useDispatch()
    const { products, cart, data } = useSelector((state: any) => state.ProductReducer)
    useEffect(() => {
        dispatch(getDetail())
    }, [])
    const onChangeText = (value: string) => {
        dispatch(searchTitle(value))
        console.log('value gun', value)
    }
    const renderItem: ListRenderItem<any> = ({ item }) => {
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('ProductDetail', item)}>
                <Text>id : {item.id}</Text>
                <Text>title: {item.title}</Text>
            </TouchableOpacity>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                placeholderTextColor={'#000'}
                placeholder='search here'
            />
            {data ?
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
                : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    textInput: {
        padding: 10,
    },
});

export default ProductPage;