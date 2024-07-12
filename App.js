import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from './screens/SignInScreen'; // Màn hình đăng nhập
import HelloScreen from './screens/HelloScreen'; // Màn hình chào
import ScanScreen from './screens/ScanScreen'; // Màn hình quét
import CartScreen from './screens/CartScreen'; // Màn hình giỏ hàng
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRing, faPrint, faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#ccc',
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 5,
        },
        tabStyle: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
        iconStyle: {
          marginBottom: 5,
        },
        labelStyle: {
          fontSize: 12,
        },
        activeTintColor: '#000',
        inactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HelloScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHome} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Rings"
        component={HelloScreen}
        options={{
          tabBarLabel: 'Nhẫn',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faRing} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Print"
        component={ScanScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('ScanScreen');
          },
        })}
        options={{
          tabBarLabel: 'In',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faPrint} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Clock"
        component={HelloScreen}
        options={{
          tabBarLabel: 'Đồng hồ',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faClock} size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={HelloScreen}
        listeners={({ navigation }) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('CartScreen');
          },
        })}
        options={{
          tabBarLabel: 'Giỏ hàng',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faShoppingCart} size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HelloScreen" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CartScreen" component={CartScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
