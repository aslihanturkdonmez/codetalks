import React from 'react';
import { View, Text } from 'react-native';
import styles from './MessageCard.style';

const MessageCard = ({message, auth}) => {
    return(
        <View style={message.user_id != auth ? styles.container_left : styles.container_right}>
            <Text style={styles.user}>{message.user}</Text>
            <View style={styles.inner_container}>
                <Text style={styles.message}>{message.message}</Text>
                <Text style={styles.date}>{message.date.replace(/[:]/g, '.').slice(0, 14)}</Text>
            </View>
        </View>
    )
}

export default MessageCard;