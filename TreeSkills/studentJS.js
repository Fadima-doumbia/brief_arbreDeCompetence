const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let urlApprenants = "http://localhost:3000/Apprenants";
let urlCompetences = "http://localhost:3000/Competences";
let urlValidate = "http://localhost:3000/Competences";

let student_Selector = document.querySelector('#id_StudentSelector');
let competances_container = document.querySelector('#id_Container_Skills');

function ReadDB(url, method){
	fetch(url)
	.then((response)=> {
	  return response.json();
	})
	.then((responJson) => {
	    method(responJson);
	});
}

function CraftStudents(data)
{
	data.forEach(element => { 
		student_Selector.innerHTML += `<option value="./student.html?categorie_id=${urlParams.get('categorie_id')}&student_id=${element.id}">${element.nom}</option>`;
	});
}
function CraftSkills(categorieData , validateData)
{
	let studentID = urlParams.get('student_id');
	let catID = urlParams.get('categorie_id');

	let validateFiltred = validateData.filter( x => x.idApprenant == studentID);
	let categorieFiltred = categorieData.filter( e => e.idCategorie == catID);
	categorieFiltred.forEach(element => { 
		if(competances_container != null)
			competances_container.innerHTML += 
		`<div class="infoBlockBackground">
				<div class="title" style="font-size:0.95em;">
					${element.title}
				</div>
				<div class="infoBlock">
					<div class="infoContainer">
						<div class="profilContainer">
							<!--<div class="profil"></div> -->
						</div>
						<div class="progress">Level 1</div>
					</div>
					<div class="infoContainer">
						<div class="profilContainer">
							<!--<div class="profil"></div> -->
						</div>
						<div class="progress">Level 2</div>
					</div>
					<div class="infoContainer">
						<div class="profilContainer">
						<!--<div class="profil"></div> -->
						</div>
						<div class="progress">Level 3</div>
					</div>
				</div>
			</div>`;
	});
}

function ReadDoubleDB(urlA,urlB, method){
	let tabA;
	let tabB;

	fetch(urlA)
	.then((response)=> {
	  return response.json();
	})
	.then((responJson) => {
	    tabA = responJson;

	    fetch(urlB)
		.then((response)=> {
	 		return response.json();
		})
		.then((responJson) => {
	    	tabB = responJson;
	    	method(tabA, tabB);
		});
	});
}


ReadDB(urlApprenants, CraftStudents);
ReadDB(urlCompetences, CraftSkills);
ReadDB(urlApprenants, urlValidate, CraftSkills);