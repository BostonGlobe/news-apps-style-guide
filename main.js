(function() {
	'use strict';
	var _pre = '<div class="example-code"><pre class="language-markup"><code></code></pre></div>';

	var init = function() {
		$('.example').each(function() {
			var $el = $(this);
			var $insert = $(_pre);
			
			var html = $el.html();

			// hack to reformat properly in prism without sacrificing html dev
			html = html.replace(/\n/g, '*n*');
			html = html.replace(/\s{4}/g, '*t*');
			html = html.replace(/\*n\*/g, '\n');
			html = html.replace(/(\*t\*){4}/g, '');
			html = html.replace(/\*t\*/g, '    ');
			html = html.trim();

			$insert.find('code').text(html);
			$insert.insertAfter($el);
		});
	};

	init();
})();