import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    header_container:{
        flexDirection:'row',
        justifyContent:'space-between',
    },  
    header_horizontal:{
        fontSize:130,
        color: colors.peach,
        fontWeight:'bold',
    },
    header_vertical:{
        fontSize:50,  
        color: colors.light_peach,
        fontWeight:'bold',
        transform:[{ rotate: '-90deg'}],
    }
});