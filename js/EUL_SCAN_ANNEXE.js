/*!
 * Created by Michael Antczak
 * Michael.Antczak@ed.ac.uk
 * The University of Edinburgh
 *
 * Date: 2016-04-13
 */

$(function() {

/*!
 *   First we need to set display to none for 
 */

if ($("#openRSRequest1")) {
    alert("Jest!");
	$("#openRSRequest1").css('background-color', 'pink');
}
 
jQuery.PRIMO.records.each(
        function(index){ 
		// the following gives the location of the item - which library, it doesnt 
		// exist for electronic
		// the trouble is to get to the iframe
            if (jQuery.PRIMO.records[index].getData().display.availlibrary) {
                $("#openRSRequest1").css('background-color', 'pink');
            } 
        }
      ); 
 
 /*!
 *   Comments
 *		 
 * 		$("form[name='requestTabForm']") 
 * 		$("form[name='requestTabForm']").find('iframe')
 * 			is initially an empty Array, 
 * 			Every time user clicks on "Find it in the Library" it fires an event
 * 			and it populates the Array with form objects
 * 
 * 		$("#openRSRequest1") is to access the request link
 */
 
});