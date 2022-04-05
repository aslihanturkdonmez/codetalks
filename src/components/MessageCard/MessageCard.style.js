import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const container=StyleSheet.create({
    cnt:{
        flex:1,
        marginBottom:10,
        padding:5,
        borderRadius:8,
        backgroundColor:'#FFEDDA',
        maxWidth:270,
    },
})

export default StyleSheet.create({
    container_left:{
        ...container.cnt,
        marginLeft:10,
        alignSelf:'flex-start',
    },
    container_right:{
        ...container.cnt,
        alignSelf:'flex-end',
        marginRight:10,
    },
    inner_container:{
        flex:1,
        flexDirection:'row',
        paddingLeft:5,
        alignItems:'flex-end',
        justifyContent:'space-around',
        paddingRight:5,
    },
    message:{
        fontSize:15,
        marginRight:15,
    },
    date:{
        fontSize:10,
    },
    user:{
        paddingLeft:5,
        color:colors.peach,

    }
});