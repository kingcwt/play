var ls;
(function (ls) {
	ls.MainScene = function() {
		return {
			"%22greaterOrEqual%22": function() { return "greaterOrEqual" },
			"%22TF%22": function() { return "TF" },
			"sun.scores": function() { return sun.scores },
			"false": function() { return false },
			"emeny": function() { return emeny },
			"%22MainScene%22": function() { return "MainScene" },
			"true": function() { return true },
			"%22n%22": function() { return "n" },
			"plane.hp*20": function() { return plane.hp*20 },
			"bullet": function() { return bullet },
			"gameover.scale": function() { return gameover.scale },
			"%22scores%22": function() { return "scores" },
			"%22speed%22": function() { return "speed" },
			"2%2BMath.random()*3": function() { return 2+Math.random()*3 },
			"%22dir%22": function() { return "dir" },
			"ls.random()*360": function() { return ls.random()*360 },
			"plane.speed*plane.dir": function() { return plane.speed*plane.dir },
			"%22equalTo%22": function() { return "equalTo" },
			"enemyb": function() { return enemyb },
			"Sun_center": function() { return Sun_center },
			"gameover.scale%2B0.1": function() { return gameover.scale+0.1 },
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"%22hp%22": function() { return "hp" }
		}
	};
})(ls || (ls = {}));