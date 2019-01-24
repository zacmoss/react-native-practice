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
  
  

  placeNameChangedHandler = val => {
    alert(val);
    this.setState(() => ({ placeName: val }))
  }
  placeSubmitHandler = () => {
    alert(this.state.test);
    if (this.state.placeName === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
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
          <InputRow
            style={styles}
            placeNameState={this.state.placeName}
            changeTextFunc={this.placeNameChangedHandler}
            pressFunc={this.placeSubmitHandler}
          />
        <View style={styles.listContainer}>
          {/*placesOutput*/}
          <List places={this.state.places} />
        </View>
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
  },
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: "100%"
  }
});