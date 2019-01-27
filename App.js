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
    places: []
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
        places: prevState.places.concat({key: Math.random(), value: placeName})
      }
    })
  }

  placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place  => {
          // if false, that place not returned and filtered out
          return place.key !== key;
        })
      }
    });
  }

  render() {
    /*
    const placesOutput = this.state.places.map((place, i) => {
      <ListItem key={i} placeName={place} />
    });
    */
    return (
      <View style={styles.container}>
        {/*
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button 
            style={styles.placeButton}
            title="Add"
            onPress={this.placeSubmitHandler}
          />
        </View>
        */}
          {/*<InputRow
            style={styles}
            placeNameState={this.state.placeName}
            changeTextFunc={this.placeNameChangedHandler}
            pressFunc={this.placeSubmitHandler}
          />*/}
        {/*<View style={styles.listContainer}>*/}
          {/*placesOutput*/}
        {/*</View>*/}
        <InputRow
          addPlace={this.placeAddedHandler}
        />
        <List places={this.state.places} onItemDeleted={this.placeDeletedHandler} />
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
