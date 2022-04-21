import { View, Text, Image} from "react-native";
import { FONTS, SIZES, } from "../constants";

const HeadText = ({ children }) => (
  <Text style={{color:'#000', fontFamily: FONTS.bold, fontSize: SIZES.large }}>
    {children}
  </Text>
);
const SubHeadText = ({ children }) => (
  <Text style={{color:'#000', fontFamily: FONTS.semiBold, fontSize: SIZES.large - 4 , marginTop:SIZES.font}}>
    {children}
  </Text>
);

const ParagraphText = ({ children }) => (
  <Text style={{color:'#000',fontFamily: FONTS.regular, fontSize: SIZES.font, marginTop:SIZES.base -2, lineHeight: 25 }}>
    {children}
    {'\n'}
  </Text>
);

const LessonImage =({imgUrl})=>{
  return(<View>
   <Image source={imgUrl} resizeMode='contain'
    style={{width:'100%', height: 250, 
    marginVertical: SIZES.base -10}}/>
    </View>)
}

const BodyText = (props) => (
  <View {...props} showsVerticalScrollIndicator={false} style={{ paddingVertical: SIZES.font, 
    paddingHorizontal: SIZES.font, width:'100%' }} >
    {props.children}
  </View>
);

export { HeadText,SubHeadText, BodyText, ParagraphText, LessonImage};
