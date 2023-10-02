import { StyleSheet, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator();

const Header = ({ component, activeAlbum }) => {
    const { title, albumComponent } = activeAlbum;
    // return 
    // <>
    //     <Text style={styles.headerStyle}>{title ? title : 'Music UDB'}</Text>
    //     {albumComponent ? albumComponent() : component() }
    // </>
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Music UDB' options={{headerStyle: styles.headerStyle}} component={component} />
            {/* {activeAlbum ? <Stack.Screen name={title} options={{headerStyle: styles.headerStyle}} component={component} /> : <></>} */}
        </Stack.Navigator>
    </NavigationContainer>
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#93c47d', 
        fontSize: 30
    }
})

export default Header;