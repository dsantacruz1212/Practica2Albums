import { Text, Image, View, Dimensions, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useEffect } from 'react';
import Song from './song';
import { Divider } from "react-native-elements";

const Album = ({navigation, route}) => {
    const{ params: { albumTitle, uri, artist, songs } } = route;
    

    useEffect(() => {
        navigation.setOptions({ title: albumTitle });
    }, []);
    
    return (
        <View style={{
            alignItems: 'center',
            marginTop: 0,
            backgroundColor: 'black',
            height: '100%'
        }}>
            
            <Image style={{
                width: Dimensions.get("window").width * 0.50,
                height: Dimensions.get("window").height *0.25,
                marginTop: 20
            }} source={{uri}} />
            <Text style={styles.albumTitle}>{albumTitle}</Text>
            <Text style={styles.albumArtist}>{artist}</Text>

            <Divider style={{ backgroundColor: 'white' }} />
            
            <ScrollView  vertical style={styles.ScrollviewSongs} snapToAlignment="center" pagingEnabled scrollEnabled >
                        
            {songs.map((currentSong, index)=> {
                const { songName } = currentSong;
                return <Song key={index} songName={songName} artist={artist} navigation={navigation} albumInfo={{uri, albumTitle, artist}} />
                
            })}
                            
            </ScrollView>
            
            
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
    },
    ScrollviewSongs:{
        margin: 5

    }
})

export default Album;