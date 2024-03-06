// API Key for Movie List - http://www.omdbapi.com/?i=tt3896198&apikey=6f2ac8c9

// async function main(){
//     const movies = await fetch ("http://www.omdbapi.com/?i=tt3896198&apikey=6f2ac8c9")
//     const movieData = await movies.json();
//     const moviesList = document.querySelector('.movie')
//     moviesList.innerHTML = movieData.map((movie) => moviesHTML(movie)).join("");
// }

// main();

// function moviesHTML(movie){
//     return `
//     <div class="movie">
//     <div class="movie__card">
//     <p><b>Title:<b>${movie.Title}</p>
//     <figure>
//     <img src="/assets/Nav__img.png" class="movie__img">
//     </figure>
//     <p>Year: </p>
//     </div>
//     </div>`;
// }

async function main(){
    const movies = await fetch("https://jsonplaceholder.typicode.com/users");
    const moviesData = await movies.json();
    const movieListEL = document.querySelector('.Movie__List');
    console.log(moviesData)
    movieListEL.innerHTML = moviesData.
    map(
        (movie) =>
    `<div class="movie">
    <div class="movie__card">
    <p>Name: ${movie.name}</p>
    <figure>
    <img src="/assets/Nav__img.png" class="movie__img">
    </figure>
    <p>Year: ${movie.phone} </p>
    </div>
    </div>`
        ).join("")
 
}

main();
