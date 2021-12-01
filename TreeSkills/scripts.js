
/*==================================================*/

let categories_container = document.querySelector('#id_Container');
let container = document.querySelector('#id_Container');
let listApn = document.querySelector('studentSelector');

let urlCategorie = "http://localhost:3000/Categories";

function ReadDB(url, method){
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
		if(categories_container != null)
			categories_container.innerHTML += 
		`<a href="./student.html?categorie_id=${element.id}"><div class='infoBlockBackground'>
			<div class='title'>
			${element.title}
			</div>
		</div></a>`;
	});
}

function GetCategorieID(id){
	console.log(id);
}

ReadDB(urlCategorie, CraftCategories);


/******************************************/

