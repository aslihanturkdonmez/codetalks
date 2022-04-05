import React from 'react';
import { View } from 'react-native';
import Input from '../../../components/Input/Input';
import styles from './Login.style';
import FormContainer from '../../../components/FormContainer';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import auth from '@react-native-firebase/auth';
import { Formik } from 'formik';
import { showMessage } from "react-native-flash-message";


const initialFormValues = {
    usermail:'',
    password:'',
}

const Login = ({navigation}) =>{
    const [loading, setLoading]=React.useState(false);

    const handleSignUp = () =>{
        navigation.navigate('Sign')
    }

    const handleFormSubmit = async (formValues) =>{
        const {usermail, password}=formValues;
        try {
            setLoading(true);
            await auth().signInWithEmailAndPassword(
                usermail, 
                password
            );
            setLoading(false);
            
        } catch (error) {
    
              showMessage({
                message: error.code,
                type: "danger",
              });
            setLoading(false);
        }
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

                        <Button
                            title="GİRİŞ YAP" 
                            onPress={handleSubmit}
                        />
                    </>
                    )}
                    </Formik>
                    <Button title="KAYIT OL" onPress={handleSignUp} theme="secondary"/>
                </View>
            </View>
        </FormContainer>
    );
};

export default Login;
