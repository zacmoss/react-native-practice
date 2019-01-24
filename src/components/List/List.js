import React from 'react';
import { View } from 'react-native';

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
    const placesOutput = props.places.map((place, i) => {
        return (
            <ListItem key={i} placeName={place}/>
        )
    })
    return (
        <View>{placesOutput}</View>
    )
}

export default List;