/*
Written by Joel Muyskens for CS262 Lab 02
09/11/2020
*/

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [birthdays, setBirthdays] = useState([]);

  const [name, setName] = useState("");
  const [newAge, setNewAge] = useState(1);
  const pressHandler = () => {
    setNewAge((currentAge) => currentAge + 1);
    setBirthdays(birthdays.concat({ key: newAge.toString() }));
  };

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
      ></TextInput>
      <Text>
        {name} is {newAge} years old
      </Text>
      <View style={styles.button}>
        <Button onPress={pressHandler} title="BIRTHDAY"></Button>
      </View>
      <ScrollView>
        <View style={styles.list}>
          <FlatList
            data={birthdays}
            renderItem={({ item }) => (
              <Text style={styles.item}>{item.key}</Text>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {},
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  button: {
    margin: 8,
  },
  scroll: {},
  list: {
    width: 200,
    alignItems: "center",
  },
});
