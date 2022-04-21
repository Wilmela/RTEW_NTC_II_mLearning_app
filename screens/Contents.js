import { View, Image, ScrollView , Dimensions, StyleSheet, LogBox} from 'react-native';
import { COLORS, images } from '../constants';
import { FocusedStatusBar,Circle } from '../components';


const screenWidth = Dimensions.get("window").width;

const Contents = ({route, navigation}) => {

   LogBox.ignoreLogs([
     "Non-serializable values were found in the navigation state",
   ]);
  
    const {item} = route.params;

  return (
    <View style={{flex: 1}}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
     
      <View style={{ position: "relative",width:'100%', height: 250 }}>
        <Image source={images.study} resizeMode="cover" style={{ width: "100%", height: '100%' }} />
        <Circle imgUrl={images.backButton} width={35} imgSize={25} position={"absolute"}
          top={-218} left={15} bgColor={COLORS.white} onPress={() => navigation.goBack()} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.textContainer}>{item.bodyText}</View>
      </ScrollView>
    </View>

  )
    }

    
export default Contents;
const styles = StyleSheet.create({
  textContainer: {
    width: screenWidth,
    justifyContent:'center',
    alignContent:'center',
    flexWrap:'wrap'
  },
});