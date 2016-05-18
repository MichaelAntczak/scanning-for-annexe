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

		// holds one result DOM subtree
		var $this = $(this);
		
		// holds the location library from the availability line
		var $library = $this.find('.EXLAvailabilityLibraryName');
		library = $.trim($library.text());
		
		// var for attaching one time click event 
		var FindIt = $this.find('.EXLRequestTab ');
		
		// var for link location
		var $linkLocation = $this.find('.EXLTabHeaderContent');
		
		// logic for the holding location, if ANNEXE then carry on
		if (library == "Library Annexe") {
			
			// attach a click event
			$( FindIt ).one( "click", function() {
				
				setTimeout( function() {
				
					$this.find('.EXLTabHeaderContent').append('<em class="EUL_SCAN_LANN"><a href="https://ed-ac.illiad.oclc.org/illiad/logon.html" target="blank">REQUEST SCAN</a></em>');
					
				}, 1300);
			  
			});  // end of click function
		} // end of if
	}); // end of each iteration
}); // end of function