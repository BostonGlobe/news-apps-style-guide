(function() {
	'use strict';
	var _pre = '<div class="example-code"><pre class="language-markup"><code></code></pre></div>';

	var init = function() {
		$('.example').each(createCode);
	};

	var createCode = function() {
		var $el = $(this);
		var $insert = $(_pre);
		
		var raw = $el.html();
		var clean = cleanHTML(raw);

		$insert.find('code').text(clean);
		$insert.insertAfter($el);
	}

	var cleanHTML = function(html) {
		var output = '';

		html = html.trim();

		// "save" newlines
		html = html.replace(/\n/g, '_newline_');
		
		// replace ALL whitespace with filler
		html = html.replace(/\s{4}/g, '_tab_');

		var lines = html.split('_newline_');

		// calculate how many tabs there are at the minimum
		var indent = getMinIndent(lines);
		
		// only replace the minimum number of tabs with nothing (to left align)
		var pattern = new RegExp('(_tab_){' + indent + '}', '');

		// replace min indent in each line

		for(var i in lines) {
			lines[i] = lines[i].replace(pattern, '');
			output += '\n' + lines[i];
		}

		// NOW, replace the remaining tabs with actual 4 spaces each
		output = output.replace(/_tab_/g, '    ');

		return output;
	};

	var getMinIndent = function(lines) {
		var indent = 9999;

		for (var i in lines) {
			var line = lines[i];
			var tabs = line.match(/_tab_/g);
			if(tabs) {
				indent = Math.min(indent, tabs.length);
			}
		}

		return indent;
	}

	init();
})();