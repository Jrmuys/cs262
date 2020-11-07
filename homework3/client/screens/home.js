import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [players, setPlayers] = useState(true);

  useEffect(() => {
    fetch('https://protected-mountain-08837.herokuapp.com/winners')
      .then((response) => response.json())
      .then((json) => setPlayers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={players}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ReviewDetails', item)}
            >
              <Card>
                <Text style={globalStyles.titleText}>
                  {item.name}: {item.score}
                </Text>
              </Card>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
