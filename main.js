


const employees = [
	{ 	
	name: "David Carlson", 
	age: 30 
	},
	{ 
	name: "John Cena", 
	age: 34 
	},
	{ 
	name: "Mike Sheridan", 
	age: 25 
	},
	{ 
	name: "John Carte", 
	age: 50 
	}
];


 employees.filter(function(loc){
	if(loc.age>=34){
		console.log(loc);
	}
});