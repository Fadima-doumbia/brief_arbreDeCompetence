function InstantiateUsersList(data){
	let usersList = [];
		//data.foreach(user => );
		for(let i = 0; i < data.length; i++){
			let user = data[i];
			usersList.push(new User(user.id, user.email, user.first_name, user.last_name, user.avatar));
		}

		for(i = 0; i < usersList.length ; i++)
			document.querySelector('#listingEvent').innerHTML += "<div><p>" + usersList[i].GetFirstLastName() + "</p></div>";

}

function ReadData(url){
	let jsonData;
	fetch(url).then(function(resp){
		if(resp.ok)
		{
			return resp.json();
		}
	}).then(function(jsonData){
		InstantiateUsersList(jsonData['data']);
	})
}