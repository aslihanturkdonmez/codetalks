import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


const base_style=StyleSheet.create({
    container:{    
        padding:10,
        margin:8,
        borderRadius:8,
        marginHorizontal:18,
    },
    text:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    }
});

export default {
    primary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:colors.peach,
            
        },
        text:{
            ...base_style.text,
            color:'white',
        }
    }),
    secondary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            borderWidth:1,
            borderColor:colors.peach,
            backgroundColor:'white'
        },
        text:{
            ...base_style.text,
            color:colors.peach,
        }
    })
}