import React from 'react';
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Sign from './pages/auth/Sign';
import Login from './pages/auth/Login';
import Home from './pages/Home';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './styles/colors';
import Room from './pages/Room';




const Stack = createNativeStackNavigator();

const AuthStack = () =>{
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen 
        name="Login"
        component={Login}
      />
      <Stack.Screen 
        name="Sign"
        component={Sign}
      />
    </Stack.Navigator>
  )
}

const HomeStack = () =>{
  return (
    <Stack.Navigator >
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title: 'Code Talks',
          headerTintColor: 'black',
          headerRight: () => 
            <Icon 
              name="logout" 
              size={30} 
              color={'black'} 
              onPress={()=> auth().signOut()}
            />
          
          }}
      />
      <Stack.Screen 
        name="Room"
        component={Room}
        options={({ route }) => ({
          title: route.params.room.name,
          headerTintColor: 'black',
          headerRight: () => 
            <Icon 
              name="information"
              size={30} 
              color={'black'} 
              onPress={null}
            />
        })
      }
      />
    </Stack.Navigator>
  )
}


export default () =>{
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() =>{
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  },[])

  return (
    <NavigationContainer theme={MyTheme}>
        {
          !userSession ? (
            <AuthStack />
          ) : (
            <HomeStack />
          )
        }
       
    </NavigationContainer>
    
  );
};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
  },
};