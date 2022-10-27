import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native'
import { CustomButtonType } from '../../types'

const CustomButton: React.FC<CustomButtonType> = ({ 
  title, 
  onPress
}: CustomButtonType) => {
  return (
    <Pressable
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'black',
    width: 160,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default CustomButton;