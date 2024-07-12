import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const ScanScreen = ({ navigation }) => {
    const slides = [
        {
            key: 'one',
            title: 'Scan, Pay & Enjoy',
            text: 'Scan products you want to buy at your favorite store and pay by your phone & enjoy happy, friend shopping!',
            image: 'https://i.pinimg.com/236x/fb/7b/b6/fb7bb621adb8f3995090123b5a486019.jpg',
            backgroundColor: '#FFC0CB',
        },
        {
            key: 'two',
            title: 'Items & Prices',
            text: 'View items and prices of products you want to buy at your favorite store. No more waiting in line!',
            image: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/4/25/a-va-an-do-ngot-co-hai-gi-16509059330871675241399.jpg',
            backgroundColor: '#FFC0CB',
        },
        // Thêm nhiều slide khác nếu cần
    ];

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.container, { backgroundColor: item.backgroundColor }]}>
                <Image
                    source={{ uri: item.image }}
                    style={styles.avatar}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.text}</Text>
            </View>
        );
    };

    const onDone = () => {
        // Sau khi hoàn thành intro slider, điều hướng đến màn hình 'HelloScreen'
        navigation.navigate('HelloScreen');
    };

    return (
        <View style={styles.sliderContainer}>
            <AppIntroSlider
                renderItem={renderItem}
                data={slides}
                onDone={onDone}
                renderNextButton={() => (
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Next</Text>
                    </View>
                )}
                renderDoneButton={() => (
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Done</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sliderContainer: {
        flex: 1,
        backgroundColor: '#FFC0CB', // Pink background color for the entire screen
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50, // Add marginTop to move slides down
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

export default ScanScreen;
