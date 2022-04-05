import React, {useState} from 'react'
import { TextInput, View } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button';
import styles from './RoomContentModal.style';
import {Picker} from '@react-native-picker/picker';
import Input from '../../Input';
import colors from '../../../styles/colors';

const RoomContentModal = ({isVisible, onSend, onClose}) => {

    const [title, setTitle] = useState(null);
    const [topic, setTopic] = useState("Languages");


    const handleSend = () => {
        if(!title) {
            return;
        }
        onSend(title, topic);
        setTitle(null);
    } 
    
    const selectTopic = (itemValue) =>{
        setTopic(itemValue)
    }

    return(
        <Modal 
            isVisible={isVisible} 
            onSwipeComplete={onClose} 
            onBackdropPress={onClose} 
            onBackButtonPress={onClose}
            style={styles.container}
        >
            <View style={styles.inner_container}>
                <Input 
                    placeholder="Enter Room Title..."
                    onChangeText={setTitle}
                />
                <Picker
                    style={styles.picker}
                    dropdownIconColor={colors.light_peach}
                    selectedValue={topic}
                    onValueChange={(itemValue) =>selectTopic(itemValue)
                    }>
                    <Picker.Item label="Languages" value="Languages" />
                    <Picker.Item label="Bugs" value="Bugs" />
                    <Picker.Item label="Frameworks" value="Frameworks"/>
                    <Picker.Item label="Books" value="Books" />
                    <Picker.Item label="Tests" value="Tests" />
                    <Picker.Item label="Question&Answer" value="Q&A" />
                    <Picker.Item label="Coffee Break" value="Coffee Break" />
                    <Picker.Item label="Other..." value="Other" />
                </Picker>
                <Button 
                    title="Gönder"
                    onPress={handleSend}
                />
            </View>
        </Modal>
    );
};

export default RoomContentModal