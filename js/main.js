var aux = 0;
var auxTwo = 1;



function changeReviewThreeUp() {
	var a = myPicsArray[aux];
	var aa = myPicsArray[auxTwo];
	var b = myNameArray[aux];
	var bb = myNameArray[auxTwo];
	var c = myContentArray[aux];
	var cc = myContentArray[auxTwo];


	if (myPicsArray.length > aux) {
		document.getElementById('reviewImageThreeUp').setAttribute("src", a);
		document.getElementById('reviewImageThreeDown').setAttribute("src", aa);
		
		document.getElementById('reviewNameThreeDown').innerHTML = bb;
		document.getElementById('reviewNameThreeUp').innerHTML = b;
		
		document.getElementById('reviewContentThreeUp').innerHTML = c;
		document.getElementById('reviewContentThreeDown').innerHTML = cc;

		aux += 2;
		auxTwo += 2;
		console.log(aux);
		return aux;
	}
	else {
		document.getElementById('right-arrow').style.backgroundColor = "rgb(254, 195, 55)";
		document.getElementById('right-arrow').style.color = "black";
	}
	
}

function changeReviewThreeDown() {
		document.getElementById('right-arrow').style.backgroundColor = "black";
		document.getElementById('right-arrow').style.color = "rgb(254, 195, 55)";

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
	"img/luana.jpg",
	"img/luis.jpg",
	"img/ingrid.jpg",
	"img/athena.jpg",
	"img/carol.jpg"
];

var myNameArray = [
  	'<h4>Mariana Amaral, Ponta Grossa - Paraná</h4>',
  	'<h4>Luciano Krebs, Ponta Grossa - Paraná</h4>',
	"<h4>Jorge Ferreira, Tibagi - Paraná</h4>",
	"<h4>Thomas Ferreira, Tibagi - Paraná</h4>",
	"<h4>Fernando Liberato Shibuta - Ponta Grossa, Paraná</h4>",
	"<h4>Luana Silva - Tibagi, Paraná</h4>",
	"<h4>Luiz Gabriel Souza Perez</h4>",
	"<h4>Ingrid Garcia Taques da Fonseca</h4>",
	"<h4>Athena Faoro Baron</h4>",
	"<h4>Carolina Fonseca Marcondes</h4>"
];

var myContentArray = [
	'<p>"Quando terminou a primeira aula e eu vi que tinha aprendido 45 novas palavras, eu não acreditei. A partir disso comecei a respeitar as repetições e vi o poder disso."</p>',
	'<p>"Nunca consegui aprender inglês antes. Comecei várias vezes mas sempre perdia a motivação por ver que eu não avançava. Agora está sendo totalmente diferente. Estou indo muito rápido!"</p>',
	'<p>"Não sabia absolutamente nada de inglês quando comecei. Acrediteu que isso não era pra mim. Mas após as primeiras aulas, que eu já estava falando várias frases com a pronúncia correta e com um vocabulário legal, percebi que eu era capaz."</p>',
	'<p>"Estou muito feliz por ter encontrado um método que me atendesse. Preciso aprender rápido e preciso de algo prático. Aqui encontrei as duas coisas."</p>',
	'<p>"Uma escola muito profissional e séria. Reputação construída com seriedade. Parabés pelo trabalho. Recomendo."</p>',
	'<p>"Sempre quis aprender inglês, mas odiava o inglês da escola e achei que aquilo era inglês. Quando tive contato com um método diferente fiquei muito animada por que eu realmente estava aprendendo."</p>',
	'<p>"Sou muito grato à Excellent Global e aos professores que me auxiliaram durante o tempo que eu estudei na escola, pois isso permitiu com que eu realizasse um dos meus maiores sonhos, o de fazer um intercâmbio, e com certeza o ensino que construí na escola foi uma das maiores forças para que eu encarasse esse momento tão importante da minha vida com mais garra e confiança! Sem dúvidas a Excellent Global é o lugar certo para estudar inglês e entender um pouco da sua própria personalidade. É incrível.”</p>',
	'<p>“Depois de passar por algumas escolas, meu inglês não evoluía, e eu estava com meu intercâmbio para os Estados Unidos agendado. Foi então que me indicaram a Excellent Global! E foi lá que realmente me senti preparada para esse desafio! Adorei o método!”</p>',
	'<p>“O mais legal da Excellent Global é o método, você fala inglês sem traduzir palavra por palavra... Muito bom, recomendo, pois me ajudou muito.”</p>',
	'<p>“O que me levou a buscar a franquia da Excellent Global foram os comentários que recebia de alunos e/ou ex-alunos com relação ao método usado na escola, ele se mostrava realmente eficaz."</p>'
];