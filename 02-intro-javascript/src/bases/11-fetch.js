//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
const apiKey = "4Z67sdDwzCs8EE7pFmXKmTpPKB3HgcgM";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
);

/*peticion
  .then((resp) => {
    resp.json().then((data) => {
      console.log(data);
    });
  })
  .catch(console.log);*/

//Respuesta encadenada

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data[2].images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
