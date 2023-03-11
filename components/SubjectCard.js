import { View, Text, Image, StyleSheet, Alert , Linking} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {MaterialIcons, FontAwesome5} from '@expo/vector-icons';
import { COLORS, SIZES, FONTS, SHADOWS, images } from "../constants";
import Circle from "./Circle";
import audio from '../data/audioData';

const SubjectCard = ({subject, onPress, imgUrl}) => {


  const navigation = useNavigation()
  const showAlert = ()=>{
    Alert.alert('Hey 👋', 'You want to ask a question? Send an e-mail or call me. Thanks.',['default']);
  }

  return (
    <View style={styles.container}>
      <Image source={imgUrl} resizeMode="contain" style={{ width: "100%", height: 250, borderWidth: 1 }} />

      <View style={styles.subjectTitle}>
        <Text style={{ color: COLORS.primary, fontSize: SIZES.large, fontFamily: FONTS.bold }}>
          {subject}
        </Text>
      </View>
      
      <View style={styles.circleAndIcons}>
        <View>
          <Circle imgUrl={images.nyion}  width={80} imgSize={'100%'} onPress={showAlert}/>
           <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large,paddingLeft:5}}> Inyion </Text>
           <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.font-2,paddingLeft:6,}}> Instructor </Text>
        </View>
        
        <View style={{ width: 220, height:150, justifyContent:'space-evenly', flexDirection:'row', position:'absolute', right: 0,bottom: -25}}>
          <MaterialIcons  onPress={onPress} name='book' size={35} color={COLORS.primary}/>
          <MaterialIcons onPress={()=>Linking.openURL('mailto: nyeneimeinyion222@gmail.com?subject=Hello%20sir ')}  name='email' size={35} color={COLORS.primary}/>
          <FontAwesome5 onPress={()=>navigation.navigate('Youtube')}  name='youtube' size={35} color='red'/>
          <MaterialIcons onPress={()=>Linking.openURL('tel: +2348064046774')} name='phone' size={35} color={COLORS.primary}/>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.extraLarge,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small,
    ...SHADOWS.dark,
    overflow: "hidden",
    zIndex: 0,
  },
  subjectTitle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: SIZES.small,
  },
  circleAndIcons:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal: SIZES.extraLarge,
    paddingVertical:SIZES.small
  }
});
export default SubjectCard;
