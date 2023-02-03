console.log('Hello, world')

const API = 'https://api.thecatapi.com/';

const options = {
  method: 'GET',
  headers: {
    // 'Content-Type': 'application/json',
    'x-api-key': 'live_koCj0H2g9wNPIVErd1wfmGaDllbZDqMEQh9qmQiEI9uJalzfA03DGzmZk0m1D3lZ'
  }
}
async function reload() {
  const response = await fetch(`${API}v1/images/search?limit=3`,options);
  const data = await response.json();
  console.log({"reload":data});

  const img1 = document.getElementById('img1');
  const img2 = document.getElementById('img2');
  const img3 = document.getElementById('img3');
  

  img1.src = data[0].url;
  img2.src = data[1].url;
  img3.src = data[2].url;

}

reload();