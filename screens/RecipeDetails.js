import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { getRecipeById } from '../services/api'
import Recipe from './Recipe'

class RecipeDetailsScreen extends React.Component {
    state = {
        meals: null,
        id: this.props.route.params.id
    }

    async componentDidMount() {
        const meals = await getRecipeById(this.state.id)
        this.setState({ meals })
    }

    render() {
        if (!this.state.id) return <Text>An error has occured</Text>
        return this.state.meals
            ? <Recipe {...this.state.meals} />
            : <Text>Loading...</Text>
    }
}

export default RecipeDetailsScreen;