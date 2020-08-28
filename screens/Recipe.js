import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const IMG_MARGIN = 10;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: IMG_MARGIN,
        alignItems: 'stretch',
    },
    ingredients: {
        fontStyle: 'italic',
    },
    genericContainer: {
        marginBottom: 11,
    },
    recipeMetaDataHeader: {
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 11,
    },

});

const Row = props => <View style={styles.row}>{props.children}</View>;

const Recipe = props => {
    const { height, width } = Dimensions.get('window');
    const imgWidth = Math.min(height, width) - (2 * IMG_MARGIN);

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
            <Image style={{ width: imgWidth, height: imgWidth, borderRadius: 5, }} source={{ uri: props.img }} />
            <Row>
                <Text style={styles.recipeMetaDataHeader}>Meal: </Text>
                <Text>{props.recipeName}</Text>
            </Row>

            <Row>
                <Text style={styles.recipeMetaDataHeader}>Category: </Text>
                <Text>{props.category}</Text>
            </Row>

            <Row>
                <Text style={styles.recipeMetaDataHeader}>Cuisine Type: </Text>
                <Text>{props.type}</Text>
            </Row>

            <Row>
                <Text style={[styles.recipeMetaDataHeader, styles.genericContainer]}>Ingredients: </Text>
            </Row>

            {props.ingredients.map((ingredient, index) => <Text key={`${ingredient}${index + 1}`} style={styles.ingredients}>{ingredient.quantity} {ingredient.ingredient}</Text>)}

            <Row>
                <Text style={[styles.recipeMetaDataHeader, styles.genericContainer]}>Cooking instruction: </Text>
            </Row>

            <Row>
                <Text>{props.instructions}</Text>
            </Row>

        </ScrollView>
    )
}

export default Recipe