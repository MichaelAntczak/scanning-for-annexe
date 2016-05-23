<h1>Scanning request for Library Annexe</h1> 

Additional functionality for Primo/DiscoverEd for the University of Edinburgh. Display "Request Scanning" only when relevant. The script is currently attached to the sandox view here: 

    http://ed-primo-sb.hosted.exlibrisgroup.com/primo_library/libweb/action/search.do?vid=SCAN_ANNEXE

You can also check the PNG in the main folder "service view.png"

<h2>What does it do?</h2> 

So far if you want to place a request link it is all or nothing. We wanted to place a link for scanning requests only for our storage library and not for items from other sites. The solution we present here is a short JavaScript file that tests the availability library and attaches a link based on this. 

<h2>How does it do it?</h2> 

1. Create a new view in the sandbox for testing (copy of the main view): 

    http://ed-primo-sb.hosted.exlibrisgroup.com/primo_library/libweb/action/search.do?vid=SCAN_ANNEXE

2. get a copy of the footer and add a JS hook for a file called EUL_SCAN_ANNEXE.js

3. add new footer HTML (footer-HF-SA.html) to both pages: Brief Display and Full Display (make sure to change the tile locations!)

4. add footer location to the Static HTML

5. deploy

<h2>Any questions?</h2>

Contact: Michael.Antczak@ed.ac.uk
