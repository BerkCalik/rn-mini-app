import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const ScreenB = (props: any) => {
  return (
    <View>
      <Text>ScreenB</Text>
      <Text>props:{'\n' + JSON.stringify(props, null, '\t')}</Text>
    </View>
  );
};

export default ScreenB;
