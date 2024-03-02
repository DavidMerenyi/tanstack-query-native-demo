import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'
import React from 'react'

const MovieDetails = () => {
    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>MovieDetails: {id}</Text>
        </View>
    )
}

export default MovieDetails