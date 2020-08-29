import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { getRecipeById } from '../services/api'
import Recipe from './Recipe'

class RecipeDetailsByCategoryScreen extends React.Component {
    static propTypes = {
        idMeal: PropTypes.string,
        strMeal: PropTypes.string,
    }

    state = {
        meals: null,
        id: this.props.route.params.idMeal
    }

    async componentDidMount() {
        const meals = await getRecipeById(this.state.id)
        this.setState({ meals })
    }

    render() {
        if (!this.state.id) return <Text>An error has occured.</Text>
        return this.state.meals
            ? <Recipe {...this.state.meals} />
    : <View style={styles.textContainer}><Text>Loading...</Text></View>
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default RecipeDetailsByCategoryScreen;