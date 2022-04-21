import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";

import { SIZES, COLORS } from "../constants/";
import { images } from "../constants/";
import { SubjectCard, ListHeader, FocusedStatusBar } from "../components";

const Home = ({navigation}) => {

  return (
    <>
    <FocusedStatusBar backgroundColor={COLORS.primary}/>
    <ScrollView showsVerticalScrollIndicator={false}>

      <SafeAreaView style={styles.container}>

      <ListHeader/>

      <SubjectCard imgUrl={images.electronicDandC} subject='Electronic Devices and Circuits' onPress={()=>navigation.navigate('ElectDevAndCir')}/>
      <SubjectCard imgUrl={images.radioTransmission} subject='Radio Communication' onPress={()=>navigation.navigate('RadioCom')}/>
      <SubjectCard imgUrl={images.radioFreqAmp} subject='Radio and Audio Frequency Amplifier' onPress={()=>navigation.navigate('RadioAndAudFreq')}/>
      <SubjectCard imgUrl={images.satelliteReception} subject='Satellite Transmission and Reception' onPress={()=>navigation.navigate('SatTransAndRecept')}/>
      <SubjectCard imgUrl={images.television} subject='Television' onPress={()=>navigation.navigate('Television')}/>

      <View style={{position:'absolute', top: 0, right: 0, bottom: 0, left: 0, zIndex:-1}}>
        <View style={{height: 400, backgroundColor: COLORS.primary}}/>
        <View style={{ flex: 1, height: 400, backgroundColor: COLORS.gray}}/>
      </View>
      
      </SafeAreaView>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:SIZES.small,
    paddingVertical:SIZES.font,
  },
});
export default Home;
