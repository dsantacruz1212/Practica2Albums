import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Album from './album';
import Player from './player';


const Stack = createNativeStackNavigator();

const Header = ({ component }) => {
    // return 
    // <>
    //     <Text style={styles.headerStyle}>{title ? title : 'Music UDB'}</Text>
    //     {albumComponent ? albumComponent() : component() }
    // </>
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Music UDB' options={{headerStyle: styles.UDBStyle}} component={component} />
            <Stack.Screen name='Album' options={{headerStyle: styles.headerStyle}} component={Album} />
            <Stack.Screen name='Player' options={{headerStyle: styles.headerStyle}} component={Player} />
            {/* {activeAlbum ? <Stack.Screen name={title} options={{headerStyle: styles.headerStyle}} component={component} /> : <></>} */}
        </Stack.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#3a5c2b', 
        fontSize: 300,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    UDBStyle: {
        backgroundColor: '#3a5c2b', 
        textAlign: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
        
    }
})

export default Header;