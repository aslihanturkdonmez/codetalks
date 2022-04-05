import React from 'react';
import { TextInput, View } from 'react-native';
import colors from '../../styles/colors';
import styles from './Input.style';

function Input({placeholder, value, onChangeText, isSecure, flex, multiline}) {
    return (
        <View style={ flex ? styles.container_flex :  styles.container}>
            <TextInput 
                placeholder={placeholder} 
                placeholderTextColor={colors.light_peach}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={isSecure}
                multiline={multiline}
            />
        </View>
    )
}

export default Input;

