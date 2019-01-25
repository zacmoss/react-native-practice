import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => (
    <TouchableOpacity onPress={props.onListItemPressed}>
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 5,
        width: "100%",
        padding: 100,
        backgroundColor: "#eee"
    }
})

export default ListItem;