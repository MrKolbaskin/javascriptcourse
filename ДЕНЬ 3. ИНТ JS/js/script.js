window.addEventListener('DOMContentLoaded', function() {
	//Получвем информацию для работы
	let products = document.querySelectorAll(".product"),
		buttons = document.getElementsByTagName("button"),
		open = document.getElementsByClassName("open")[0];
		//Функция для создания корзины
		function createCart(){
			//Создаем элементы для корзины
			let cart = document.createElement("div"),
				field = document.createElement("div"),
				heading =document.createElement("h2"),
				close = document.createElement("button");

			cart.classList.add("cart");
			field.classList.add("cart-field");
			close.classList.add("close");

			//Добавить текст к элементам
			close.textContent = "Закрыть";
			heading.textContent = "В нашей корзине:";

			//Добавим элементы на страницу
			document.body.appendChild(cart);
			cart.appendChild(heading);
			cart.appendChild(field);
			cart.appendChild(close);
		}

		createCart();


		let field = document.querySelector(".cart-field"),
			cart = document.querySelector(".cart"),
			close = document.querySelector(".close");

		for (let i = 0; i < buttons.length; i++)
		{

			buttons[i].addEventListener("click", function(){
				let item = products[i].cloneNode(true),
					btn = item.querySelector("button");

				btn.remove();
				field.appendChild(item);
				products[i].remove();
			})
		}


	

	open.addEventListener('click', function(){
		cart.style.display = "block";
	});
	close.addEventListener('click', function(){
		cart.style.display = "none";
	});
});
