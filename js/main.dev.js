const title = document.querySelector("#title");
const genre = document.querySelector("#genre");
const director = document.querySelector("#director");
const actors = document.querySelector("#actors");
const runtime = document.querySelector("#runtime");
const poster = document.querySelector("#poster");
const input = document.querySelector("#searcher");
const a = document.querySelector("#x");
let x = "avengers";
a.addEventListener("submit", (e) => {
  x = input.value;
  console.log(x);
  e.preventDefault();
  get();

  return x;
});
console.log(x);
const get = async () => {
  const { data } = await axios.get(
    /*"http://www.omdbapi.com/?t=avengers&apikey=b6b117d4"*/
    `http://www.omdbapi.com/?t=${x}&apikey=b6b117d4`
  );
  title.innerHTML = data.Title;
  genre.innerHTML = data.Genre;
  director.innerHTML = data.Director;
  actors.innerHTML = data.Actors;
  runtime.innerHTML = data.Runtime;
  console.log(data);
  const Poster = new Image();
  Poster.src = data.Poster;
  console.log(Poster);
  poster.src = Poster.src;
};
