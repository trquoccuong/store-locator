import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

export  default function Home() {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#f2f2f2",
        flex : 1
    }
})