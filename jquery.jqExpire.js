/*
*
* jqExpire 0.1.2-alpha
* https://github.com/aalaap/jqExpire
* 
* by Aalaap Ghag
* http://aalaap.com
*
* A jQuery plugin to automatically hide page elements after an 'expiry' date
* and/or time. Great for pages which have upcoming/ongoing event notices or 
* cut-off times for forms and such.
*
* jqExpire has been released under the Do What the Fuck You Want to Public
* License, so you really can do whatever the fuck you want with it.
*
*/

(function( $ ) {

	$.fn.jqExpire = function( parameter ) {

		var expiryDate;
		var rightNow = new Date().getTime();
		
		// if parameter is empty, look for data-expire attributes
				
		if ( arguments.length == 0 ) {
			$( "*[data-expire]" ).each( function() {
				expiryDate = new Date( $( this ).data( 'expire' ) ).getTime();
				
				if ( expiryDate < rightNow ) {
					$( this ).hide();
				}
			});
		} 
				
		// if parameter type is an array, then loop through it individually
		
		else if (typeof parameter == 'array') {
			console.log("This feature is yet to be implemented!")
		}
		
		// if parameter type appears to be a date/time stamp, check that
		// against each matched element.

		else if (typeof parameter == 'string') {
						
			expiryDate = new Date( parameter ).getTime();
						
			if (expiryDate < rightNow) {
				this.each( function() {
					$( this ).hide();
				} );	
			}
		}

	};

}( jQuery ));