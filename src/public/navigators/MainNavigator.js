import React from 'react';
import { createAppContainer,createStackNavigator,createSwitchNavigator ,createDrawerNavigator} from 'react-navigation';
import Home from '../../screens/Home'
import AddNote from '../../screens/AddNote'
import AddCategory from '../../screens/AddCategory'
import Detail from '../../screens/DetailBook'
import Sider from '../../screens/Drawer'

import CategoryHome from '../../screens/GetByCategory'

const AppNavigator = createStackNavigator(
  { 
    Home: {
      screen: Home,
      navigationOptions: { header: null }
    },
    AddCategory: {
      screen: AddCategory,
      navigationOptions: { header: null }
    },
    CategoryHome: {
      screen: CategoryHome,
      navigationOptions: { header: null }
    },
    AddNote: {
      screen: AddNote,
      navigationOptions: { header: null }
    },
    Detail: {
      screen: Detail,
      navigationOptions: { header: null }
    },
  
   
    Sider: {
      screen: Sider,
      navigationOptions: { header: null }
    },
    
  }
)
const drawer = createDrawerNavigator (
  {AppNavigator},{contentComponent:Sider}

)

export default createAppContainer( createSwitchNavigator( { drawer} ) )

