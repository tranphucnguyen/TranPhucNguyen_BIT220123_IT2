import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

const ContactScreen = () => {
    return (
        <ImageBackground
            source={require('../Contact.png')}
            style={styles.backgroundImage}
        >
            <View style={styles.container}>
                <Text style={styles.text}>Get your groceries with nectar</Text>
                <View style={styles.smallImageContainer}>
                    <Image
                        source={require('../image.png')} // Replace with your small image path
                        style={styles.smallImage}
                    />
                    <Text style={styles.smallImageText}>+ 880</Text>
                </View>
                <View style={styles.underline} />
                <Text style={styles.connectText}>Or connect with social media</Text>
                <View style={styles.socialMediaContainer}>
                    <Image
                        source={require('../google.png')} // Replace with your social media image path
                        style={styles.socialMediaImage}
                    />
                    <Image
                        source={require('../facebook.png')} // Replace with your social media image path
                        style={styles.socialMediaImage}
                    />
                </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: '400px',
    },
    contactImage: {
        width: 200, // Adjust as needed
        height: 200, // Adjust as needed
        marginBottom: 20,
    },
    text: {
        fontSize: 24,
        // fontWeight: 'bold',
        color: '#030303', // Changed to black
        alignSelf: 'flex-start', // Align to the left
    },
    smallImageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginRight: 200,
    },
    smallImage: {
        width: 40, // Adjust as needed
        height: 30, // Adjust as needed
        marginRight: 10,
    },
    smallImageText: {
        fontSize: 18,
        color: 'black', // Changed to black
    },
    underline: {
        width: '100%',
        height: 1,
        backgroundColor: 'gray', // Changed to black
        marginVertical: 10,
    },
    connectText: {
        fontSize: 11,
        color: 'gray', // Changed to black
        marginVertical: 10,
        marginLeft: 55,
    },
    socialMediaContainer: {
        alignItems: 'center',
    },
    socialMediaImage: {
        marginLeft: '80px',
        width: 300, // Adjust as needed
        height: 55, // Adjust as needed
        marginVertical: 10,
    },
});

export default ContactScreen;
