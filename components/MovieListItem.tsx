import { Link } from 'expo-router';
import { View, Text, Image, Pressable } from 'react-native';

type Movie = {
    id?: number;
    poster_path?: string;
};

const MovieListItem = ({ movie }: { movie: Movie }) => {
    return (
        <Link href={`/${movie?.id}`} style={{ flex: 1 }} asChild>
            <Pressable style={{ flex: 1 }}>
                <Image
                    source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
                    style={{ width: '100%', aspectRatio: 3 / 5, borderRadius: 20 }}
                />
            </Pressable>
        </Link>
    );
};

export default MovieListItem;