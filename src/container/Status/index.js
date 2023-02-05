import { StyleSheet, Text, View, ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { profile1 } from '../../assets'

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
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.YourStatus}>
                    <View style={styles.MyStatusBox}></View>
                    <View style={styles.RecentUpdateText}>
                    <Text>Recent Updates</Text>
                    </View>
                </View>
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
            </ScrollView>
        </View>
    )
}

export default Status

const styles = StyleSheet.create({
    
    RecentUpdateText:{
        backgroundColor:'white',
        paddingLeft:10
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
        padding: 10
    },
    Main_ChatDiv: {
        flex: 1,
        backgroundColor: 'yellow'
    },

    YourStatus: {
        height: 100,
        backgroundColor: 'pink'
    }
})