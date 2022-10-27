import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomButton } from '../../components';

const Homepage: React.FC = ({ navigation }: any) => {
  return (
    <View>
      <CustomButton
        title='Checkout'
        onPress={() => navigation.navigate('Checkout')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})



export default Homepage;