import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Slider from './slider';
import genres from '../data/genres.json'

const MusicUDB = ({navigation}) => {

    return (
        <ScrollView snapToInterval={300} style={{backgroundColor: 'black', height: '100%'}} > 
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
      justifyContent: 'center',
      margin: 0
    },
    
});

export default MusicUDB;