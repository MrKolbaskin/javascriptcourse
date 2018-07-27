function myFirstApp(name, age) {
	alert("Привет, меня зовут " + name + " и это моя первая программа!");

	function showSkills(){
		let skills = [
		"html", 
		"css", 
		"C", 
		"pascal", 
		"assembler"
		];
		
		for (let i = 0; i < skills.length; i++){
			document.write("Я владею " + skills[i] + "<br>");
		}
	}


	showSkills();

	function checkAge() {
		if(age >= 18) {
			alert("Поздравляю, теперь ты можешь покупать алкоголь в магазине сам!");
		} else{
			alert("Ты все еще не можешь покупать алкоголь сам :(");	
		}
	}

	checkAge();

	function calcPow(num){
		document.write(num + "^2 = " + num*num);
	}
	calcPow(4);
}

myFirstApp("Vladimir", 18);