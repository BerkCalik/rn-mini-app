import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import ScreenC from './src/ScreenC';

const Main = createNativeStackNavigator<any>();

const App = (props: any) => {
  const MainNav = () => (
    <Main.Navigator>
      <Main.Screen name={'ScreenA'} component={ScreenA} />
      <Main.Screen name={'ScreenB'} component={ScreenB} />
      <Main.Screen name={'ScreenC'} component={ScreenC} />
    </Main.Navigator>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer independent>
        <View style={{height: 300}}>
          <MainNav />
        </View>
        <Text>App Main State:</Text>
        <Text>props:{'\n' + JSON.stringify(props, null, '\t')}</Text>
        <TouchableOpacity onPress={() => props.mainNavigation.goBack()}>
          <Text>Main Navigation Go Back</Text>
        </TouchableOpacity>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
