import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'native-base'
import  profile1  from '../../assets'
import { Button } from '../../component'

const Chat = () => {
    const ChatsData = [
        {
            id: 1,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 2,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 3,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 4,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 5,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 6,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 7,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 8,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 9,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 10,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 11,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 12,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 13,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 14,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 15,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 16,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 17,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 18,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 19,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 20,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 21,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 22,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 23,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 24,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 25,
            ProfileImg:profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
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
                                    <Image style={{height:"100%", width:'100%'}} source={item.ProfileImg} />
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
     
                                    <Text style={{fontSize:10, marginBottom:15}}>
                                        {item.SendOrReciveTime}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
                }
            </ScrollView>
            <Button Button={styles.button} title='+' />
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
        borderWidth: 1,
        borderColor: "black",
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',

    },
    Id_And_Notification: {
        height: 70,
        width: 220,
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal:10,
        justifyContent:'center'
        
    },

    ChatProfile: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 100,
        height: 70,
        width: 70
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