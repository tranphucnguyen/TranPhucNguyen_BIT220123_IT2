import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';

const IntroScreen = ({ navigation }) => {
    const handleGetStarted = () => {
        navigation.navigate('Contact');
    };

    return (
        <ImageBackground
            source={require('../Intro.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image
                        source={require('../Group.png')} // Replace with your image path
                        style={styles.smallImage}
                    />
                    <Text style={styles.title}>
                        Welcome
                        {'\n'}
                        to our store
                    </Text>
                    <Text style={styles.subtitle}>Get your groceries in as fast as one hour</Text>
                </View>
                <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        paddingHorizontal: 20,
        marginTop: '500px',
        marginLeft: '60px',
    },
    contentContainer: {
        alignItems: 'center',
        marginBottom: 20, // Adjust spacing between text and button
    },
    smallImage: {
        width: 50, // Adjust width as needed
        height: 50, // Adjust height as needed
        marginBottom: 10, // Adjust spacing between image and text
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center', // Center text horizontally
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 13,
        color: 'gray',
        // textAlign: 'center', // Center text horizontally
    },
    getStartedButton: {
        backgroundColor: '#53B175',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        marginTop: 20, // Adjust spacing between content and button
        width: '145%',
        height: '25%', // Adjust button width as needed
        alignItems: 'center',
        justifyContent: 'center', // Center button text horizontally
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default IntroScreen;
