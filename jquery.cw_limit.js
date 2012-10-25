(function($){
	var my_holder;
	var methods = {
		init : function( options ) {
			return this.each(function(){
				var element_tag = ($(this)[0].tagName).toLowerCase();
				if(element_tag == 'input') {
					var element_type = ($(this).attr('type')).toLowerCase();
					if($(this).attr('type') != 'text') {
						$(this).after('<span>The selected element can\'t be limited !</span>');
						return;
					}
				} else if(element_tag != 'textarea') {
					$(this).after('<span>The selected element can\'t be limited !</span>');
					return;
				}
				
				var holder;
				var settings = $.extend({
					'animation' 			: 'fade',
					'animation_speed' 		: 600,
					'afterChange' 			: function(){return;},
					'beforeChange' 			: function(){return;},
					'counter_holder' 		: false,
					'counter_font_color'	: '#000000',
					'counter_font_size'		: '16px',
					'custom_class' 			: '',
					'custom_id' 			: '',
					'max' 					: 200,
					'text_before' 			: 'There is',
					'text_after' 			: 'characters left'
			    }, options);
			    
				var val = $(this).attr('value');
				var cur = 0;
				if(val) {
					cur = val.length;
				}
				
				var left = settings.max-cur;
				
		        if(!settings.counter_holder) {
		        	$(this).after('<span class="cw_counter">'+ settings.text_before + ' <strong>' + left.toString() + '</strong> ' + settings.text_after + '</span>');
		        	holder = $(this).next('.cw_counter');
		        } else {
		        	holder = $(settings.counter_holder);
		        	holder.empty();
		        	holder.append(settings.text_before + ' <strong>' + left.toString() + '</strong> ' + settings.text_after);
		        }
		        
		        if(typeof settings.custom_class !== 'undefined' && settings.custom_class != '') {
		        	holder.addClass(settings.custom_class);
		        }
		        
		        if(typeof settings.custom_id !== 'undefined' && settings.custom_id != '') {
		        	holder.attr('id', ''+settings.custom_id);
		        }
		        
		        var holder_counter = holder.children('strong:first');
		        
		        $(this).data('holder', holder);
		        $(this).data('holder_counter', holder_counter);
		        
		        holder_counter.css('color', settings.counter_font_color);
		        holder_counter.css('font-size', settings.counter_font_size);
		        
		        $(this).keyup(function(event) {
		        	var element = $(this);
		            var max = settings.max;
		            var val = $(this).val();
		            var cur = 0;
		            if(val) {
		            	cur = val.length;
		            }
		            var left = max-cur;
		            
		            var change_text = function(instant){
		            	if(instant == 1) {
			            	if(left >= 0 ) {
				            	holder_counter.text(left.toString());
				            } else {
				            	element.val(element.val().substring(0,settings.max));
				            }
		            	} else {
		            		element.val(element.val().substring(0,settings.max));
		            	}
		            }
		            
		            change_text(0);
		            
		            holder_counter.stop(true).css('opacity', 1);
		            holder_counter.stop(true).css('font-size', settings.counter_font_size);
		            
		            settings.beforeChange();
		            
		            switch(settings.animation) {
		            	case 'fade':
				            holder_counter.animate({
				            	'opacity' : 0
				            }, settings.animation_speed/2, function(){
				            	change_text(1);
				            });
				            
				            holder_counter.animate({
				            	'opacity' : 1
				            }, settings.animation_speed/2);
			            break;
			            
			            case 'shrink':
				            holder_counter.animate({
				            	'font-size' : 0
				            }, settings.animation_speed/2, function(){
				            	change_text(1);
				            });
				            
				            holder_counter.animate({
				            	'font-size' : settings.counter_font_size
				            }, settings.animation_speed/2);
			            break;
			            
			            case 'grow':
				            holder_counter.animate({
				            	'font-size' : parseInt(settings.counter_font_size)*2 + 'px'
				            }, settings.animation_speed/2, function(){
				            	change_text(1);
				            });
				            
				            holder_counter.animate({
				            	'font-size' : settings.counter_font_size
				            }, settings.animation_speed/2);
			            break;
		            }
		            
		            settings.afterChange();
		            return this;
		        });
		        
		        $(this).data('status', 1);
			});
		},
		show : function( ) {
			$(this).data('holder').show();
		},
		hide : function( ) {
			$(this).data('holder').hide();
		},
		destroy : function( ) {
			return this.each(function(){
				$(window).unbind('.cw_counter');
				$(this).data('holder').remove();
				$(this).removeData('holder');
				$(this).removeData('holder_counter');
				$(this).removeData('status');
			});
		}
	};
  
	$.fn.cw_limit = function( method ) {
		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			if( typeof $(this).data('status') === 'undefined' ) {
				return methods.init.apply( this, arguments );
			}
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.cw_limit' );
		}
	};
})(jQuery);