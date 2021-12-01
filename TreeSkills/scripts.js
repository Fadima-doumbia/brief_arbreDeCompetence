// function InstantiateUsersList(data){
// 	let usersList = [];
// 		//data.foreach(user => );
// 		for(let i = 0; i < data.length; i++){
// 			let user = data[i];
// 			usersList.push(new User(user.id, user.email, user.first_name, user.last_name, user.avatar));
// 		}

// 		for(i = 0; i < usersList.length ; i++)
// 			document.querySelector('#listingEvent').innerHTML += "<div><p>" + usersList[i].GetFirstLastName() + "</p></div>";

// }

// function ReadData(url){
// 	let jsonData;
// 	fetch(url).then(function(resp){
// 		if(resp.ok)
// 		{
// 			return resp.json();
// 		}
// 	}).then(function(jsonData){
// 		InstantiateUsersList(jsonData['data']);
// 	})
// }

let container = document.querySelector('#container')
let listApn = document.querySelector('#studentSelector')


fetch(" http://localhost:3000/Categories")
.then((response)=> {
  return response.json();
})
.then((responJson) => {
  let list = responJson;
  console.log(list);
  list.forEach(element => {
     container.innerHTML += 
	 `   
	 <div class="infoBlockBackground">
				<div class="title">
				${element.title}
				</div>
			</div>
    `
  });
})
.catch((error) => {
  console.error(error);
})

fetch(" http://localhost:3000/Apprenants")
.then((response)=> {
  return response.json();
})
.then((responJson) => {
  let list = responJson;
  console.log(list);
  list.forEach(element => {
     listApn.innerHTML += 
	 `   
	 
	 <option> ${element.nom} </option>
    `
  });
})
.catch((error) => {
  console.error(error);
})