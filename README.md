jquery.cw_limit
===============

Little jQuery plugin for limiting the text inside input text field or a textarea.

###Simple usage

```javascript
// bind the limiter to textarea or input type text
$('#element_id').cw_limit();
```

##Available options/settings:

* animation - With this option you can set some simple animation for the little counter box that appears after the selected element. Available values:
	* 'fade' ```default```
	* 'shrink'
	* 'grow'

* animation_speed - This determine how long the animation will be in milliseconds.
	```
	animation_speed: 600 // default
	```

* afterChange - Set a custom function to be called when the text is limited and animation is finished.

* beforeChange - Set a custom function to be called just before the changing of the text.

* counter_holder - You can select a holder for the limiter counter. The values of this option can be either a class or id of an container element. If there is not presented such holder, the plugin will create automatically a holder after the selected element.

* counter_font_color - The color of the text representing the characters remaining.
	```
	counter_font_color: '#BB2222' // default
	```

* counter_font_size - The font size of the text representing the characters remaining.
	```
	counter_font_size: '16px' // default
	```

* custom_class - Custom class to be added for the created/used holder box.

* max - Maximum number of allowed characters.
	```
	max: 200 // default
	```

* text_before - Text to be added before the counter text.
	```
	text_before: 'There is' // default
	```

* text_after - Text to be added after the counter text.
	```
	text_after: 'characters left' // default
	```
	
##Available methods:

* show - This will show the counter holder using the default functionality provided by jQuery
	```javascirpt
	$('#element_id').cw_limit('show');
	```
	
* hide - This will hide the counter holder using the default functionality provided by jQuery
	```javascirpt
	$('#element_id').cw_limit('hide');
	```

* destroy - This will destroy the instanse for the selected element
	```javascirpt
	$('#element_id').cw_limit('destroy');
	```


##Everything in one place
```javascript
$('#textarea_field').cw_limit({
	'animation'				: 'fade',
	'animation_speed'		: 400,
	'afterChange'			: function(){return;},
	'beforeChange'			: function(){return;},
	'counter_holder'		: '#my_holder',
	'counter_font_color'	: '#FF8822',
	'counter_font_size'		: '18px',
	'custom_class'			: 'my_custom_class',
	'max'					: 200,
	'text_before'			: 'Here it is',
	'text_after'			: 'characters left'
});
```

##Feel free to add a comment or to give me some advices and ideas.
