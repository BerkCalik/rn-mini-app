import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

const ScreenA = (props: any) => {

  return (
    <View>
      <Text>ScreenA</Text>
      <Text>props:{'\n' + JSON.stringify(props, null, '\t')}</Text>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text>Navigation Go Back</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('ScreenB')}>
        <Text>Navigation Go ScreenB</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('ScreenC')}>
        <Text>Navigation Go ScreenC</Text>
      </TouchableOpacity>
      <Text>------------</Text>
    </View>
  );
};

export default ScreenA;
