import React from 'react';
import { View, Text } from 'react-native';
import styles from './Sign.style';
import Input from '../../../components/Input/Input';
import FormContainer from '../../../components/FormContainer';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import { showMessage } from "react-native-flash-message";



const Sign = ({navigation}) =>{
    const initialFormValues = {
        usermail:'',
        password:'',
        repassword: '',
    }
    
    
    const handleFormSubmit = async(formValues) => {
        const {usermail, password, repassword}=formValues;
        
        if(password !== repassword){
            return;
        }
        try {
            await auth()
            .createUserWithEmailAndPassword(usermail, repassword)
            .then(() => {
                auth().signOut()
                navigation.navigate('Login');
            })
            
        } catch (error) {
    /*         if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
                }
        
                if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
                } */
        
                showMessage({
                    message: error.code,
                    type: "danger",
                });
        }
    }
    const goToLogin = () =>{
        navigation.navigate('Login');
    }
    return (
        <FormContainer >
            <View style={styles.container}>
                <Header />
                <View>
                    <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}> 
                        {({values, handleChange, handleSubmit}) => (
                            <>
                            <Input 
                                value={values.usermail} 
                                placeholder="E-postanızı giriniz" 
                                onChangeText={handleChange('usermail')} 
                            />
                            <Input 
                                value={values.password} 
                                placeholder="Şifrenizi giriniz" 
                                onChangeText={handleChange('password')}
                                isSecure={true}
                            />
                            <Input 
                                value={values.repassword} 
                                placeholder="Şifrenizi giriniz" 
                                onChangeText={handleChange('repassword')}
                                isSecure={true}
                            />
                            <Button title="KAYIT OL" onPress={handleSubmit} />
                            </>
                        )}
                    </Formik>
                    <Button title="GERİ DÖN" onPress={goToLogin} theme="secondary"/>
                </View>
            </View>
        </FormContainer>
    );
};

export default Sign;
