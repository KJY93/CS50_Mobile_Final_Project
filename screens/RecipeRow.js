import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: 'row',
    },
    recipeName: {
      fontWeight: 'bold',
    },
    image: {
      flex: 0,
      width: 68,
      height: 68,
      marginRight: 20,
    },
    recipeMetadata: {
      flex: 1,
    },
  })

const Row = props => {
    return ( 
      <TouchableOpacity onPress={() => props.onSelect(props.id, props.recipeName)} style={styles.container}>
          <Image style={styles.image} source={{ uri: props.img }} />
          <View style={styles.recipeMetadata}>
            <Text style={styles.recipeName}>{props.recipeName}</Text>
            <Text>Category: {props.category}</Text>
            <Text>Cuisine Type: {props.type}</Text>
          </View>
      </TouchableOpacity>
    )
}

Row.propTypes = {
  id: PropTypes.string,
  recipeName: PropTypes.string,
  img: PropTypes.string,
  category: PropTypes.string,
  type: PropTypes.string,
}

export default Row