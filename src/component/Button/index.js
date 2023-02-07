import { StyleSheet, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'
const Button = (props) => {
    const { Button, onPress, Text_Style, name, size, color } = props
    return (
            <TouchableOpacity style={[styles.Button, Button]}>
                <Text
                    style={[styles.Button_text, Text_Style]}
                    onPress={onPress}
                    >
                    <Icon size={size} color={color} name={name}/>
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