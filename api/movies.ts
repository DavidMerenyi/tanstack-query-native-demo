export const fetchTopRatedMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI3ZjI3YjU0NGQ2NjNmOWRjNGYyZDJkOGUzZTI0OSIsInN1YiI6IjVlMTZmMWZjMGNiMzM1MDAxNzA0ZmRlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Si48xZDQTg_iA-aPLy7OGBqkyinkaD5Dfx0wiXCTWhA'
        }
    };

    try {
        const res = await fetch(url, options)

        if (res.ok) {
            throw new Error('Failed to fetch movies')
        }

        const json = await res.json()
        return json.results;
    } catch (err) {
        console.error('error:' + err)
    }
}

