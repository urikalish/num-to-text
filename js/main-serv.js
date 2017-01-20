angular.module('mainApp').factory('mainServ', function mainServ(words) {

	function __log(msg) {
    	console.log(msg);
  	}

  	function getWords() {
  		return words;
  	} 	

  	function getStats() {
		var i, j, wordList, stats, code;
		words = getWords();
		stats = [];
		for (i = 0; i < words.length; i++) {
			for (j = 0; j < words[i].length; j++) {
				code = words[i].charCodeAt(j);
				if (code >= 97 && code <= 122) {
					stats[code] = (stats[code]) ? stats[code] + 1 : 1;
				}
			}
		}
		return stats;
	}

	function getMatches(numberStr, map, fillers) {
		var i, matches, regExpStr, reg, words;
		words = getWords();
		regExpStr = '^[' + fillers + ']{0,3}';
		for (i = 0; i < numberStr.length; i++) {
			regExpStr += '(?:' + map[parseInt(numberStr[i])].options + ')[' + fillers + ']{0,3}';
		}
		regExpStr += '$';
		reg = new RegExp(regExpStr, 'ig');		
		matches = [];
		for (i = 0; i < words.length; i++) {
			if (reg.test(words[i])) {
				matches.push(words[i]);
			}
		}
		return matches;	
	}

	function getItems(numberStr, map, fillers) {
		var i, j, items, m1;
		items = [];
		if (numberStr) {
			m1 = getMatches(numberStr, map, fillers);
			for (i = 0; i < m1.length; i++) {
				items.push(m1[i]);
			}
		}
		return items;
	}

  	return {
    	__log: __log,
    	getWords: getWords,
    	getStats: getStats,    	
    	getItems: getItems   
  	}

});

