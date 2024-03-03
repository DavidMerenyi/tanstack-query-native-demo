export const addMovieToWatchlist = async (id: number) => {
    const url = 'https://api.themoviedb.org/3/account/8965196/watchlist';
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZDI3ZjI3YjU0NGQ2NjNmOWRjNGYyZDJkOGUzZTI0OSIsInN1YiI6IjVlMTZmMWZjMGNiMzM1MDAxNzA0ZmRlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Si48xZDQTg_iA-aPLy7OGBqkyinkaD5Dfx0wiXCTWhA'
        },
        body: JSON.stringify({ media_type: 'movie', media_id: id, watchlist: true })
    };

    try {
        const res = await fetch(url, options)

        if (res.ok) {
            throw new Error('Failed to save movie')
        }

        const json = await res.json()
        return json;
    } catch (err) {
        console.error('error:' + err)
    }
}

export const fetchWatchListMovies = async () => {
    const url = 'https://api.themoviedb.org/3/account/8965196/watchlist/movies?language=en-US&page=1&sort_by=created_at.desc';
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
            throw new Error('Failed to fetch movie')
        }

        const json = await res.json()
        return json.results;
    } catch (err) {
        console.error('error:' + err)
    }
}