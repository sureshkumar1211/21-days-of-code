class ElementObserver {
	constructor() {
		this.counter = document.querySelector(".counter__box");
		this.incrementBtn = document.querySelector(".counter__btn");
	}
	update(model) {
		this.counter.style.backgroundColor = model.color;
		this.counter.textContent = model.number;
	}
	incrementEventHandler(model) {
		this.incrementBtn.addEventListener("click", e => {
			e.preventDefault();
			model.increment();
		});
	}
}
