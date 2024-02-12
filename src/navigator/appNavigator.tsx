import { NavigationContainer } from "@react-navigation/native";
import  React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Users from "../screens/Users";
import AddUsers from "../screens/AddUsers";

const  Stack = createStackNavigator();
function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Users" component={Users}/>
                <Stack.Screen  name="AddUsers" component={AddUsers}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigator