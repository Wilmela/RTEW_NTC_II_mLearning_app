import { View,Image } from 'react-native';

import FocusedStatusBar from './FocusedStatusBar';
import Oval from './Oval';
import Circle from './Circle';

import {images, COLORS, SIZES} from '../constants';
import { useNavigation } from '@react-navigation/native';

 const Nav = ({imgUrl})=>{

    const navigation = useNavigation();
    return(
        <>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
     
            <View>
                <Image source={imgUrl} resizeMode="cover" style={{ width: "100%", height: 380, }} />
                <Circle imgUrl={images.backButton} width={35} imgSize={25} position={"absolute"}
                top={-350} left={15} bgColor={COLORS.white} onPress={() => navigation.goBack()} />
            </View>
          
        </>
    )
}

 const BottomButton = ({onPress, title}) =>(
     <View style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        backgroundColor: "rgba(255,255,255,0.5)",
        paddingVertical: SIZES.font,
        }}>
          <Oval onPress={onPress} title={title} width={120} bgColor={COLORS.primary}/>
      </View>
)


export {Nav, BottomButton}