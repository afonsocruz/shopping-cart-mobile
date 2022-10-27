import React from 'react';
import { CustomButton } from '../../components';

const Checkout: React.FC = ({ navigation }: any) => {
  return (
    <CustomButton
      title="Home"
      onPress={() => navigation.navigate('Home')}
    />
  )
}

export default Checkout;