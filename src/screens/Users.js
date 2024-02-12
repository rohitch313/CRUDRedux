import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import React from "react"
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { deleteUser } from '../redux/UserSlice';

const Users = () => {
    const navigation = useNavigation();
    const users = useSelector(state => state.user)
    console.warn(users)
const dispatch = useDispatch()
    return (
        <View style={styles.box}>

            <FlatList data={users.data} renderItem={({ item, index }) => {
                return (
                    <View style={styles.list}>
                        <View>
                            <Text>
                                {"Name:" + item.name}
                            </Text>
                            <Text>
                                {"Email:" + item.email}
                            </Text>
                            <Text>
                                {" Mobile Number:" + item.number}
                            </Text>
                            <Text>
                                {"Address:" + item.address}
                            </Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={styles.update}
                                onPress={() => navigation.navigate("AddUsers", { type: 'edit', data:item, index:index })}>
                                Edit
                            </Text>
                            <Text style={styles.delete} onPress={()=>{
                                dispatch(deleteUser(index))
                            }}>
                                Delete
                            </Text>
                        </View>

                    </View>
                )
            }}>

            </FlatList>
            <TouchableOpacity activeOpacity={1} style={styles.touch} onPress={() => navigation.navigate("AddUsers", { type: 'add' })}>
                <Text style={styles.text}>
                    Add New Users
                </Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flex: 1
    },
    touch: {
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: "center"

    },

    list: {

        width: '90%',
        padding: 10,
        borderWidth: 1,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    text: {
        color: "white",
        fontSize: 16
    },
    update: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'blue',
        color: 'blue',
        marginBottom: 10

    },
    delete: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'blue',
        color: 'red'

    }

});
export default Users