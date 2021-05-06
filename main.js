const search = async (x, s) => {
  let req = `https://www.omdbapi.com/?s=${x}&page=${pagi}&apikey=b6b117d4`;
  if (x == "movie") {
    req = await fetch(
      `https://www.omdbapi.com/?s=${x}&page=${pagem}&apikey=b6b117d4`
    );
  } else if (x == "series") {
    req = await fetch(
      `https://www.omdbapi.com/?s=${x}&page=${pages}&apikey=b6b117d4`
    );
  }
  const res = await req.json();
  const data = res.Search;
  console.log(res);
  if (!s) {
    if (res.Response.toLowerCase() === "true") {
      for (c = 0; c < data.length; c++) {
        let movies = new Movie(data[c]);
        movies.print(movies.type);
      }
    }
  } else {
    return data;
  }
};
for (pagi; pagi <= 2; pagi++) {
  search("movie");
  search("series");
}

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
    if (!ids.includes(this.imdbid)) {
      ids.push(this.imdbid);
      const div = document.createElement("div");
      div.classList.add("card");
      div.id = `${this.imdbid}`;
      div.addEventListener("click", () => {
        get(div.id);
      });
      div.innerHTML = `<img class='poster' src = '${this.poster}' title="Poster"  id="poster"  />
    <div id="info"></div>
    <h3 class="title"><span id="title">${this.title}</span></h3>
    </div>`;
      switch (x) {
        case "movie":
          ids.push(this.imdbid);
          return moviecontent.appendChild(div);
        case "series":
          return seriescontent.appendChild(div);
      }
    }
  }
  printAlone() {
    const div = document.createElement("div");
    div.classList.add("card");
    div.id = `${this.imdbid}`;
  }
}
const get = async function (id) {
  const req = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=b6b117d4`);
  const res = await req.json();
  console.log(res);
  movier.innerHTML = "";
  series.innerHTML = "";
  let xd = new Movie(res);
  xd.print("movie");
  return res;
};

printwmore(movier);
printwmore(series);
