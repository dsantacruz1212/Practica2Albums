import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { Icon } from "react-native-elements";

const Song = ({ songName, artist }) => {
    console.log('songName ', songName, artist);
    return(
        <View style={styles.songContainer}>
            <View style={styles.left}>
                <Text style={styles.songName}>
                    {songName}
                </Text>
                <Text style={styles.songArtist}>
                    {artist}
                </Text>
             </View> 
             <View style={styles.right}> 
                <TouchableOpacity style={styles.iconStyle}>
                    <Icon
                        name='play-arrow'
                    />
                </TouchableOpacity>
                <Icon
                    style={styles.iconStyle}
                    name='favorite-border'
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    songContainer: {
        width: Dimensions.get("window").width * 0.85
    },
    left: {
        
        color: 'white'
    },
    right: {
       
        color: 'white'
    },
    songName: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    
    },
    songArtist: {   
        fontSize: 10,
        color: 'white'
    },
    iconStyle: {
        
        color: '#FFFFFF'
    }
});

export default Song;