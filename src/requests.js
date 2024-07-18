const key = '5316166cb720493bfb61b118e7aeda5b'


const requests = {
    requestsPopular: `https://api.themoviedb.org/3/movie/popular?api_key${key}&language=en-US&page=1`,
    requestTrending: `'https://api.themoviedb.org/3/trending?api_key${key}&language=en-US&page=1`
}

export default requests