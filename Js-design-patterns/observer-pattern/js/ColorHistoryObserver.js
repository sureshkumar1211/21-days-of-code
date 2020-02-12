class ColorHistoryObserver {
	constructor() {
		this.recentColors = [];
	}

	update(model) {
		if (this.recentColors.length > 4) {
			this.recentColors.pop();
		}
		this.recentColors.unshift(model.color);
		let recentColor = [];
		if (this.recentColors.length) {
			this.recentColors.some((color, index) => {
				recentColor.push(color[0].toUpperCase());
				return index == 5;
			});
		}
	}
}
