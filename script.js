let count = 1
let big_list = []

const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const select = document.querySelector('#select')
const found = document.querySelector('.put_found')
const get_blur = document.querySelector('.get_blur')
const add_number = document.querySelector('.add_number')
choose__number()

function choose__number() {
	select.addEventListener('change', ({ target }) =>
		push__number__list(Number(target.value))
	)

	push__number__list(15)
}

function push__number__list(num) {
	big_list = []
	while (num > 0) {
		let random = Math.floor(Math.random() * 99)
		if (!big_list.includes(random)) {
			big_list.push(random)
			num -= 1
		}
	}
	list__append()
}

function list__append() {
	add_number.innerHTML = ''
	for (let i of big_list)
		add_number.innerHTML += `<div class="number">${i}</div>`
}

function sort__list(num, list) {
	for (let i = num; i < big_list.length; i += 3) list.push(big_list[i])
}

function add__modal(num) {
	let array = []
	sort__list(num, array)
	body.classList.add('hidden')
	modal.classList.add('active')
	get_blur.classList.add('blur')
	found.innerHTML = array[parseInt(array.length / 2)]
}

function btn__click(num1, num2, num3, addNumber) {
	if (count < 3) {
		let array = []
		sort__list(num1, array)
		sort__list(num2, array)
		sort__list(num3, array)
		big_list = array
		list__append()
		count += 1
	} else add__modal(addNumber)
}

const replay = () => location.reload()