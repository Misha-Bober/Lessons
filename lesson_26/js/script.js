"use strict"



// // масив
// const someArray = ["Міша", 31]
// console.log(someArray);
// console.log(someArray[0]);

// //Об'єкти 
// const someObject = {
//     name: "Міша",
//     age: 31
// }
// console.log(someObject);
// console.log(someObject.name);

// someObject.name = "Бачі"
// console.log(someObject);

//події
// const link = document.querySelector(".link");

// // link.addEventListener("click", {} => {
//     //code
// // });

// //клік 
// link.addEventListener("click", clickReaction)
// //ховер
// link.addEventListener("mouseenter", clickReaction)
// //коли мишка покидає обєкт
// link.addEventListener("mouseleave", clickReaction)
// //коли миша руїається над обєктом
// link.addEventListener("mousemove", clickReaction);

// function clickReaction() {
//     //code
//     console.log("Click");
// }

//подія багатьох елементів 
const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", clickReaction);
    link.addEventListener("mouseenter", clickReaction)
    //коли мишка покидає обєкт
    link.addEventListener("mouseleave", clickReaction)
    //коли миша руїається над обєктом
    link.addEventListener("mousemove", clickReaction);
});

function clickReaction() {
    //code
    console.log("Click!");
}



document.addEventListener('click', documentAction)

function documentAction(e) {
	const targetElement = e.target
	// Меню бургер
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open')
		// Навігація по сторінці
	} else if (targetElement.closest('.menu__link')) {
		if (document.documentElement.classList.contains('menu-open')) {
			document.documentElement.classList.remove('menu-open')
		}
		const link = targetElement.closest('.menu__link')
		const goto = link.dataset.goto
		const gotoElement = document.querySelector(goto)

		if (gotoElement) {
			gotoElement.scrollIntoView({
				behavior: "smooth"
			})
		}
		e.preventDefault()
		// Показати пароль
	} else if (targetElement.closest('.show-pass')) {
		const inputPass = document.querySelector('.pass-input');
		if (inputPass.getAttribute("type") === "password") {
			inputPass.setAttribute("type", "text")
			targetElement.closest('.show-pass').textContent = 'Приховати пароль'
		} else {
			inputPass.setAttribute("type", "password")
			targetElement.closest('.show-pass').textContent = 'Показати пароль'
		}
	}
}




// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.


// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

//відповіді 

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас 

// document.addEventListener('DOMContentLoaded', function () {
//     var items = document.querySelectorAll('.item');
  
//     items.forEach(function (item) {
//       item.addEventListener('click', function () {
//         // Toggle the 'active' class
//         this.classList.toggle('active');
//       });
//     });
//   });

//   У цьому коді ми використовуємо querySelectorAll для отримання всіх елементів з класом "item". 
//   Потім ми використовуємо forEach для додавання обробника подій click до кожного елемента. 
//   У функції обробки подій ми використовуємо classList.toggle('active'), 
//   щоб додавати або видаляти клас "active" з елемента при кожному кліку.  

// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.

// document.addEventListener('load', function () {
//     let body = document.body;
  
//     // Add the 'transparent' class to the body on page load
//     body.classList.add('transparent');
//   });

// У цьому прикладі ми використовуємо classList.add('transparent') для додавання класу "transparent" 
// до елемента body при завантаженні сторінки. В CSS ми визначаємо стилі для класу "transparent", 
// які включають заданий колір прозорості.

// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

// document.addEventListener('DOMContentLoaded', function () {
//     let header = document.getElementById('header');
//     let footer = document.getElementById('footer');
  
//     header.addEventListener('mouseenter', function () {
//       // Змінюємо колір фону footer при наведенні на header
//       footer.style.backgroundColor = 'yellow';
//     });
  
//     header.addEventListener('mouseleave', function () {
//       // Повертаємо початковий колір фону footer при виході з header
//       footer.style.backgroundColor = '';
//     });
//   });

//   У цьому прикладі ми використовуємо JavaScript для додавання обробників подій до елемента 
//   header, які реагують на події mouseenter (наведення курсору) та mouseleave (виїзд курсору). 
//   При наведенні курсору на header, ми змінюємо колір фону елемента footer, а при виході з header 
//   повертаємо початковий колір фону footer.
  
// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

// document.addEventListener('DOMContentLoaded', function () {
//     let item = document.querySelector('.item');
//     let isIntervalRunning = false;
  
//     function startInterval() {
//       if (!isIntervalRunning) {
//         let delay = parseInt(item.dataset.delay) || 1000;
//         let currentNumber = 1;
//         let interval = setInterval(function () {
//           item.textContent = currentNumber;
//           currentNumber++;
//         }, delay);
//       }
//     }
  
//     function isElementInViewport(el) {
//       let rect = el.getBoundingClientRect();
//       return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//     }
  
//     function handleScroll() {
//       if (isElementInViewport(item)) {
//         startInterval();
//         window.removeEventListener('scroll', handleScroll);
//       }
//     }
  
    // window.addEventListener('scroll', handleScroll);
  
    // handleScroll();
  // });
  

//   У цьому прикладі, коли елемент з класом "item" стає видимим у в'юпорті, функція startInterval 
//   запускає інтервал, який змінює вміст елемента і виводить числа від 1 до заданого максимального 
//   числа з заданою затримкою. Функція isElementInViewport визначає, чи елемент видимий у в'юпорті.


document.addEventListener('DOMContentLoaded', function() {
  // Задача №1
  document.querySelectorAll('.item').forEach(function(item) {
      item.addEventListener('click', function() {
          item.classList.toggle('active');
      });
  });

  // Задача №2
  document.body.classList.add('transparent');

  // Задача №3
  document.querySelector('header').addEventListener('mouseover', function() {
      document.querySelector('footer').style.backgroundColor = 'lightblue';
  });

  document.querySelector('header').addEventListener('mouseout', function() {
      document.querySelector('footer').style.backgroundColor = '';
  });

  // Задача №4
let item = document.querySelector('.item');
    let isIntervalRunning = false;
  
    function startInterval() {
      if (!isIntervalRunning) {
        let delay = parseInt(item.dataset.delay) || 1000;
        let currentNumber = 1;
        let interval = setInterval(function () {
          item.textContent = currentNumber;
          currentNumber++;
        }, delay);
      }
    }
  
    function isElementInViewport(el) {
      let rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function handleScroll() {
      if (isElementInViewport(item)) {
        startInterval();
        window.removeEventListener('scroll', handleScroll);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
  
    handleScroll();
});
  