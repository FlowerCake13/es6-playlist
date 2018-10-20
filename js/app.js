var popBtn = document.getElementById('pop');
var hiphopBtn = document.getElementById('hiphop');
var electronicBtn = document.getElementById('electronic');
var alternativeBtn = document.getElementById('alternative');
var rbBtn = document.getElementById('rb');
var rockBtn = document.getElementById('rock');

var musicContainer = document.getElementById('music-container')
var music = document.getElementsByClassName('music');

//console.log(data)

popBtn.addEventListener('click', function(){
	var pop = data.filter(function (data){
		return data.genre == "Pop"
	})
	console.log(pop)
	for (var i = 0; i < pop.length; i++) {
		music[i].innerHTML = ""
		var img = document.createElement('img');
		img.setAttribute('class', 'music-img')
		img.src = pop[i].image
		music[i].appendChild(img)
	}
})

hiphopBtn.addEventListener('click', function(){
	var hiphop = data.filter(function (data){
		return data.genre == "Hip-Hop"
	})
	console.log(hiphop)
	for (var i = 0; i < hiphop.length; i++) {
		music[i].innerHTML = ""
		var img = document.createElement('img');
		img.setAttribute('class', 'music-img')
		img.src = hiphop[i].image
		music[i].appendChild(img)
	}
})
	

electronicBtn.addEventListener('click', function(){
	var electronic = data.filter(function (data){
		return data.genre == "Electronic"
	})
	console.log(electronic)
	for (var i = 0; i < electronic.length; i++) {
		music[i].innerHTML = ""
		var img = document.createElement('img');
		img.setAttribute('class', 'music-img')
		img.src = electronic[i].image
		music[i].appendChild(img)
	}
})

alternativeBtn.addEventListener('click', function(){
	var alternative = data.filter(function (data){
		return data.genre == "Alternative"
	})
	console.log(alternative)
	for (var i = 0; i < alternative.length; i++) {
		music[i].innerHTML = ""
		var img = document.createElement('img');
		img.setAttribute('class', 'music-img')
		img.src = alternative[i].image
		music[i].appendChild(img)
	}
})

rbBtn.addEventListener('click', function(){
	var rb = data.filter(function (data){
		return data.genre == "R&B"
	})
	console.log(rb)
	for (var i = 0; i < rb.length; i++) {
		music[i].innerHTML = ""
		var img = document.createElement('img');
		img.setAttribute('class', 'music-img')
		img.src = rb[i].image
		music[i].appendChild(img)
	}
})

rockBtn.addEventListener('click', function(){
	var rock = data.filter(function (data){
		return data.genre == "Rock"
	})
	console.log(rock)
	for (var i = 0; i < rock.length; i++) {
		music[i].innerHTML = ""
		var img = document.createElement('img');
		img.setAttribute('class', 'music-img')
		img.src = rock[i].image
		music[i].appendChild(img)
	}
})