import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { profile1 } from '../../assets'
import { Button } from '../../component'

const Status = () => {
    const StatusData = [
        {
            id: 1,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 2,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 3,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 4,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 5,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 6,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 7,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 8,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 9,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 10,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 11,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 12,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 13,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 14,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 15,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 16,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 17,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 18,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 19,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 20,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 21,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 22,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 23,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 24,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },
        {
            id: 25,
            ProfileImg: profile1,
            SenderName: "Altamash",
            Massege: "Kha ho",
            SendOrReciveTime: '12:01 AM'
        },


    ]
    return (
        <View style={{ flex: 1 , paddingTop:10}}>
            <ScrollView>
                <View style={styles.YourStatus}>
                    <TouchableOpacity style={styles.MyStatusBox}>
                        <View style={styles.Status_Profile}></View>
                        <View style={styles.Status_MyStatus}>
                            <View style={styles.my_ststus_icon}></View>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.RecentUpdateText}>
                        <Text style={{fontSize:16}}>Recent Updates</Text>
                    </View>
                </View>
                <View style={styles.Other_status}>
                {StatusData.map((id, item) => {
                    return (
                        <View key={id} style={styles.ChatList}>
                            <TouchableOpacity style={styles.Opecity}>
                                <View style={styles.ChatProfile}>
                                    <Image source={StatusData.ProfileImg} />
                                </View>
                                <View style={styles.Id_And_Notification}>
                                    <Text>
                                        {StatusData.SenderName}
                                    </Text>
                                    <Text>
                                        {StatusData.SendOrReciveTime}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })
                }
                </View>
            </ScrollView>
            <Button Button={styles.uplode_TypeButton}/>
            <Button Button={styles.uplode_PicButton}/>
        </View>
    )
}

export default Status

const styles = StyleSheet.create({
    my_ststus_icon:{
        flex:1,
        width:40,
        boederWidth:1,
        borderColor:'black'
    },
    uplode_PicButton:{
        borderRadius:100,
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        right:0,
        margin:30
    },
    uplode_TypeButton:{
        borderRadius:100,
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:80,
        right:0,
        margin:35,
        marginBottom:20,
        backgroundColor:"#E9EDF0"
        
    },
    Other_status:{
        marginTop:20
    },
    Status_MyStatus:{
        height:70,
        flex:1,
        borderWidth:1,
        borderColor:'black',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    Status_Profile:{
        borderWidth:1,
        borderColor:'black',
        height:70,
        width:70,
        borderRadius:100,

    },

    MyStatusBox: {
        flex: 1,
        flexDirection:'row',
        paddingHorizontal: 10,
        alignItems:'center',
        marginBottom:10

    },
    RecentUpdateText: {
        paddingHorizontal:10
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
        borderWidth: 1,
        borderColor: "black",
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
        padding: 10,
        // marginTop:20
    },
    Main_ChatDiv: {
        flex: 1,
        backgroundColor: 'yellow'
    },

    YourStatus: {
        height: 110,
        position:'relative'
    }
})