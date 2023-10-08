import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Slider from './slider';
import genres from '../data/genres.json'

const MusicUDB = ({navigation}) => {

    return (
        <ScrollView>
        <View style={styles.container}>
        {genres.map( current => {
            const { id } = current;
            return <Slider key={`genre${id}`} genre={{...current}} navigation={navigation} />
        } )}
        <StatusBar style="auto" />
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      backgroundColor: 'black',
      margin: 0
    },
    
});

export default MusicUDB;