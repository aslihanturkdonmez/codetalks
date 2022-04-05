import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './FormContainer.style';

const FormContainer = ({children, offset}) =>{
    const [keyboardStatus, setKeyboardStatus] = useState(true);
    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(false);
          });
    
          const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(true);

          });
      
          return () => {
            showSubscription.remove();
            hideSubscription.remove();
          };
    }, [])
    
    return(
        <KeyboardAvoidingView 
            style = {styles.keyboardAvoiding} 
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            keyboardVerticalOffset={offset}
        >

             <TouchableWithoutFeedback onPress={Keyboard.dismiss} disabled={keyboardStatus}>
                {children}
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default FormContainer;