
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('TABLE');
var tr1 = document.createElement('tr');
var tr2 = document.createElement('tr');

list.appendChild(tr1);
list.appendChild(tr2);

for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var th = document.createElement('th');
	var item = document.createElement('td');
	th.innerHTML = i+1;
	item.innerHTML = books[i].title;
	item.setAttribute('id', 'item'+i);
	tr1.appendChild(th);
	tr2.appendChild(item);
}

var display = document.createElement('h1');
document.body.appendChild(display);
document.body.appendChild(list);

for (var j = 0; j < books.length; j++) {
	document.getElementById('item'+j).addEventListener('click', insertHTML);
}

function insertHTML() {
	display.innerHTML = this.innerHTML;
}