$(document).ready(function() {

	$("#goToDepoimentos").on('click', function() {
	    $('html,body').animate({
		    scrollTop: $("#depoimentos").offset().top
		}, 2000);
	});
	$("#goToAulaExperimental").on('click', function() {
		$('html, body').animate({
			scrollTop: $("#aula-experimental").offset().top
		}, 2000);
	});
	$("#goToMetodologia").on('click', function() {
		$('html, body').animate({
			scrollTop: $("#metodologia").offset().top
		}, 1500);
	});
	$("#goToEstrutura").on('click', function() {
		$('html, body').animate({
			scrollTop: $("#estrutura").offset().top
		}, 1500);
	});
});