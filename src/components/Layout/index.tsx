import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {LayoutType} from '../../types';

const Layout: React.FC<LayoutType> = ({children}: LayoutType) => {
  return (
    <SafeAreaView>
      <StatusBar 
        barStyle={'light-content'} 
        backgroundColor="#000" 
      />
      <ScrollView>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
