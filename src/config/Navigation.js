//import {Navigation} from 'react-native-navigation';
import { StackNavigator, createStackNavigator}from 'react-navigation';
import Logout from '../screen/Logout/Logout';
import Login from '../screen/Login/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default MainNavigator = createStackNavigator({
    Logout: {screen: Logout,
        navigationOptions: {
            },
        },
        Login: {screen: Login}
},{
        //headerMode: 'none',
        // navigationOptions: {
        //     headerVisible: false
        // }
});

