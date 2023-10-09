import { Text, Image, View, StyleSheet, Dimensions } from "react-native";
import { useEffect } from "react";
import { Icon } from "react-native-elements";


const Player = ( { navigation,route } ) => {
    const{ params: { songName, albumInfo: {albumTitle, uri, artist} } } = route;

    useEffect(() => {
        navigation.setOptions({ title: albumTitle });
    }, []);

    return(
        <View style={styles.container}> 

             <View style={{alignItems: 'center'}}>
                    <Image style={styles.albumimagestyle} source={{uri}} />
            </View> 
            <View>
                    <Text style={styles.SongTitle}>{songName}</Text>
                    <Text style={styles.Artist}>{artist}</Text>
            </View>

             <View style={styles.PlayerContainer}> 
                 <View style ={styles.iconstyle}>
                        <Icon name='skip-previous' color='white'  size={40}/>
                 </View>
                 <View style ={styles.iconstyle}>
                        <Icon name='play-arrow'    color='white' size={40}/>
                 </View>
                 <View style ={styles.iconstyle}>
                        <Icon name='skip-next'     color='white' size={40}  />
                 </View>
             </View>
        </View> //CONT PRINC
    )
}













const styles = StyleSheet.create({
    SongTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: '10%'
        
    },
    Artist: {
        fontSize: 15,
        color: 'white',
        marginLeft: '10%'
    },
    container: {
        backgroundColor: 'black',
        height: '100%'

    },
    albumimagestyle: {
        width: Dimensions.get("window").width * 0.80,
        height: Dimensions.get("window").height *0.40,
        marginTop: '10%',
        marginBottom: 80

    },
    PlayerContainer: {
        width: Dimensions.get("window").width * 1,
        height: Dimensions.get("window").height * 12,
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: Dimensions.get("window").height * 0.1     
},
iconstyle : {
    
}
})

export default Player;