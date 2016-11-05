function absenden() {
	var inputfeld = document.getElementById("eingabe");
	var wert = inputfeld.value;

	var knoten = document.createElement("p");
	var inhalt = document.createTextNode(wert);
	knoten.appendChild(inhalt);

	var divElement = document.getElementById("container");
	divElement.appendChild(knoten);
}