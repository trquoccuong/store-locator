import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function StoreListItem (props) {
    return (
        <TouchableOpacity
            key={props.idx}
            style={styles.item}
            onPress={props.handlePress.bind(null, props.store)}>
            <Text style={styles.itemTxt}>{props.store.name}</Text>
        </TouchableOpacity>
    )
}
var styles = StyleSheet.create({
    item : {
        padding:15,
        borderBottomColor:"#eee",
        backgroundColor:"#fafafa",
        borderBottomWidth:1
    },
    itemTxt: {
        color:"#666",
        textAlign:"center",
    }
})