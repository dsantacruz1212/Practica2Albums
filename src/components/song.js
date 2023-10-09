import { Dimensions, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { Icon  , Divider} from "react-native-elements";

const Song = ({ songName, artist, navigation, albumInfo }) => {
    return(
       
            <View style={styles.songContainer} >
            <TouchableOpacity style={styles.iconStyle} onPress={() =>{
                    navigation.navigate('Player', {
                        songName,
                        albumInfo
                    })
                }}>
            <View style={styles.left}>   
            <Text style={styles.songName}>
                    {songName}
                </Text>
                
                <Text style={styles.songArtist}>
                    {artist}
                </Text>
                
             </View> 
             
             </TouchableOpacity>
             <View style={styles.right}> 
                <TouchableOpacity style={styles.iconStyle} onPress={() =>{
                    navigation.navigate('Player', {
                        songName,
                        albumInfo
                    })
                }}>
                    <Icon
                        name='play-arrow'
                        color={'white'}
                        boolean = 'false'
                        
                    />
                </TouchableOpacity>
                <Icon
                    style={styles.iconStyle}
                    name='favorite-border'
                    color={'white'}
                    boolean = 'false'
                />
            </View>
            </View>
            
        
    )
};

const styles = StyleSheet.create({
    songContainer: {
        width: Dimensions.get("window").width * 0.85,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        margin: 7
    },
    left: {
        
        color: 'white'
    },
    right: {
       
        color: 'white',
        flexDirection: 'row', 
        justifyContent: 'space-between'
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
        
        
    }
});

export default Song;