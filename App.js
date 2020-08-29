import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import RandomScreen from './screens/Random';
import ExploreScreen from './screens/Explore';
import RecipeDetailsScreen from './screens/RecipeDetails';
import RecipesByCategoryScreen from './screens/RecipesByCategory';
import RecipesDetailsByCategoryScreen from './screens/RecipesDetailsByCategory'
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      headerMode='screen'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen 
        name='Home'
        component={HomeScreen}
      />

      <Stack.Screen
        name='Recipe Details'
        component={RecipeDetailsScreen}
        options={({route}) => ({title: route.params.recipeName})}
      />
    </Stack.Navigator>
  )
}

const ExploreStack = createStackNavigator();

function ExploreCategoryStack() {
  return (
    <ExploreStack.Navigator
      initialRouteName='Recipe Category'
      headerMode='screen'
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <ExploreStack.Screen 
        name='Recipe Category'
        component={ExploreScreen}
      />
      
      <ExploreStack.Screen 
        name='Recipes By Category List'
        component={RecipesByCategoryScreen}
        options={({route}) => ({title: route.params.strCategory})}
      />
      
      <ExploreStack.Screen 
        name='Recipes Details By Category'
        component={RecipesDetailsByCategoryScreen}
        options={({route}) => ({title: route.params.strMeal})}
      />
    </ExploreStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Main') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Explore') {
            iconName = focused ? 'cloud-search' : 'cloud-search-outline';
          } else if (route.name === 'Random') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Main' component={MainStack} />
      <Tab.Screen name='Explore' component={ExploreCategoryStack} />
      <Tab.Screen name='Random' component={RandomScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
