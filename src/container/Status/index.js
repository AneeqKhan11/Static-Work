import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Profile1 } from '../../assets'
import { Button } from '../../component'
const Status = () => {
    const StatusData = [
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
        <View style={{ flex: 1, paddingTop: 10 }}>
            <ScrollView>
                <View style={styles.YourStatus}>
                    <TouchableOpacity style={styles.MyStatusBox}>
                        <View style={styles.Status_Profile}>
                            <View style={styles.ChatProfile1}>
                                <Image source={Profile1} style={{ height: 70, width: 70 }} />
                            </View>
                        </View>
                        <View style={styles.Status_MyStatus}>
                            <Text style={styles.Status_Text}>My Status</Text>
                            <Text style={styles.Status_Text_1}>Tap to add status update</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.RecentUpdateText}>
                        <Text style={{ fontSize: 16 }}>Recent Updates</Text>
                    </View>
                </View>
                <View style={styles.Other_status}>
                    {StatusData.map((item, id) => {
                        return (
                            <View key={id} style={styles.ChatList}>
                                <TouchableOpacity style={styles.Opecity}>
                                    <View style={styles.ChatProfile}>
                                        <Image source={Profile1} style={{ height: 70, width: 70 }} />
                                    </View>
                                    <View style={styles.Id_And_Notification}>
                                        <Text style={{fontSize:20, marginBottom:2, color:'black'}}>
                                            {item.SenderName}
                                        </Text>
                                        <Text>
                                            {item.SendOrReciveTime}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                    }
                </View>
            </ScrollView>
            <Button Button={styles.uplode_TypeButton} name='pencil' color='gray' type='material-community' size={23} />
            <Button Button={styles.uplode_PicButton} name='camera' color='white' type='font-awesome' size={25} />
        </View>
    )
}

export default Status

const styles = StyleSheet.create({
    my_ststus_icon: {
        flex: 1,
        width: 40,
        boederWidth: 1,
        borderColor: 'black'
    },
    uplode_PicButton: {
        borderRadius: 100,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 30
    },
    uplode_TypeButton: {
        borderRadius: 100,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 80,
        right: 0,
        margin: 40,
        marginBottom: 25,
        backgroundColor: "#E9EDF0"

    },
    Other_status: {
        marginTop: 20
    },
    Status_Text_1: {
        fontSize: 14
    },
    Status_Text: {
        fontSize: 18,
        color: "black"
    },
    Status_MyStatus: {
        height: 70,
        flex: 1,
        padding: 10
    },
    Status_Profile: {

        height: 70,
        width: 70,
        borderRadius: 100,

    },

    MyStatusBox: {
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        marginBottom: 10

    },
    RecentUpdateText: {
        paddingHorizontal: 10
    },
    Opecity: {
        flexDirection: 'row'
    },
    Time_And_Notification: {
        height: 70,
        width: 50,
        borderWidth: 1,
        borderColor: "black",
    },
    Id_And_Notification: {
        height: 70,
        width: 260,
        padding:10
    },

    ChatProfile1: {
        borderRadius: 100,
        height: 70,
        width: 70,
        overflow: "hidden",
        // borderWidth:4,
        // borderColor:'#29CF00'
    },
    ChatProfile: {
        borderRadius: 100,
        height: 70,
        width: 70,
        overflow: "hidden",
        borderWidth:4,
        borderColor:'#29CF00'
    },
    ChatList: {
        height: 85,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        // marginTop:20
    },
    Main_ChatDiv: {
        flex: 1,
        backgroundColor: 'yellow'
    },

    YourStatus: {
        height: 110,
        position: 'relative'
    }
})