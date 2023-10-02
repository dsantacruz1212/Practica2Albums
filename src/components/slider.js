import { ScrollView, View, StyleSheet, Text, Dimensions, Image } from "react-native";

const Slider = ({ genre }) => {
    console.log(genre);
    const { title, albums } = genre;
    return<>
        <Text>{title}</Text>
        <ScrollView horizontal>
            {albums.map( current => {
                const { uri, id } = current;
                return <View key={`album${id}`}>
                    <Image
                        style={styles.sliderItem}
                        source={{uri}}
                        
                    />
                </View>
            })}
        </ScrollView>
    </>
}

const styles = StyleSheet.create({
    sliderItem: {
        width: Dimensions.get("window").width * 0.40,
        height: 200,
        margin: 10
    }
})

export default Slider;