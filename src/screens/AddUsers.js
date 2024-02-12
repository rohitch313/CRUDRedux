import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'

import React, { useState } from "react"
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../redux/UserSlice';
import { useNavigation, useRoute } from '@react-navigation/native';

const AddUsers = () => {
    const route = useRoute();
  
    const [name, setName] = useState(route.params.type == 'edit' ? route.params.data.name : "")
    const [email, setEmail] = useState(route.params.type == 'edit' ? route.params.data.email : "")
    const [number, setNumber] = useState(route.params.type == 'edit' ? route.params.data.number : "")
    const [address, setaddress] = useState(route.params.type == 'edit' ? route.params.data.address : "")
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const validation = () => {
        let valid = true
        if (name == '' && email == '' && number == '' && address == '') {
            valid = false
        }
        return valid
    };
    return (
        <View style={styles.box}>
            <TextInput style={styles.input} value={name} onChangeText={txt => setName(txt)} placeholder='Enter User Name' />
            <TextInput style={styles.input} value={email} onChangeText={txt => setEmail(txt)} keyboardType='email-address' placeholder='Enter user Email' />
            <TextInput style={styles.input} value={number} onChangeText={txt => setNumber(txt)} keyboardType='number-pad' maxLength={10} placeholder='Enter User Moblie' />
            <TextInput style={styles.input} value={address} onChangeText={txt => setaddress(txt)} placeholder='Enter User Address' />
            <TouchableOpacity style={styles.button}  onPress={() => {
          if (validation()) {
            if (route.params.type == 'edit') {
              dispatch(
                updateUser({
                  name: name,
                  email: email,
                  number: number,
                  address: address,
                  index: route.params.index,
                }),
              );
            } else {
              dispatch(addUser({name, email, address, number}));
            }

            navigation.goBack();
          } else {
            Alert.alert('Please Fill Correct Data');
          }
            }}>
                <Text style={styles.text} >
                    Save User
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 10,
        paddingLeft: 10


    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50
    },
    text: {
        fontSize: 20,
        color: 'white'
    }
});
export default AddUsers