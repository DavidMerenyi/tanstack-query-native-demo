const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGci...'
}

export const fetchTopRatedMovies = async ({ pageParam }: { pageParam: number }) => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&page=${pageParam}`;
    const options = {
        method: 'GET',
        headers
    };

    try {
        const res = await fetch(url, options)

        if (!res.ok) {
            throw new Error('Failed to fetch movies')
        }

        const json = await res.json()
        return json.results;
    } catch (err) {
        console.error('error:' + err)
    }
}

export const fetchMovie = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers
    };

    try {
        const res = await fetch(url, options)

        if (!res.ok) {
            throw new Error('Failed to fetch movie')
        }

        const json = await res.json()
        return json;
    } catch (err) {
        console.error('error:' + err)
    }
}

