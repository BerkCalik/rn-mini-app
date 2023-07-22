import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const App = (props: any) => {
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        <Text>props:{'\n' + JSON.stringify(props, null, '\t')}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
