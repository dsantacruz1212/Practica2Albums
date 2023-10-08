import { Text, Image, View, Dimensions, StyleSheet, FlatList } from 'react-native';
import { useEffect } from 'react';
import Song from './song';


const Album = ({navigation, route}) => {
    const{ params: { albumTitle, uri, artist, songs } } = route;

    useEffect(() => {
        navigation.setOptions({ title: albumTitle });
    }, []);
    console.log(songs);
    return (
        <View style={{
            alignItems: 'center',
            marginTop: 0,
            backgroundColor: 'black'
        }}>
            
            <Image style={{
                width: Dimensions.get("window").width * 0.50,
                height: Dimensions.get("window").height *0.25,
                marginTop: 7
            }} source={{uri}} />
            <Text style={styles.albumTitle}>{albumTitle}</Text>
            <Text style={styles.albumArtist}>{artist}</Text>
            <Text style={styles.albumArtist}>----------------------------------</Text>
          
            <Song songName={songs[0].songName} artist={artist} />
            <Song songName={songs[1].songName} artist={artist} />
            {/* {songs.map((currentSong, index)=> {
                const { songName } = currentSong;
                return <Song key={index} songName={songName} artist={artist} />
            })} */}
        </View>
    )
}

const styles = StyleSheet.create({
    albumTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    albumArtist: {
        fontSize: 15,
        color: 'white'
    }
})

export default Album;