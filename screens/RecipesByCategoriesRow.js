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

const RecipesByCategoriesRow = props => {
    return ( 
      <TouchableOpacity onPress={() =>  props.onSelect(props.idMeal, props.strMeal ) } style={styles.container}>
          <Image style={styles.image} source={{ uri: props.strMealThumb }} />
          <View style={styles.recipeMetadata}>
            <Text style={styles.recipeName}>{props.strMeal}</Text>
          </View>
      </TouchableOpacity>
    )
}

RecipesByCategoriesRow.propTypes = {
  idMeal: PropTypes.string,
  strMealThumb: PropTypes.string,
  strMeal: PropTypes.string,
}

export default RecipesByCategoriesRow