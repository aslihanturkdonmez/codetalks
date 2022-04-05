import { StyleSheet } from 'react-native';

const base_container=StyleSheet.create({
    container:{
        margin:8,
        borderBottomWidth:1,
        marginHorizontal:20,
        borderColor:'#9c2106',
    }
})

export default StyleSheet.create({
    container: {
        ...base_container.container,
    },
    container_flex:{
        ...base_container.container,
        flex:1,
    }
});