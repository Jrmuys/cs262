import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

import Card from '../shared/card';

export default function ReviewDetails({ route, navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{route.params.name}</Text>
        <Text>{route.params.score}</Text>
        <Text>{route.params.emailaddress}</Text>
      </Card>
    </View>
  );
}
