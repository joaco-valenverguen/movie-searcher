const container = document.getElementById("container");
const movier = document.querySelector(".movie-content");
const series = document.querySelector(".serie-content");
let cards;

async function get() {
  const req = await fetch("http://www.omdbapi.com/?t=avengers&apikey=b6b117d4");
  const res = await req.json();
  console.log(res);
  const div = document.createElement("div");
  div.classList.add("alone");
  div.id = `${res.imdbID}`;
  div.innerHTML = `<img class='poster' src = '${res.Poster}' title="Poster"  id="poster"  />
    <div id="info">
    <h1 class="title"><span id="title">${res.Title}</span></h1
    ><h4>Directed by ${res.Director}</h4
    ><h4 class="actors"><span id="actors">Actors ${res.Actors}</span></h4
    >
    <p class="plot"><span id="plot">${res.Plot}</span> This ${res.Type} is a production of ${res.Production} was of <span id='year'>${res.year}</span> was released at ${res.Released} with a rated of ${res.Rated} has a runtime of <span id='runtime'>${res.Runtime}</span>  having the writers <span id='writer'>${res.Writer}</span> this with a metascore of ${res.Metascore}  has been in awards by ${res.Awards} </p>
    
    </div>
    </div>`;
  container.innerHTML = "";
  container.appendChild(div);
}

get();
