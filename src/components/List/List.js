import React from 'react';
import { ScrollView, FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

/*
export default class List extends React.Component {

    /*
    state = {
        places: this.props.places
    }
    *//*
    render() {
        const placesOutput = this.props.places.map(function(place, i) {
            return (
                <ListItem key={i} placeName={place}/>
            )
        })
        return (
            <View>{placesOutput}</View>
        );
    }
}
*/

const List = (props) => {
    //const placesOutput = props.places.map((place, i) => {
        /*return (
            <ListItem
                key={i}
                placeName={place}
                onListItemPressed={() => props.onItemDeleted(i)}
            />
        )
    })*/
    return (
        //<ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
        <FlatList
            style={styles.listContainer}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                placeName={info.item.value}
                onListItemPressed={() => props.onItemDeleted(info.item.key)}
            />
            )}
        />
    )
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
      }
});

export default List;