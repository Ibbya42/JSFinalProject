// API Key for Movie List - http://www.omdbapi.com/?i=tt3896198&apikey=6f2ac8c9

async function main(){
    const movies = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=6f2ac8c9")
    const movieData = await movies.json();
    const moviesList = document.querySelector('.movieList')
    moviesList.innerHTML = movieData.map((movies) => moviesHTML(movies)).join("");
}


