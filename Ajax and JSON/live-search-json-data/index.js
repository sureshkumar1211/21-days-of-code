$(document).ready(function() {
	$("#search").keyup(function() {
		$("#result").html("");
		let searchTerm = $(this).val();
		let expression = new RegExp(searchTerm, "i");
		$.getJSON("data.json", function(data) {
			$.each(data, function(key, value) {
				if (value.name.search(expression) != -1) {
					let listItem = `<li class='list-group-item'><a class="link" href="javascript:void(0);">${value.name}</a></li>`;
					$("#result").append(listItem);
				}
			});
			$(".link").click(function(e) {
				e.preventDefault();
				// console.log(e.target.text);
				$(this)
					.parents(".live-search")
					.find("input")
					.val(e.target.text);
				// console.log();
			});
		});
	});
});
