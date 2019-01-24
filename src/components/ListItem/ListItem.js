import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
    </View>
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