import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  state = {
    placeName: ""
  };

  placeNameChangedHandler = value => {
    this.setState({
      placeName: value
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>My first React Native app.</Text>
        <TextInput
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={{ width: 300, borderColor: "black", borderWidth: 1 }}
          placeholder="Please enter where you are live !!!"
        />
        <Text>You are live in {this.state.placeName}!</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
