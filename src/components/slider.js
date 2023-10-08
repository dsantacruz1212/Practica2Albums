import { ScrollView, View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from "react-native";

const Slider = ({ genre, navigation }) => {
    // console.log(genre);
    const { title, albums } = genre;
    console.log(title);
    return<>
        
        <Text style={styles.TextGenreStyle}>{title}</Text>
            
            { <ScrollView horizontal style={styles.ScrollViewStyle} >
            
                
            {albums.map( current => {
                const { uri, id, title: albumTitle, artist } = current;
                return <TouchableOpacity style={{alignItems: 'center'}} key={`album${id}`} onPress={() =>{
                    navigation.navigate('Album', {
                        ...current,
                        albumTitle
                    })
                }} >
                    <View style={styles.container}>
                    <Image
                        style={styles.sliderImage}
                        source={{uri}}
                    />
                    
                        <Text style={{ fontWeight: 'bold' , color: 'white'} } >
                            {albumTitle}
                        </Text>
                        <Text style={{   color: 'white' } }>
                            {artist}
                        </Text>
                    
                    </View>
                    
                    
                </TouchableOpacity>
            })}
            
            
        </ScrollView> }
        
        
    </>
}

const styles = StyleSheet.create({
    sliderImage: {
        width: Dimensions.get("window").width * 0.30,
        height: Dimensions.get("window").height * 0.15,
        margin: 5
        
    },

    container: {
        alignItems: 'center'
    },
    sliderItemTextContent: {
        margin: 10,
        width: Dimensions.get("window").width * 0.45,
        
        color: 'white',
        
    },

    TextGenreStyle: {
        margin: 10,
        marginLeft:20,
        color: 'white',
        fontWeight: "bold",
        fontSize: 25,
        
    },

    ScrollViewStyle: {
       marginVertical:10
       
    }
    // sliderItemText: {
    //     textAlign: 'center',
    //     marginLeft: 10,
    //     width: Dimensions.get("window").width * 0.45,
    // }
})

export default Slider;