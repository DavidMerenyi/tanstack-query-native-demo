import { useLocalSearchParams } from 'expo-router'
import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { fetchMovie } from '@/api/movies'
import { useQuery } from '@tanstack/react-query'

const MovieDetails = () => {
    const { id } = useLocalSearchParams()

    const { data, isLoading, error } = useQuery({ queryKey: ['movies', id], queryFn: () => fetchMovie(id) })

    if (isLoading) {
        return <ActivityIndicator />
    }

    if (error) {
        return <Text>Error: {error.message}</Text>
    }

    return (
        <View>
            <Text style={{ fontSize: 24, fontWeight: '500' }}>{data.title}</Text>
        </View>
    )
}

export default MovieDetails