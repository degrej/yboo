$(document).ready(function() {
	$('input[name="email"]').keyup(function () {
    var regValidateMail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
    var sCurrentValue = $(this).val();
    var sErrorClass = "error";
    if(regValidateMail.test(sCurrentValue)) {
        $(this).removeClass(sErrorClass);
        return true;
    }
    $(this).addClass(sErrorClass);
    return false;
});

	$('.btn').click(function () {
		if(($('input[name="password"]').val().length < 6) || ($('input[name="email"]').val().length < 6))
		{
			alert("Vous champs doivent contenir au minimum 6 caracteres chacun!");
			return false;
		}			
		else
		{
			window.location.assign("user.html");
			alert("Bienvenue sur votre espace du CE de la BNP Paribas.");
			return false;
		}
	});
});