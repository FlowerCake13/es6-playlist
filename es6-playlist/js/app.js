//console.log(data)

var pop = data.filter(function (data){
	return data.genre == "Pop"
})
console.log(pop)

var hiphop = data.filter(function (data){
	return data.genre == "Hip-Hop"
})
console.log(hiphop)

var electronic = data.filter(function (data){
	return data.genre == "Electronic"
})
console.log(electronic)

var alternative = data.filter(function (data){
	return data.genre == "Alternative"
})
console.log(alternative)

var rb = data.filter(function (data){
	return data.genre == "R&B"
})
console.log(rb)

var rock = data.filter(function (data){
	return data.genre == "Rock"
})
console.log(rock)