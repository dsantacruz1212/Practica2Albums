import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Slider from './slider';
import genres from '../data/genres.json'

const MusicUDB = () => {
    // console.log(genres[0].title);
    return (
        <View style={styles.container}>
        {genres.map( current => {
            const { id } = current;
            return <Slider key={`genre${id}`} genre={{...current}} />
        } )}
        <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default MusicUDB;