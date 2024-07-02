import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SignInScreen = ({ navigation }) => {
    const handleSignIn = () => {
        // Xử lý logic đăng nhập ở đây

        // Sau khi đăng nhập thành công, điều hướng đến màn hình 'Hello'
        navigation.navigate('Hello');
    };

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://i.pinimg.com/236x/fb/7b/b6/fb7bb621adb8f3995090123b5a486019.jpg' }}
                style={styles.avatar}
            />
            <Text style={styles.title}>Scan, Pay & Enjoy</Text>
            <Text style={styles.description}>Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friend shopping!</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC0CB', // Pink background color
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75, // Rounded corners
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFB6C1', // Light pink button color
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF', // White text color
    },
});

export default SignInScreen;
