
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
    spanError.innerHTML = "Hubo un error: " + response.status;
  } else {
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');


    img1.src = data[0].url;
    img2.src = data[1].url;
    console.log(data[0].id);

    btn2.onclick = () => saveFavouriteMichi(data[1].id);
    btn2.onclick = () => saveFavouriteMichi(data[0].id);
  }

}
async function loadFavoritesMichis() {
  const response = await fetch(`${API}v1/favourites`,options);
  const data = await response.json();
  console.log({"favorites":data})

  if (response.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + response.status + data.message;
  }else{
    const section = document.getElementById('favoriteMichis')
    section.innerHTML = "";

    const h2 = document.createElement('h2');
    const h2Text = document.createTextNode('Michis favoritos');
    h2.appendChild(h2Text);
    section.appendChild(h2);

    data.forEach(michi => {
      const article = document.createElement('article');
      const img = document.createElement('img');
      const btn = document.createElement('button');
      const btnText = document.createTextNode('Sacar al michi de favoritos');

      img.src = michi.image.url;
      img.width = 150;
      btn.appendChild(btnText);
      btn.onclick = () => deleteFavouriteMichi(michi.id);
      article.appendChild(img);
      article.appendChild(btn);
      section.appendChild(article);
    });
  }

}
async function saveFavouriteMichi(id) {
  const response = await fetch(`${API}v1/favourites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'live_koCj0H2g9wNPIVErd1wfmGaDllbZDqMEQh9qmQiEI9uJalzfA03DGzmZk0m1D3lZ'
    },
    body: JSON.stringify({
      "image_id": id
    }),
  });
  const data = await response.json();

  console.log('Save')
  console.log(response)

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + response.status + data.message;
  }else {
    console.log('Michi guardado en favoritos')
    loadFavoritesMichis();
  }
}

async function deleteFavouriteMichi(id) {
  const res = await fetch(`${API}/v1/favourites/${id}`, {
    method: 'DELETE',
    headers: {
      'x-api-key': 'live_koCj0H2g9wNPIVErd1wfmGaDllbZDqMEQh9qmQiEI9uJalzfA03DGzmZk0m1D3lZ'
    },
  });
  const data = await res.json();

  if (res.status !== 200) {
    spanError.innerHTML = "Hubo un error: " + res.status + data.message;
  } else {
    console.log('Michi eliminado de favoritos')
    loadFavoritesMichis();
  }
}


reloadMichis();
loadFavoritesMichis();