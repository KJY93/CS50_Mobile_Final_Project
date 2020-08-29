import React from 'react';
import { Dimensions, Image, StyleSheet, Text, SafeAreaView, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { randomMeal } from '../redux/actions';
import Constants from 'expo-constants';
import Button from '../components/Button';
import { StatusBar } from 'expo-status-bar';

class RandomScreen extends React.Component {
    componentDidMount() {
        this.props.dispatch(randomMeal());
    }

    getAnotherRandomMeal = async () => {
        this.props.dispatch(randomMeal());
    }

    render() {
        const { error, loading, random_meal } = this.props;

        if (error) {
            return (
                <View style={[styles.container, styles.textInfoContainer]}>
                    <Text>{error}</Text>
                </View>
            )
        }

        if (loading) {
            return (
                <View style={[styles.container, styles.textInfoContainer]}>
                    <Text>Loading...</Text>
                </View>
            )
        }

        if (random_meal) {
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar style="dark" />
                    <ScrollView contentContainerStyle={styles.content}>
                        <Image
                            source={{ uri: random_meal.img }}
                            style={styles.image}
                        />

                        <Text style={[styles.mealMetaContainer, styles.topSpacing]}><Text style={styles.mealMeta}>Meal: </Text> {random_meal.recipeName}</Text>
                        <Text style={styles.mealMetaContainer}><Text style={styles.mealMeta}>Category: </Text> {random_meal.category}</Text>
                        <Text style={styles.mealMetaContainer}><Text style={styles.mealMeta}>Cuisine Type: </Text> {random_meal.type}</Text>
                        <Text style={[styles.mealMetaContainer, styles.mealMeta]}>Ingredients: </Text>
                        {random_meal.ingredients.map((ingredient, index) => <Text key={`${ingredient}${index+1}`} style={styles.ingredients}>{ingredient.quantity} {ingredient.ingredient}</Text>)}
                        <Text style={[styles.mealMetaContainer, styles.mealMeta, styles.topSpacing]}>Cooking Instruction: </Text>
                        <Text>{random_meal.instructions}</Text>

                        <Button onPress={this.getAnotherRandomMeal} >
                            Click For Another Random Meal!
                        </Button>
                    </ScrollView>
                </SafeAreaView>
            )
        }
        else {
            return  <View style={[styles.container, styles.textInfoContainer]}>
                        <Text>Recipe Not Found!</Text>
                    </View>

        }
    }
};

const mapStateToProps = state => ({
    error: state.random_meal.error,
    loading: state.random_meal.loading,
    random_meal: state.random_meal.meals,
})

export default connect(mapStateToProps)(RandomScreen);

// Styles Configuration
const IMG_MARGIN = 10
const window = Dimensions.get("window");
const width = window.width;
const height = window.height;
const imgWidth = Math.min(height, width) - (2 * IMG_MARGIN)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    content: {
        padding: IMG_MARGIN,
        alignItems: 'stretch',
    },
    error: {
        color: 'tomato',
    },
    image: {
        width: imgWidth,
        height: imgWidth,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
    ingredients: {
        fontStyle: 'italic',
    },
    mealMeta: {
        fontWeight: 'bold',
    },
    mealMetaContainer: {
        marginBottom: 7,
    },
    textInfoContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    topSpacing: {
        marginTop: 7,
    },
})