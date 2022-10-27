import React from 'react';
import { Button } from 'react-native';

const Checkout: React.FC = ({ navigation }: any) => {
  return (
    <Button
      title="Home"
      onPress={() => navigation.navigate('Home')}
    />
  )
}

export default Checkout;