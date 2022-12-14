import { View, Text, StyleSheet,TextInput,TouchableOpacity } from 'react-native'
import { useState,  } from 'react'
import React from 'react'

export default function StarMeetingRoom({name , roomId, setName,setRoomId, joinRoom }) {
 
  return (
    <><View style={styles.starMeetContainer}>
          <View style={styles.info}>
              <TextInput
                  style={styles.textInput}
                  value={name}
                  onChangeText={text => setName(text)}
                  placeholder="Enter name"
                  placeholderTextColor="#767476" />
          </View>
          <View style={styles.info}>
              <TextInput
                  style={styles.textInput}
                  value={roomId}
                  onChangeText={text => setRoomId(text)}
                  placeholder="Enter room id"
                  placeholderTextColor="#767476" />
          </View>
      </View><View style={{ alignItems: 'center' }}>
              <TouchableOpacity
                  onPress={() =>joinRoom()}
                  style={styles.startMeetingButton}>
                  <Text style={{ color: "white", fontWeight: "bold" }}
                  > Start Meeting</Text>
              </TouchableOpacity>
          </View></>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        flex: 1
    },
    starMeetContainer: {

    },
    info: {
     width: "100%",
     backgroundColor: "#292847",
     height:50,
     borderTopWidth: 1,
     borderBottomWidth: 1,
     borderColor: "#484648",
     padding: 12,
     justifyContent: 'center'
    },
    textInput: {
      color: "white",
      fontSize: 18,
    },
    startMeetingButton: {
      width: 350 ,
      marginTop: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#6f4ef3",
      height: 50,
      borderRadius: 15
    }

})