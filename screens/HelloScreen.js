import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint, faCheckCircle, faExclamationTriangle, faBook, faRightLong, faHome, faRing, faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HelloScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.helloText}>Hello</Text>
                    <Text style={styles.nameText}>Christie Doe</Text>
                </View>

                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/736x/bc/43/98/bc439871417621836a0eeea768d60944.jpg' }}
                        style={styles.avatar}
                    />
                </View>
                <Text style={styles.sectionTitle}>Your Insights</Text>
                <View style={styles.itemsContainer}>
                    <View style={styles.item}>
                        <FontAwesomeIcon icon={faPrint} size={50} color="blue" />
                        <Text style={styles.itemText}>Scan new</Text>
                    </View>
                    <View style={styles.item}>
                        <FontAwesomeIcon icon={faCheckCircle} size={50} color="green" />
                        <Text style={styles.itemText}>Success</Text>
                    </View>
                    <View style={styles.item}>
                        <FontAwesomeIcon icon={faExclamationTriangle} size={50} color="orange" />
                        <Text style={styles.itemText}>Counterfeits</Text>
                    </View>
                    <View style={styles.item}>
                        <FontAwesomeIcon icon={faBook} size={50} color="blue" />
                        <Text style={styles.itemText}>Directory</Text>
                    </View>
                </View>
                <View style={styles.exploreContainer}>
                    <Text style={styles.sectionTitle}>Explore More</Text>
                    <FontAwesomeIcon icon={faRightLong} size={50} color="black" />
                </View>
                <View style={styles.imagesContainer}>
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.squareImage}
                    />
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.squareImage}
                    />
                    <Image
                        source={{ uri: 'https://via.placeholder.com/150' }}
                        style={styles.squareImage}
                    />
                </View>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
    },
    container: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    helloText: {
        fontWeight: 'bold',
        fontSize: 24,
    },
    nameText: {
        fontSize: 16,
        marginLeft: 8,
    },
    avatarContainer: {
        alignItems: 'flex-end',
        marginBottom: 16,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25, // Rounded corners
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    itemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    item: {
        width: '48%', // Use percentage to create spacing between items
        height: 120,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    itemText: {
        fontSize: 16,
        marginTop: 8,
    },
    exploreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    squareImage: {
        width: 100,
        height: 100,
        borderRadius: 10, // Rounded corners
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center', // Center items horizontally
        alignItems: 'center', // Center items vertically
        paddingHorizontal: 16,
        paddingVertical: 12, // Increased padding vertical
        borderTopLeftRadius: 20, // Rounded top-left corner
        borderTopRightRadius: 20, // Rounded top-right corner
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    fixedMenu: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%', // Adjusted width to create space on sides
    },
    menuIconWrapper: {
        flex: 1, // Equal spacing between items
        alignItems: 'center', // Center items horizontally
    },
    menuIcon: {
        marginHorizontal: 20, // Increased horizontal margin for spacing between icons
    },
});

export default HelloScreen;
