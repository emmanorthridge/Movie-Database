import { StatusBar } from 'expo-status-bar';
import React, {useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import axios from 'axios';

export default function App() {

  const apiurl =  "http://www.omdbapi.com/?i=tt3896198&apikey=c54d4f89"
  const [state, setState] = useState({
    s: "Enter a movie...",
    results: [],
    selected: {}
  })

  const search = () => {
   axios(apiurl + "&s=" + state.s).then(({ data }) => {
     let results = data.Search
     console.log(results)
     setState(prevState => {
       return {...prevState, results: results }
     })
   })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movie DB</Text>
      <TextInput 
      style={styles.searchbox}
      onChangeText={text => setState (prevState => {
        return {...prevState, s: text}
      }) }
      onSubmitEditing={search}
      value={state.s}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223343',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 70,
    paddingHorizontal: 20
  },
  title: {
    color: '#FFF',
    fontSize: 32,
    // fontWeight: "700",
    textAlign: "center",
    marginBottom: 20
  },
  searchbox: {
    fontSize: 20,
    // fontWeight: "300",
    padding: 20,
    width: "100%",
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 40
  }
});
