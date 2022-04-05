import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container: {
        flex:1,
        borderWidth:1,
        borderRadius:6,
        height:140,
        borderColor:colors.peach,
        backgroundColor:colors.light_peach,
        marginBottom:14,
        marginStart:5,
        marginEnd:5,
    },
    body_container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title:{
        flex:1,
        fontSize:25,
        color:colors.background,
        fontWeight:'bold',
        textAlign:'center',
        alignSelf:'flex-end',
        marginBottom:-16,
    },
    host_container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    host:{
        fontSize:12,
        fontStyle:'italic',
        textAlign:'right',
        marginRight:5,
        color:'#be4327',
    },
    topic:{
        fontSize:13,
        color:'#7f2d1a',
        textAlign:'center',
        marginRight:5,
    },
    trash:{
        alignSelf:'flex-start',
    },


})