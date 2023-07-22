import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const ScreenC = (props: any) => {
  return (
    <View>
      <Text style={{color: 'red', fontSize: 18}}>ScreenC</Text>
      <Text>props:{'\n' + JSON.stringify(props, null, '\t')}</Text>
    </View>
  );
};

export default ScreenC;
