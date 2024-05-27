let openShopping = document.querySelector('.shopping')
const closeShopping = document.querySelector('.closeShopping')
const list = document.querySelector('.list')
const listCard = document.querySelector('.listCard')
const body = document.querySelector('body')
const total = document.querySelector('.total')
const quantity = document.querySelector('.quantity')
const paymentButton = document.querySelector('.payment')
let notification = document.querySelector('.notification')
paymentButton.addEventListener('click', () => {
	// Check items
	if (Object.keys(listCards).length > 0) {
		// Redirect
		window.location.href = `https://b24-pk346s.bitrix24.com/rest/1/300erfeunlv1urdm/
			JSON.stringify(listCards)
		)}`
	} else {
		//alert
		alert('Ваша корзина пуста. Добавьте товары, чтобы перейти к оплате.')
	}
})
openShopping.addEventListener('click', () => {
	body.classList.add('active')
})
closeShopping.addEventListener('click', () => {
	body.classList.remove('active')
})

let products = [
	{
		id: 1,
		name: 'Шрирача',
		image: 'chily.jpg',
		price: 250,
		ops: 'Соус шрирача чили обладает знаменитым острым вкусом, этот вид соуса чили популярен не только в Азии, но и импортируется по всему миру, отличное сочетание с мясом и морепродуктами.',
	},
	{
		id: 2,
		name: 'Рыбный соус',
		category: 'Соусы',
		image: 'nuocmam.jpg',
		price: 350,
		ops: 'Рыбный соус изготовлен полностью из натуральных ингредиентов и подарит вам и вашей семье вкусные и ароматные блюда.  ',
	},
	{
		id: 3,
		name: 'Соевый соус Chinsu',
		category: 'Соусы',
		image: 'nuocmam.jpg',
		price: 350,
		ops: 'Соевый соус Чин-су с чесноком и чили 100% растительного происхождения, вкусный до последней капли, подарит вашей семье уютные и вкусные блюда. Продукт содержит натуральные ингредиенты. ',
	},

	{
		id: 4,
		name: 'Лапша Hao hao',
		name1: 'Лапша',
		image: 'haohao.jpg',
		price: 50,
		ops: 'Кисло-острая лапша с креветками — любимый и знакомый вкус лапши быстрого приготовления ',
	},
	{
		id: 5,
		name: 'Рисовая лапша ',
		image: 'pho.jpg',
		name1: 'Лапша',
		price: 250,
		ops: ' Сухая лапша фо известного бренда Vina Acecook изготавливается из 100% обычного риса , абсолютно не используются пищевые добавки.',
	},
	{
		id: 6,
		name: 'Рисовые чипсы One One сладкий',
		image: 'banhgao.jpg',
		price: 150,
		ops: 'Рисовые чипсы One-One  со вкусом жареной говядины  изготовлен из основного ингредиента вьетнамского ароматного риса с восхитительным вкусом.  ',
	},
	{
		id: 7,
		name: 'Сушеное манго',
		image: 'mango.jpg',
		price: 400,
		ops: ' Сушеное манго имеет сладкий и слегка кисловатый вкус и обладает согревающими свойствами. Манго содержит много витаминов и минералов. ',
	},
	{
		id: 8,
		name: 'Желе',
		image: 'thach.png',
		price: 150,
		ops: 'Фруктовые желе - любимое охлаждающее блюдо многих семей знойным летом.',
	},
	{
		id: 9,
		name: 'Кофе Trung Nguyen',
		image: 'cafe.png',
		price: 350,
		ops: 'Подарите себе идеальное начало дня с молотым кофе TRUNG NGUYEN Sang Tao 1 340 г из Вьетнама. Откройте для себя неповторимый аромат и насыщенный вкус этого кофе премиум-класса. Идеально подходит для любителей кофе, которые ценят качество!  ',
	},
	{
		id: 10,
		name: 'Чай Зелёный Тхай Нгуен',
		image: 'thai.jpg',
		price: 350,
		ops: 'Идеальное сочетание изысканности и премиального качества. Насладитесь чашечкой чая и погрузитесь в нежный и безмятежный мир чая из Тхай Нгуена уже сегодня.',
	},
	{
		id: 11,
		name: 'Лапша Safoco',
		ops: 'Лапша для жарки -Основными ингредиентами являются пшеничная мука и яйца, полученный продукт является источником белка, липидов, кальция, и некоторых необходимых для организма микроэлементов.',
		image: 'mi.jpg',
		price: 350,
	},
	{
		id: 12,
		name: 'Сушеное Манго Kong',
		image: 'mango1.jpg',
		ops: '  ',
		price: 600,
	},
	{
		id: 13,
		name: 'Кофе G7 3 в 1 ',
		image: 'cafeg7.jpg',
		ops: 'Растворимый кофе Trung Nguyen G7 3в1 — растворимый кофе премиум-класса с ярким, насыщенным вкусом и уникальным, соблазнительным ароматом, которого не может достичь ни один другой растворимый кофе.',
		price: 300,
	},
]
let listCards = []
function initApp() {
	products.forEach((value, key) => {
		let newDiv = document.createElement('div')
		newDiv.classList.add('item')
		newDiv.innerHTML = `
            <img src="Kane/${value.image}">
            <div class="title">${value.name}</div>
			<div class="ops">${value.ops}</div>
            <div class="price">${value.price.toLocaleString()} ₽</div>
			            

            <button onclick="addToCard(${key})">Добавить в корзину</button>`
		list.appendChild(newDiv)
	})
}
initApp()
function addToCard(key) {
	if (listCards[key] == null) {
		listCards[key] = JSON.parse(JSON.stringify(products[key]))
		listCards[key].quantity = 1
	}

	reloadCard()
}
function addToCard(key) {
	if (listCards[key] == null) {
		listCards[key] = JSON.parse(JSON.stringify(products[key]))
		listCards[key].quantity = 1
		const notification = document.querySelector('.notification')
		if (notification) {
			notification.textContent = 'Товар добавлен в корзину!'
			notification.classList.add('active')
			setTimeout(() => {
				notification.classList.remove('active')
			}, 2500)
		} else {
			console.error()
		}
	}

	reloadCard()
}

function reloadCard() {
	listCard.innerHTML = ''
	let count = 0
	let totalPrice = 0
	listCards.forEach((value, key) => {
		totalPrice = totalPrice + value.price
		count = count + value.quantity
		if (value != null) {
			let newDiv = document.createElement('li')
			newDiv.innerHTML = `
                <div><img src="Kane/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()} ₽</div>
				
                <div>
                    <button onclick="changeQuantity(${key}, ${
				value.quantity - 1
			})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
				value.quantity + 1
			})">+</button>
                </div>`
			listCard.appendChild(newDiv)
		}
	})
	total.innerText = totalPrice.toLocaleString()
	quantity.innerText = count
}
function changeQuantity(key, quantity) {
	if (quantity == 0) {
		delete listCards[key]
	} else {
		listCards[key].quantity = quantity
		listCards[key].price = quantity * products[key].price
	}
	reloadCard()
}
function filterByCategory(category) {
	return products.filter((product) => product.category === category)
}
