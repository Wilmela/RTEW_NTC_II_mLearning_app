import { View, Text } from "react-native";
import {FONTS, SIZES, COLORS} from '../constants'
const ListHeader = () => {
  return (
    <View style={{marginTop: SIZES.extraLarge, paddingHorizontal:SIZES.base}}>
      <Text style={{ fontFamily: FONTS.medium, fontSize:SIZES.font, color:COLORS.white }}>Hi there 👋</Text>
    
     <View style={{marginTop:SIZES.small, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontFamily:FONTS.regular, fontSize:SIZES.font, color:COLORS.white}}>
        Let's talk about 
        <Text style={{fontFamily:FONTS.bold, fontSize:SIZES.large}}> Radio, Television and Electronic Works</Text>{" "}
      </Text>
     </View>
    
    </View>
  );
};

export default ListHeader;
