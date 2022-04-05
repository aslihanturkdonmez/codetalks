import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.style';

const Header = () =>{
    return (
        <View style={styles.header_container}>
            <Text style={styles.header_horizontal}>CODE</Text>
            <Text style={styles.header_vertical}>TALKS</Text>
        </View>
    );
};

export default Header;
