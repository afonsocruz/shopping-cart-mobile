import React from 'react';
import { Button, Text } from 'react-native';

const Homepage: React.FC = ({ navigation }: any) => {
  return (
    <Button
      title='Checkout'
      onPress={() => navigation.navigate('Checkout')}
    />
  )
}

export default Homepage;