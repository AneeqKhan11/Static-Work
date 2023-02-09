import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'native-base'
import  {Profile1}  from '../../assets'
import { Button } from '../../component'

const Chat = () => {
    const ChatsData = [
        {
            id: 1,
            SenderName: "Altamash",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 2,
            SenderName: "Hashir",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 3,
            SenderName: "navid",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 4,
            SenderName: "Samina",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 5,
            SenderName: "rubina",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 6,
            SenderName: "farzana",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 7,
            SenderName: "Khalid",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 8,
            SenderName: "Shahid",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 9,
            SenderName: "Rahim",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 10,
            SenderName: "shakoor",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 11,
            SenderName: "Mashkoor",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 12,
            SenderName: "Mannan",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        {
            id: 13,
            SenderName: "Boss",
            SendOrReciveTime: '12:01 AM',
            Massege:"Kaha ho"
        },
        
    ]

    return (
        <View style={styles.Main_ChatDiv}>
            <ScrollView>
                {ChatsData.map((item,id ) => {
                    return (
                        <View key={id} style={styles.ChatList}>
                            <TouchableOpacity style={styles.Opecity}>
                                <View style={styles.ChatProfile}>
                                    <Image style={{height:70 , width:70}} source={Profile1} />
                                </View>
                                <View style={styles.Id_And_Notification}>
                                    <Text style={styles.SenderName_Style}>
                                        {item.SenderName}
                                    </Text>
                                    <Text>
                                        {item.Massege}
                                    </Text>
                                </View>
                                <View style={styles.Time_And_Notification}>
     
                                    <Text style={{fontSize:12, marginBottom:15 ,textAlign:'center'}}>
                                        {item.SendOrReciveTime}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
                }
            </ScrollView>
            <Button Button={styles.button} name='android-messages' type='material-community' size={30}  color={'white'}/>
        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    button:{
        height:60,
        width:60,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        // top:0,
        bottom:0,
        // left:0,
        right:0,
        margin:20
    },
    SenderName_Style:{
        fontSize:20,
        color:'black',
    },
    Opecity: {
        flexDirection: 'row'
    },
    Time_And_Notification: {
        height: 70,
        width: 50,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',

    },
    Id_And_Notification: {
        height: 70,
        width: 220,
        paddingHorizontal:15,
        justifyContent:'center'
        
    },

    ChatProfile: {
        borderRadius: 100,
        height: 70,
        width: 70,
        overflow:'hidden'
    },
    ChatList: {
        height: 85,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    Main_ChatDiv: {
        flex: 1,
        position:'relative'
    }

})