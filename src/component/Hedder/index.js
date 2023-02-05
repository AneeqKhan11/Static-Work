import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
const Header = () => {
    return (
        <View style={styles.Headder}>
            <Text style={styles.WhatsApp}>
                WhatsApp
            </Text>
            <View style={styles.Icons_perents_Div}>
                <View style={styles.IconsDiv}><TouchableOpacity><Feather size={19} color={"white"} name='camera'/></TouchableOpacity></View>
                <View style={styles.IconsDiv}><TouchableOpacity><AntDesign size={19} color={"white"} name='search1'/></TouchableOpacity></View>
                <View style={styles.IconsDiv}><TouchableOpacity><Entypo size={19} color={"white"} name='dots-three-vertical'/></TouchableOpacity></View>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({

    IconsDiv:{
        flex:1,
        justifyContent:'center',
        alignItems:"flex-end"

    },
    Icons_perents_Div:{
        flexDirection:'row',
        width:150,
      },
      Headder:{
        height:70,
        backgroundColor:'#00A884',
        flexDirection:"row",
        padding:15,
        justifyContent:'space-between'
      },
      WhatsApp:{
        fontSize:23,
        color:'white'
      },
})