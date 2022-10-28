import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomButton, ProductsList } from '../../components';

const Homepage: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.home}>
      <CustomButton
        title='Checkout'
        onPress={() => navigation.navigate('Checkout')}
      />
      <ProductsList />
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    padding: 12,
  }
})

export default Homepage;