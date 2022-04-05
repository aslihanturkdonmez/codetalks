import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseData from '../../utils/parseData';
import styles from './Room.style';
import Input from '../../components/Input';
import FormContainer from '../../components/FormContainer';
import Button from '../../components/Button';
import MessageCard from '../../components/MessageCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';

const Room = ({ route }) => {
    const room = route.params.room;
    const user = auth().currentUser;

    const [message, setMessage] = useState(null);
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        const onValueAdded = 
            database()
                .ref(`/rooms/${room.id}/messages`)
                .on('value', snapshot => {
                    const values = snapshot.val();
                    const rooms = parseData(values);
                    if(rooms){
                        setMessageList(rooms);
                    }
                });
        return () => database().ref(`/rooms/${room.id}/messages`).off('value', onValueAdded)
            
    }, [room.id]);

    const sendMessage = () => {

        if(!message){
            return;
        }
        const newMessage = database().ref(`/rooms/${room.id}/messages`).push();
        newMessage
            .set({
                user_id: user.uid,
                user: user.email.split('@')[0],
                date: (new Date()).toLocaleDateString() + ' ' + (new Date()).toTimeString(),
                message: message,
            });

        setMessage(null);
    }

    const renderMessage = ({item}) =><MessageCard message={item} auth={user.uid}/>

    return (
        <FormContainer offset={150}>
        {room &&
                <View style={styles.container}>
                    <Text style={styles.date}>{room.date.replace(/[/]/g, '.').slice(0, 8)}</Text>
                    <Text style={styles.host}>{room.name} room created by {room.host}</Text>
                        <FlatList 
                            data={messageList.sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0))}
                            renderItem={renderMessage}
                        />
                        <View style={styles.input_container}>
                            <Input
                                placeholder="Mesaj"
                                onChangeText={setMessage}
                                value={message}
                                flex={true}
                                multiline={true}
                            />
                            <Icon 
                                name="send"
                                size={30} 
                                color={colors.peach} 
                                onPress={sendMessage}
                                style={styles.icon}
                            />
                        </View>

                </View>
            }
        </FormContainer>
    )
}

export default Room;
