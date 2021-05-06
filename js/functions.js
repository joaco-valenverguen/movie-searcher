/*async function get(url) {
  const req = await fetch(url);
  const res = req.json();
}*/
async function printwmore(div) {
  const x = document.createElement("div");
  x.innerHTML = `<h1>Load more</h1>`;
  x.classList.add("more");
  x.addEventListener("click", () => {
    if (div == movier) {
      pagem++;
      pagi = pagem;
    } else if (div == series) {
      pages++;
      pagi = pages;
    }
    printMore(x.previousElementSibling.id);
    console.log(pagi);
  });

  div.appendChild(x);
}
async function printMore(xs) {
  const data = await search(xs, 1);
  for (xase = 0; xase < data.length; xase++) {
    const div = document.createElement("div");
    div.classList.add("card");
    div.id = `${data[xase].imdbID}`;
    div.addEventListener("click", () => {
      alert("click");
      get(div.id);
    });
    div.innerHTML = `<img class='poster' src = '${data[xase].Poster}' title="Poster"  id="poster"  />
    <div id="info">
    <h3 class="title"><span id="title">${data[xase].Title}</span></h3>
    </div>
    </div>`;
    if (xs == "movie") {
      moviecontent.appendChild(div);
    } else if (xs == "serie") {
      seriescontent.appendChild(div);
    }
  }
}
