angular.module('mainApp').factory('mainServ', function mainServ(words) {

	function __log(msg) {
    	console.log(msg);
  	}

  	function getWordList() {
  		return words;
  	}

  	function getStats() {
		var i, j, wordList, stats, code;
		wordList = getWordList();
		stats = [];
		for (i = 0; i < wordList.length; i++) {
			for (j = 0; j < wordList[i].length; j++) {
				code = wordList[i].charCodeAt(j);
				if (code >= 97 && code <= 122) {
					stats[code] = (stats[code]) ? stats[code] + 1 : 1;
				}
			}
		}
		return stats;
	}

  	return {
    	__log: __log,
    	getStats: getStats    
  	}

});

