/* eslint-disable prettier/prettier */
import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import ReactNativeBlueshiftIntegration from '@takeoffmedia/react-native-blueshift-integration';

export default function App() {
  const [result] = React.useState<string | undefined>();

  React.useEffect(() => {
    ReactNativeBlueshiftIntegration.configurate();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TouchableOpacity
        onPress={() => {
          ReactNativeBlueshiftIntegration.setUserInfoEmailId('jon@ex.com');
          ReactNativeBlueshiftIntegration.UserItsCool(
            'UserIsCool',
            { is: true },
            false
          );
          ReactNativeBlueshiftIntegration.setUserInfoCustomerId('1111111');
        }}
        style={{ padding: 20, backgroundColor: 'red' }}
      >
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
