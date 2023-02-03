
const API = 'https://api.thecatapi.com/';
const spanError = document.getElementById("error");


const options = {
  method: 'GET',
  headers: {
    // 'Content-Type': 'application/json',
    'x-api-key': 'live_koCj0H2g9wNPIVErd1wfmGaDllbZDqMEQh9qmQiEI9uJalzfA03DGzmZk0m1D3lZ'
  }
}
async function reloadMichis() {
  const response = await fetch(`${API}v1/images/search?limit=3`,options);
  const data = await response.json();
  console.log({"reload":data});

  if (response.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');

    img1.src = data[0].url;
    img2.src = data[1].url;
  }

}
async function loadFavoritesMichis() {
  const response = await fetch(`${API}v1/favourites`,options);
  const data = await response.json();
  console.log({"favorites":data})

  if (response.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}
async function saveFavouriteMichis() {
  const res = await fetch(`${API}v1/favourites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      image_id: 'dje'
    }),
  });
  const data = await res.json();

  console.log('Save')
  console.log(res)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  }
}


reloadMichis();
loadFavoritesMichis();