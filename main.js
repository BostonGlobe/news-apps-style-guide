(function() {
	'use strict';
	var _pre = '<div class="example-code"><pre class="language-markup"><code></code></pre></div>';

	var init = function() {
		$('.example').each(function() {
			var $el = $(this);
			var $insert = $(_pre);
			
			var html = $el.html();
			$insert.find('code').text(html);
			$insert.insertAfter($el);
		});
	};

	init();
})();