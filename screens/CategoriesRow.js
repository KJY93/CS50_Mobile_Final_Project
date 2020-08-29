import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    categoryTextInfo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 5,
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 0,
        width: 167,
        height: 167,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        alignSelf: 'center',
        marginBottom: 27,
    },
})

const CategoriesRow = props => {
    return (
        <TouchableOpacity onPress={() => props.onSelect(props.idCategory, props.strCategory )} style={styles.container}>
            <Text style={styles.categoryTextInfo}>{ props.strCategory }</Text>
            <Image style={styles.image} source={{ uri: props.strCategoryThumb }} />
        </TouchableOpacity>
    )
}

CategoriesRow.propTypes = {
    idCategory: PropTypes.string,
    strCategory: PropTypes.string,
    strCategoryThumb: PropTypes.string,
}

export default CategoriesRow