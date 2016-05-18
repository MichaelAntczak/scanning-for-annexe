/*!
 * Created by Michael Antczak
 * Michael.Antczak@ed.ac.uk
 * The University of Edinburgh
 *
 * Date: 2016-04-13
 */
 
$(function() {
	
	// find all rows with class=EXLResultMediaTYPEbook OR class=EXLResultMediaTYPEjournal
	var result_rows = $('.EXLResultMediaTYPEbook,.EXLResultMediaTYPEjournal');
	
	// iterate over the result rows and find those from the Annexe
	result_rows.each(function(index) {
		
		console.log('*** NUMBER *** ' + index);
		
		// holds one result DOM subtree
		var $this = $(this);
		console.log($this);
		
		// holds the location library from the availability line
		var $library = $this.find('.EXLAvailabilityLibraryName');
		library = $.trim($library.text());
		console.log('The library number ' + index + ' is ' + library);
		
		// var for attaching click event 
		var FindIt = $this.find('.EXLRequestTab ');
		console.log( FindIt );
		
		// var for link location
		var $linkLocation = $this.find('.EXLTabHeaderContent');
		console.log( $linkLocation );
		
		// logic for the holding location 
		if (library == "Library Annexe") {
			
			// attach a click event
			$( FindIt ).one( "click", function() {
				
				setTimeout( function() {
				
					$this.find('.EXLTabHeaderContent').append('<em class="EUL_SCAN_LANN"><a href="https://ed-ac.illiad.oclc.org/illiad/logon.html" target="blank">MY Request SCAN from Annexe</a></em>');
					$library.css({ "background-color": "grey", "border-left": "5px solid red" });
					
				}, 1300);
				
				console.log( $.trim( $( FindIt ).text() ) );
				console.log('Just did it.');
			  
			});  // end of click function
		} // end of if
	}); // end of each iteration
}); // end of function