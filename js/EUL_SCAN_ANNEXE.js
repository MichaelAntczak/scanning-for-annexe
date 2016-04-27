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
 *  attach onclick event to "li.EXLRequestTab" 
 * 	if item NOT in the Annexe -> return
 * 	else {	create a SCAN link poiting to the Illiad site		}
 */

 
 // attach the click event to ALL "li.EXLRequestTab"
 $('li.EXLRequestTab').click(function(){
    console.log("!!!!!!!!!!!!!! Doesn't work either");
});
 
 // once clicked - check if the item is in the Annexe
 // maybe would have to test if the click is on closed or opened tab ??
 
 // if NOT -> return
 
 // else create the link to the Illiad logon page
 
 
 /*
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