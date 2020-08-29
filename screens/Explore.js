import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { mealCategories } from '../redux/actions';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import CategoriesRow from './CategoriesRow';

const renderItem = onSelect => ({ item }) => <CategoriesRow onSelect={onSelect} {...item} />

class ExploreScreen extends React.Component {
    componentDidMount() {
        this.props.dispatch(mealCategories());
    }

    handleCategorySelect = (idCategory, strCategory) => {
        this.props.navigation.navigate('Recipes By Category List', {idCategory, strCategory});
    }

    render() {
        const { error, loading, meal_categories } = this.props;

        if (error) {
            return (
                <View style={[styles.container, styles.textInfoContainer]}>
                    <Text>{error}</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                {meal_categories
                    ? (
                        <FlatList
                            data={meal_categories}
                            renderItem={renderItem(this.handleCategorySelect)}
                            keyExtractor={item => item.idCategory}
                        />
                    ) : loading
                        ?
                        <View style={styles.textInfoContainer}><Text>Loading Categories...</Text></View>
                        :
                        <View style={styles.textInfoContainer}><Text style={styles.textInfoContainer}>No Results</Text></View>
                }
            </View>
        )
    }
}

const mapStateToProps = state => ({
    error: state.meal_category.error,
    loading: state.meal_category.loading,
    meal_categories: state.meal_category.category,
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    textInfoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default connect(mapStateToProps)(ExploreScreen);