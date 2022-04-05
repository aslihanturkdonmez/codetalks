import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.style';

const Button = ({title, onPress, theme="primary"}) =>{
    return(
        <TouchableOpacity style={styles[theme].container} onPress={onPress}>
            <Text style={styles[theme].text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
