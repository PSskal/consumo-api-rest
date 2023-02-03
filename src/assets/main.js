let img = document.getElementById("imagen-ale")
const API = "https://api.thecatapi.com"
const content = null || document.getElementById("content");

const options = {
	method: 'GET',
	headers: {
		'x-api-key': 'i98k5pPkEwsL5EP2J4lDwhbaFpr6Frf7',
	}
};

async function fetchData(){
    const response = await fetch(`${API}/v1/images/search?breed_ids=beng&include_breeds=true&limit=3`,options);
    const data = await response.json();
    console.log(data);
    // img.src = data[0].url
    let view = `
        ${data.map(dat => `
        <div class="group relative">
        <a href=${dat.url} >
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src=${dat.url} alt="#" class="w-full">
        </div>
        <button 
      id="loka" 
      class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      onclick=""
      >
        Button
      </button>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${dat.id}
          </h3>
        </div>
        </a>
      </div>
        `).slice(0,8).join("")}  
      `;
      content.innerHTML = view;
}

fetchData()



