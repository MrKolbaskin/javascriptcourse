let form = document.querySelector(".modal"),
	close = document.querySelector(".close"),
	receiveBtn = document.getElementById('receive'),
	name = document.querySelector(".contactform_name"),
	message = document.getElementsByName("message")[0];

receiveBtn.addEventListener("click", function() {
	form.style.display = "block"; 
});

close.addEventListener("click", function(){
	form.style.display = "none"; 
});

name.addEventListener("input", function(){
	message.value = "Меня зовут " + name.value + ". И я хочу спросить";

	if (name.value == "")
		message.value = "";
	
})