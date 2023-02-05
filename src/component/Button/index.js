import { StyleSheet, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const Button = (props) => {
    const { Button, title, onPress, Text_Style } = props
    return (
            <TouchableOpacity style={[styles.Button, Button]}>
                <Text
                    style={[styles.Button_text, Text_Style]}
                    onPress={onPress}
                    >
                    <MaterialCommunityIcons size={29} color={"white"} name='message-text-outline'/>
                </Text>
            </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    Button:{
        height:50,
        backgroundColor:'#00A884'
    },
})