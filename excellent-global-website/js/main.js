var aux = 0;
var auxTwo = 1;



function changeReviewThreeUp() {
	var a = myPicsArray[aux];
	var aa = myPicsArray[auxTwo];
	var b = myNameArray[aux];
	var bb = myNameArray[auxTwo];
	var c = myContentArray[aux];
	var cc = myContentArray[auxTwo];



	document.getElementById('reviewImageThreeUp').setAttribute("src", a);
	document.getElementById('reviewImageThreeDown').setAttribute("src", aa);
	
	document.getElementById('reviewNameThreeDown').innerHTML = bb;
	document.getElementById('reviewNameThreeUp').innerHTML = b;
	
	document.getElementById('reviewContentThreeUp').innerHTML = c;
	document.getElementById('reviewContentThreeDown').innerHTML = cc;
	if ((myPicsArray.length - 1) / 2 > aux) {
		aux += 2;
		auxTwo += 2;
		return aux;
	}
	else {
		document.getElementById('right-arrow').style.backgroundColor = "rgb(254, 195, 55)";
		document.getElementById('right-arrow').style.color = "black";
	}
	
}

function changeReviewThreeDown() {
	if (aux > 0) {
		document.getElementById('right-arrow').onmouseover = function() {
			this.style.backgroundColor = 'rgb(254, 195, 55)';
			this.style.color = 'black';
		}
		document.getElementById('right-arrow').onmouseout = function() {
			this.style.backgroundColor = 'black';
			this.style.color = 'rgb(254, 195, 55)';
		}
		aux -= 2;
		auxTwo -= 2;
		var a = myPicsArray[aux];
		var aa = myPicsArray[auxTwo];
		var b = myNameArray[aux];
		var bb = myNameArray[auxTwo];
		var c = myContentArray[aux];
		var cc = myContentArray[auxTwo];

		document.getElementById('reviewImageThreeUp').setAttribute("src", a);
		document.getElementById('reviewImageThreeDown').setAttribute("src", aa);
		
		document.getElementById('reviewNameThreeDown').innerHTML = bb;
		document.getElementById('reviewNameThreeUp').innerHTML = b;
		
		document.getElementById('reviewContentThreeUp').innerHTML = c;
		document.getElementById('reviewContentThreeDown').innerHTML = cc;
	}
}

var myPicsArray = [
	"img/lumari.jpg",
	"img/lu.jpg",
	"img/jorge.jpg",
	"img/thomas.jpg",
	"img/fernando.jpg",
	"img/luana.jpg"
];

var myNameArray = [
  	'<h4>Mariana Amaral, Ponta Grossa - Paraná</h4>',
  	'<h4>Luciano Krebs, Ponta Grossa - Paraná</h4>',
	"<h4>Jorge Ferreira, Tibagi - Paraná</h4>",
	"<h4>Thomas Ferreira, Tibagi - Paraná</h4>",
	"<h4>Fernando Liberato Shibuta - Ponta Grossa, Paraná</h4>",
	"<h4>Luana Silva - Tibagi, Paraná</h4>"
];

var myContentArray = [
	'<p>"Quando terminou a primeira aula e eu vi que tinha aprendido 45 novas palavras, eu não acreditei. A partir disso comecei a respeitar as repetições e vi o poder disso."</p>',
	'<p>"Nunca consegui aprender inglês antes. Comecei várias vezes mas sempre perdia a motivação por ver que eu não avançava. Agora está sendo totalmente diferente. Estou indo muito rápido!"</p>',
	'<p>"Não sabia absolutamente nada de inglês quando comecei. Acrediteu que isso não era pra mim. Mas após as primeiras aulas, que eu já estava falando várias frases com a pronúncia correta e com um vocabulário legal, percebi que eu era capaz."</p>',
	'<p>"Estou muito feliz por ter encontrado um método que me atendesse. Preciso aprender rápido e preciso de algo prático. Aqui encontrei as duas coisas."</p>',
	'<p>"Uma escola muito profissional e séria. Reputação construída com seriedade. Parabés pelo trabalho. Recomendo."</p>',
	'<p>"Sempre quis aprender inglês, mas odiava o inglês da escola e achei que aquilo era inglês. Quando tive contato com um método diferente fiquei muito animada por que eu realmente estava aprendendo."</p>',
];