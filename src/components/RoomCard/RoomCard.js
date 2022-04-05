import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './RoomCard.style';


const RoomCard = ({room, curr_user, join}) => {
    return(
        <TouchableWithoutFeedback onPress={() => join(room.id)}>
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{room.name}</Text>
{/*                     {room.host_id == curr_user &&
                        <Icon name="delete-circle-outline" color='#EFDDD2' size={29} style={styles.trash}/>
                    } */}
                </View>
                <View style={styles.host_container}>    
                    <Text style={styles.topic} >{room.topic}</Text>
                    <Text style={styles.host}>created by {room.host}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RoomCard;