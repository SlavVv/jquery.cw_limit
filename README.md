jquery.cw_limit
===============

Little jQuery plugin for limiting the text inside input text field or a textarea.

Simple usage:

$('#element_id').cw_limit();

Advanced usage:

There is several available options for you:

animation
With this option you can set some simple animation for the little counter box that appears after the selected element. The default value is 'fade'. Other available values is 'shrink' and 'grow'.

animation_speed
This determine how long the animation will be in milliseconds. Default value is 600.

afterChange
Set a custom function to be called when the text is limited and animation is finished.

beforeChange
Set a custom function to be called just before the changing of the text.

counter_holder
With this you can select a holder for the limiter counter. The values of this option can be either a class or id of and container element. If there is not presented such holder, the plugin will create automatically a holder after the selected element.

counter_font_color
The color of the text representing the characters remaining. Default value is '#000000'.

counter_font_size
The font size of the text representing the characters remaining. Default value is '16px'.

custom_class
Custom class to be added for the created/used holder box.

custom_id
Custom id to be set for the created/used holder box.

max
Maximum number of allowed characters. Default is 200

text_before
Text to be added before the counter text. Default is 'There is'.

text_after
Text to be added after the counter text. Default is 'characters left'.


Feel free to add a comment or to give me some advices and ideas.
================================================================