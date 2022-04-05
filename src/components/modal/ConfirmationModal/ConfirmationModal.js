import React, {useState} from 'react'
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button';

const ConfirmationModal = ({isVisible, onSend, onClose}) => {
    return(
        <Modal 
            isVisible={isVisible} 
            onSwipeComplete={onClose} 
            onBackdropPress={onClose} 
            onBackButtonPress={onClose}
        >
            <View style={{backgroundColor:'#fff', borderRadius:8, padding:15,}}>
                <Text style={{textAlign:'center', fontSize:19, paddingVertical:10, fontWeight:'bold' }}>Do you want to join the room?</Text>
                <Button 
                    title="YES"
                    onPress={onSend}
                />
                <Button title="Cancel" onPress={onClose} />
            </View>
        </Modal>
    )
}

export default ConfirmationModal