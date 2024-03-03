import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native';

import { View } from '@/components/Themed';
import { fetchTopRatedMovies } from '@/api/movies';
import { useInfiniteQuery } from '@tanstack/react-query';
import MovieListItem from '@/components/MovieListItem';

export default function TabOneScreen() {
  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({ queryKey: ['movies'], queryFn: fetchTopRatedMovies, initialPageParam: 1, getNextPageParam: (lastPage, pages) => lastPage + 1 })

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (error) {
    return <Text>Error: {error.message}</Text>
  }

  const movies = data?.pages.flat()
  return (
    <View style={styles.container}>
      <FlatList data={movies} renderItem={({ item }) => <MovieListItem movie={item} />} numColumns={2} contentContainerStyle={{ gap: 5, padding: 5 }} columnWrapperStyle={{ gap: 5 }} onEndReached={() => { fetchNextPage() }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
