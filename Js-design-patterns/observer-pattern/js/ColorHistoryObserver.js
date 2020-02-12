class ColorHistoryObserver {
	constructor() {
		this.recentColors = [];
	}

	update(model) {
		this.recentColors.length > 4 ? this.recentColors.pop() : "";
		this.recentColors.unshift(model.color);
		let recentColor = this.recentColors
			.map(color => color[0].toUpperCase())
			.join(" ");
		console.log("most recent colors were : ", recentColor);
	}
}
