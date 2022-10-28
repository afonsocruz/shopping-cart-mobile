import React, { useState, useEffect } from 'react';
import { Products } from '../../services/products';
import { ProductsType } from '../../types';
import { Image, StyleSheet, Text, View, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';

const ProductsList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    Products.getProducts()
      .then((data) => {
        setLoading(true);
        setProducts(data)
      })
      .catch((err) => {
        console.log(err);
        setIsError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
      {products.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={{uri: item.image}} style={styles.img} />
          <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>R${item.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>
                Comprar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 16,
  },
  info: {
    width: 220,
    marginLeft: 24,
  },
  img: {
    width: 105,
    height: 80
  },
  title: {
    color: 'black',
  },
  price: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    marginTop: 4,
  },
  btnText: {
    color: 'white',
    fontSize: 14,
  }
})

export default ProductsList;