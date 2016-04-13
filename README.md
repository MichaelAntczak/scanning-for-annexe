# scanning-for-annexe
Additional functionality for Primo/DiscoverEd. Display "Request Scanning" only when relevant. 

1. Created a new view in the sandbox for testing (copy of the main view): 
http://ed-primo-sb.hosted.exlibrisgroup.com/primo_library/libweb/action/search.do?vid=SCAN_ANNEXE

2. get a copy of the footer and add a JS hook for a file called EUL_SCAN_ANNEXE.js

3. add new footer HTML (footer-HF-SA.html) to both pages: Brief Display and Full Display (make sure to change the tile locations!)

4. add footer location to the Static HTML
