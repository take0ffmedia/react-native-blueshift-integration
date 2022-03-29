/* eslint-disable prettier/prettier */
import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ReactNativeBlueshiftIntegration from '@takeoffmedia/react-native-blueshift-integration';

export default function App() {
  const [result] = React.useState<string | undefined>();

  React.useEffect(() => {
    ReactNativeBlueshiftIntegration.configurate();
    // ReactNativeBlueshiftIntegration.init().then(setResult);
    // setTimeout(() => {
    //   ReactNativeBlueshiftIntegration.test().then((res)=>{console.log(res)})
    // }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
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
