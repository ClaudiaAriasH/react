const getImagenesPromesa = () =>
  new Promise((resolve) => {
    resolve("https://");
  });

// async
getImagenesPromesa().then(console.log);

const getImagen = async () => {
  return "https://";
};

getImagen().then(console.log);

//await
const getImagen2 = async () => {
  try {
    const apiKey = "4Z67sdDwzCs8EE7pFmXKmTpPKB3HgcgM";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
    );

    const { data } = await resp.json();

    const { url } = data[0].images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};

getImagen2();
