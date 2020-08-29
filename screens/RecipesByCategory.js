import React from 'react';
import { FlatList, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import { getRecipesByCategory } from '../services/api';
import RecipesByCategoriesRow from './RecipesByCategoriesRow';

const renderItem = onSelect => ({ item }) => <RecipesByCategoriesRow onSelect={onSelect} {...item} />

class RecipesByCategoryScreen extends React.Component {
    static propTypes = {
        idCategory: PropTypes.string,
        strCategory: PropTypes.string,
    }

    state = {
        meals_list: null,
        strCategory: this.props.route.params.strCategory
    }

    async componentDidMount() {
        const meal_by_categories_list = await getRecipesByCategory(this.state.strCategory)
        this.setState({meals_list: meal_by_categories_list})
    }

    handleRecipesByCategorySelect = (idMeal, strMeal) => {
        this.props.navigation.navigate('Recipes Details By Category', {idMeal, strMeal});
    }

    render() {
        if (!this.state.strCategory) return <Text>An error has occured</Text>
        
        if (this.state.meals_list) {
            return ( 
                <FlatList  
                    data={this.state.meals_list}
                    keyExtractor={item => item.idMeal }
                    renderItem={renderItem(this.handleRecipesByCategorySelect)}
                />
            )
        } else {
            return <View style={styles.textContainer}><Text>Loading...</Text></View>
        }
    }
}

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default RecipesByCategoryScreen