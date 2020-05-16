var movie = [
	{
		title:"In Bruge",
		hasWatched: true,
		rating: 5 
	},
	{
		title: "Prozen",
		 hasWatched: true,
		 rating:4.5 
	},
	{
		title:"Max max pury road",
		hasWatched:true,
		rating:5
	},
	{
		title:"Les Miserable",
		hasWatched:false,
		rating:3.5
	}];
movie.forEach(function(i){

	var result = "You have ";
	if (i.hasWatched){
		console.log("true");
		result+="watched ";
	}else{
		result+="not seen ";
	}
	result += "\"" + i.title + "\" -";
	result += i.rating + " stars";
	console.log(result)
});
