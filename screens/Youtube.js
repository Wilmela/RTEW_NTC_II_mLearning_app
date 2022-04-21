import { View, Text, SafeAreaView , TouchableOpacity, Linking, StyleSheet} from 'react-native';
import {FocusedStatusBar, Nav} from '../components';
import { COLORS, SIZES, FONTS, images } from '../constants';


const Youtube = () => {
  return (
    <SafeAreaView style={{flex:1}}>

    <FocusedStatusBar backgrounColor={COLORS.primary}/>

     <Nav imgUrl={images.youtube}/>


    <View style={styles.links}>
     <TouchableOpacity style={styles.google} onPress={()=>Linking.openURL('https://google.com')}><Text style={{fontFamily:FONTS.bold, fontSize:SIZES.extraLarge, color:COLORS.white}}>Search Google</Text></TouchableOpacity> 
     <TouchableOpacity onPress={()=>Linking.openURL('https://tinyurl.com/3zfhtjk9')}><Text style={styles.linkItem}>Electronic Devices and Circuits</Text></TouchableOpacity> 
     <TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=q8U_mne2fO0')}><Text style={styles.linkItem}>Radio Communication</Text></TouchableOpacity> 
     <TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=3dQjIeYoIdM')}><Text style={styles.linkItem}>Radio and Audio Frequency Amplifier</Text></TouchableOpacity> 
     <TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=hXa3bTcIGPU')}><Text style={styles.linkItem}>Satellite Transmission and Reception</Text></TouchableOpacity> 
     <TouchableOpacity onPress={()=>Linking.openURL('https://www.youtube.com/watch?v=tS4sIpdajVw')}><Text style={styles.linkItem}>Television</Text></TouchableOpacity> 
    </View>

      <View style={{position:'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex:-1}}>
        <View style={{ flex: 1, backgroundColor: COLORS.primary}}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  links: {
    justifyContent: "center",
    alignItems: "center",
  },
  google: {
    paddingVertical: SIZES.large,
  },
  linkItem: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.font,
    color: COLORS.white,
    marginTop:SIZES.font,
  },
});
export default Youtube;