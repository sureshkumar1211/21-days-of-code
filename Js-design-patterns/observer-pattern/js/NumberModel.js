class NumberModel {
	constructor() {
		this.number = 0;
		this.color = "red";
		this.observers = [];
	}
	increment() {
		let colors = ["green", "blue", "grey", "orange", "black"];
		this.number++;
		this.color = colors[Math.floor(Math.random() * colors.length)];
		this.notifyObserver();
	}
	addObserver(o) {
		this.observers.push(o);
	}
	notifyObserver() {
		for (let observer of this.observers) {
			observer.update(this);
		}
	}
}
