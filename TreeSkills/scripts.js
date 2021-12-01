let container = document.querySelector('#id_Container');
let listApn = document.querySelector('studentSelector');

let urlCategorie = "http://localhost:3000/Categories";

function ReadCategorieDB(url, method){
	fetch(url)
	.then((response)=> {
	  return response.json();
	})
	.then((responJson) => {
	    method(responJson);
	});
}

function CraftCategories(data)
{
	data.forEach(element => { 
		container.innerHTML += `<div class='infoBlockBackground'><div class='title'>${element.title}</div></div>`;
		console.log(element);
	});
}

ReadCategorieDB(urlCategorie, CraftCategories);
