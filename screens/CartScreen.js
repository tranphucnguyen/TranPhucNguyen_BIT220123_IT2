import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CartScreen = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 2, image: 'https://htmediagroup.vn/wp-content/uploads/2021/12/Ao-pijama-11-min.jpg' },
        { id: 2, name: 'Product 2', price: 15, quantity: 1, image: 'https://htmediagroup.vn/wp-content/uploads/2021/12/Ao-pijama-11-min.jpg' },
        // Add more items as needed
    ]);

    const handleQuantityChange = (itemId, type) => {
        const updatedItems = cartItems.map(item => {
            if (item.id === itemId) {
                if (type === 'increase') {
                    return { ...item, quantity: item.quantity + 1 };
                } else if (type === 'decrease' && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        setCartItems(updatedItems);
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('HelloScreen')}>
                <FontAwesomeIcon icon={faArrowLeft} size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.cartTitle}>Your Cart</Text>
            {cartItems.map(item => (
                <View key={item.id} style={[styles.itemContainer, { backgroundColor: '#f0f0f0' }]}>
                    <Image
                        source={{ uri: item.image }}
                        style={styles.itemImage}
                    />
                    <View style={styles.itemDetails}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                    </View>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(item.id, 'decrease')}>
                            <Text>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <TouchableOpacity style={styles.quantityButton} onPress={() => handleQuantityChange(item.id, 'increase')}>
                            <Text>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
            <View style={styles.totalContainer}>
                <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
    },
    cartTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 35, // Adjust margin to accommodate back button
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 8,
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        marginBottom: 5,
    },
    itemPrice: {
        fontSize: 14,
        color: 'gray',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantityButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    quantityText: {
        fontSize: 16,
        marginHorizontal: 10,
    },
    totalContainer: {
        marginTop: 20,
        alignItems: 'flex-end',
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CartScreen;
