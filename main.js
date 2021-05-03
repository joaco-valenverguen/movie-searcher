const container = document.getElementById("container");
const movier = document.querySelector(".movie-content");
const series = document.querySelector(".serie-content");
let cards;
const get = async () => {
  const req = await fetch("http://www.omdbapi.com/?s=avengers&apikey=b6b117d4");
  const res = await req.json();
  const data = res.Search;
  console.log(data);
  if (res.Response.toLowerCase() === "true") {
    for (c = 0; c < data.length; c++) {
      let movies = new Movie(data[c]);
      movies.print(movies.type);
    }
  }
};
get();

class Movie {
  constructor(res) {
    this.title = res.Title;
    this.year = res.Year;
    this.rated = res.Rated;
    this.runtime = res.Runtime;
    this.released = res.Released;
    this.genre = res.Genre;
    this.director = res.Director;
    this.writer = res.Writer;
    this.actors = res.Actors;
    this.plot = res.Plot;
    this.language = res.Language;
    this.country = res.Country;
    this.awards = res.Awards;
    this.poster = res.Poster;
    this.ratings = res.Ratings;
    this.metascore = res.Metascore;
    this.imdbrating = res.imdbRating;
    this.imdbid = res.imdbID;
    this.type = res.Type;
    this.dvd = res.DVD;
    this.boxoffice = res.BoxOffice;
    this.production = res.Production;
    this.website = res.Website;
    this.response = res.Response;
  }
  print(x) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.id = `${this.imdbid}`;
    div.innerHTML = `<img class='poster' src = '${this.poster}' title="Poster"  id="poster"  />
    <div id="info"></div>
      <h3 class="title"><span id="title">${this.title}</span></h3>
    </div>`;
    switch (x) {
      case "movie":
        return movier.appendChild(div);
      case "series":
        return series.appendChild(div);
    }
  }
}
async function xd() {
  setTimeout(() => {
    x = document.getElementsByClassName("card");
    cards = [];
    for (c = 0; c < x.length; c++) {
      cards.push(x[c]);
    }
  }, 450);
}
xd();
setTimeout(() => {}, 1000);
