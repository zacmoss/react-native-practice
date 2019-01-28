/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';

import InputRow from './src/components/InputRow/InputRow';
import List from './src/components/List/List';
import ListItem from './src/components/ListItem/ListItem';
import PlaceDetail from './src/components/PlaceDetail';
// below image import creates a javascript object which gets the path as a property
import placeImage from './src/assets/pic1.jpg';

/* Platform.select - very cool, but probably not needed for my intentions */
/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

//type Props = {};
//export default class App extends Component<Props> {
export default class App extends Component {
  /*
  constructor(props) {
    super(props);
    this.state = {
      placeName: "",
      places: [],
      test: 'test'
    }
  }
  */
  
  
  state = {
    placeName: "",
    places: [],
    selectedPlace: null
  }
  
  
  /*
  placeNameChangedHandler = val => {
    this.setState(() => ({ placeName: val }))
  }
  
  placeSubmitHandler = () => {
    if (this.state.placeName === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  }
  */
  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place  => {
          // if false, that place not returned and filtered out
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    });
  }

  modalClosedHandler = () => {
    this.setState({
      seletedPlace: null
    })
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          // returns true if this and then returns that item in an array
          return place.key === key;
        })
      };
    })
   
  }

  render() {
    
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace}
          onItemDelected={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <InputRow
          addPlace={this.placeAddedHandler}
        />
        <List 
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler} />
      </View>
    );
  }
}

// flexDirection default is 'column'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
