import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '@/api/movies';

export default function TabOneScreen() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)

      const movies = await fetchTopRatedMovies()
      setMovies(movies)

      setLoading(false)
    }

    fetchMovies()
  }, [])

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <View style={styles.container}>
      <FlatList data={movies} renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
