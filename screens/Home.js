import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Constants from 'expo-constants';
import { searchMealByName } from '../redux/actions';
import Row from './RecipeRow';

const renderItem = onSelect => ({ item }) => <Row onSelect={onSelect} {...item} />

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            recipeName: '',
        }
    }

    handleUpdateQuery = (query) => {
        this.setState({ query })
    }

    handleRecipeSearch = async () => {
        this.setState({recipeName: this.state.query})
        this.props.dispatch(searchMealByName(this.state.query))
    }

    handleRecipeSelect = (id, recipeName) => {
        this.props.navigation.navigate('Recipe Details', {id, recipeName});
    }

    render() {
        const { loading, search_meal } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.textInfo}>What do you feel like eating?</Text>

                <TextInput style={styles.textInput}
                    placeholder='Search For Recipes...'
                    returnKeyType='done'
                    autoCapitalize='none'
                    onChangeText={this.handleUpdateQuery}
                    value={this.state.query}
                />

                <View style={styles.buttonContainer}>
                    <Button onPress={this.handleRecipeSearch}>
                        Search For A Recipe!
                    </Button>
                </View>

                {search_meal
                    ? (
                    <>
                        <Text style={styles.searchText}>Search results for: {this.state.recipeName}</Text>

                        <FlatList
                            data={search_meal}
                            renderItem={renderItem(this.handleRecipeSelect)}
                            keyExtractor={item => item.id}
                        />
                    </>) : loading 
                    ? 
                        <Text style={styles.textInfo}>Loading Recipes...</Text>
                    :   
                        <Text style={styles.textInfo}>No Results</Text>
                }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => ({
    error: state.search_meal.error,
    loading: state.search_meal.loading,
    search_meal: state.search_meal.meals,
})

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
    buttonContainer: {
        marginLeft: 11,
        marginRight: 11,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    searchText: {
        marginTop: 7,
        marginLeft: 11,
    },
    textInfo: {
        marginTop: Constants.statusBarHeight,
        textAlign: 'center',
    },
    textInput: {
        marginLeft: 11,
        marginRight: 11,
        marginTop: 7,
        marginBottom: 3,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        padding: 5,
        height: 39,
    },
})