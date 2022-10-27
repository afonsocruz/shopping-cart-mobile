import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {TopbarType} from '../../types/Topbar';

const Topbar: React.FC<TopbarType> = ({isLogged = true}: TopbarType) => {
  return (
    <SafeAreaView>
      <View>{isLogged && <Text>This is the Topbar component</Text>}</View>
    </SafeAreaView>
  );
};

export default Topbar;
