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

const ProductPage: React.FC = () => {
    const dispatch = useDispatch()
    const {products, cart} = useSelector((state:any) => state.ProductReducer)
    const addToCart = (product: Product): void => {
        dispatch(addToCartAction(product));
    };

    const removeFromCart = (product: Product): void => {
        dispatch(removeFromCartAction(product))
    };

    const getProductQuantity = (productId: string): any => {
        return cart.filter((item:Product) => item.id === productId).length;
    };


    const renderProduct: ListRenderItem<Product> = ({ item }) => {
        const quantity = getProductQuantity(item.id);

        return (
            <View style={styles.productCard}>
                <Image source={{ uri: item.image }} style={styles.productImage} />

                <View style={styles.productInfo}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                    <Text style={styles.stockText}>Stock: {item.stock}</Text>
                    {quantity > 0 && (
                        <Text style={styles.quantityText}>In Cart: {quantity}</Text>
                    )}
                </View>

                <View style={styles.buttonContainer}>
                    {quantity > 0 && (
                        <TouchableOpacity
                            style={styles.removeButton}
                            onPress={() => removeFromCart(item)}
                            activeOpacity={0.7}
                        >
                            <Icon name="remove-circle" size={24} color="#FFFFFF" />
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => addToCart(item)}
                        activeOpacity={0.7}
                    >
                        <Icon name="add-circle" size={24} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Icon name="storefront-outline" size={28} color="#333" />
                <Text style={styles.headerTitle}>Products</Text>
                <View style={styles.cartContainer}>
                    <Icon name="cart-outline" size={28} color="#333" />
                    {cart.length > 0 && (
                        <View style={styles.cartBadge}>
                            <Text style={styles.cartBadgeText}>{cart.length}</Text>
                        </View>
                    )}
                </View>
            </View>

            {/* Product List */}
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.productList}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F9FA',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E9ECEF',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    cartContainer: {
        position: 'relative',
    },
    cartBadge: {
        position: 'absolute',
        right: -8,
        top: -8,
        backgroundColor: '#FF4444',
        borderRadius: 10,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartBadgeText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    productList: {
        padding: 16,
    },
    productCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 4,
    },
    stockText: {
        fontSize: 14,
        color: '#666',
    },
    quantityText: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: '600',
        marginTop: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    addButton: {
        backgroundColor: '#28A745',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        elevation: 2,
    },
    addButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 6,
    },
    removeButton: {
        backgroundColor: '#DC3545',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
        elevation: 2,
    },
    removeButtonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 6,
    },
});

export default ProductPage;