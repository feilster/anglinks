## Additional CSS (style.css)
```
/* additional styles */

h6 {
	margin: 20px 0px 0px 0px;	
}

@media only screen and (max-width: 1300px) {
	#access a {
    	padding: 0 1.2em;
	}
}

@media only screen and (max-width: 1150px) {
	#site-title {
    	display: none;
	}
}

@media (max-width: 930px) {
	.cryout #nav-toggle {
		display: block;
	}
	#access {
		display: none;
	}
	#site-title {
    	display: inline;
	}
}

@media (max-width: 400px) {
	#site-title {
    	display: none;
	}
}
```

## Additional CSS (Appearance)
```
/* START: useful info */
.useful-info h6:after {
	content: 'Useful Info';
}
/* END: useful info */
/* START: rates */
.rates h6:before {
	content: 'Rates';
}
/* END: rates */
/* START: bottom tips */
.bottom-tips h6:after {
	content: 'Tips';
}
/* END: bottom tips */
/* START: bottom fish count */
.bottom-fish-count h6:before {
	content: 'Fish Count';
	margin-right: 0.5em;
}
/* END: bottom fish count */
/* START: bottom links */
.bottom-links a, .bottom-links span { 	
	margin: 0px 0px 0px 10px; 
	line-height: 1em;
} 
.bottom-links-other:before, .bottom-links-bookings:before, .bottom-links-sites:before {
	font-weight: bold;
	white-space: pre;
}
.bottom-links h6:after {
	content: 'Links';
}
.link-website:before, .link-facebook:before, .bottom-links-bookings a:before, .bottom-links-other a:before, .bottom-links-sites span:before {
	font-family: 'Font Awesome 5 Free';
  	font-weight: 900;
	margin: 0px 5px 0px 0px;
}
/* use this to indicate that no links were found */
.bottom-links-sites span:before { 	content: '\f057';
 	font-weight: 400;
	color: red;
} 
.bottom-links-sites span:after { 	
	content: 'nothing found';
} 
/* bottom links sites */
.bottom-links-sites:before {
	content: 'Sites & Social Media \A';
}
.link-website:before { 	
	content: '\f57c';
}
.link-website:after { 	
	content: 'Website';
}
.link-facebook:before { 	
	content: '\f082';
  font-family: 'Font Awesome 5 Brands';
}
.link-facebook:after { 	
	content: 'Facebook';
}
/* bottom links bookings */
.bottom-links-bookings:before {
	content: 'Book with \A';
}
.bottom-links-bookings a:before {
	content: '\f236';
}
.link-safarinow:after { 	
	content: url('http://www.anglinks.co.za/wp/wp-content/uploads/2018/07/safarinow-logo-small.png'); 	
} 
.link-booking:after { 	
	content: url('http://www.anglinks.co.za/wp/wp-content/uploads/2018/07/booking-com-logo-small.png'); 	
}  
.link-wheretostay:after { 	
	content: url('http://www.anglinks.co.za/wp/wp-content/uploads/2018/07/wheretostay-logo-small.png'); 	
}  
.link-airbnb:after { 	
	content: url('http://www.anglinks.co.za/wp/wp-content/uploads/2018/07/airbnb-logo-small.png'); 
}  
.link-lekkeslaap:after { 	
	content: url('http://www.anglinks.co.za/wp/wp-content/uploads/2018/12/lekkeslaap-logo-small.png'); 
}  
/* bottom links other */
.bottom-links-other:before {
	content: 'Other \A';
}
.bottom-links-other a:before {
	content: '\f0c1';
}
/* END: bottom links*/
/* START: bottom contact info*/
.bottom-contact-info h6:after {
	content: 'Contact Info';
}
.contact-phone:before, .contact-email:before {
	font-family: 'Font Awesome 5 Free';
  	font-weight: 900;
	margin: 0px 5px 0px 0px;
}
.contact-phone:before { 	
	content: '\f095';
	margin-left: 5px; 
}
.contact-email:before { 	
	content: '\f0e0';
	margin-left: 5px; 
}
/* END: bottom contact info*/
/* START: bottom location */
.bottom-location h6:after {
	content: 'Map \\ Exact location';
}
.bottom-location iframe { 	
	margin-left: 10px; 
}  
.link-location:after { 	
	content: url('http://www.anglinks.co.za/wp/wp-content/uploads/2018/06/gmap.png'); 	
	margin-left: 5px; 
}  
/* END: bottom location */
/* START: bottom nearby spots */
.bottom-nearby-spots h6:after {
	content: 'Similar Nearby Fishing Spots';
}
.bottom-nearby-spots a:before {
	font-family: 'Font Awesome 5 Free';
	content: '\f0c1';
  	font-weight: 900;
	margin: 0px 5px 0px 10px;
}
/* END: bottom nearby spots */
/* START: bottom video */
.bottom-video h6:after {
	content: 'Video';
}
.bottom-video iframe {
	margin: 5px 0px 0px 10px; 
}
/* END: bottom video */
/* START: pb table */
.table1, .table2 {     
	border-collapse: collapse; 
}  
.table1, .table2, .table1 th, .table2 th, .table1 td, .table2 td {     
	border: 1px solid #ddd; 
}  
.table1 th, .table2 th {     
	text-align: left; 
}  
.table2 td {     
	text-align: left; 
}  
.table1 tr:nth-child(even):hover { 	background-color: #eee; 
}  
.table1 tr:nth-child(odd):hover { 
	background-color: #eee; 
}  
.table1 tr:nth-child(even) { 	
	background-color: #efefef; 
}   
.table1 tr:nth-child(odd) {     
	border-bottom: 2px solid #ddd; 
}  
.table1 td:first-child {     
	font-weight: bold;     
	background-color: #FFF; 	
	border-bottom: 2px solid #ddd; 
}  
.table1 tr:nth-child(even) td:nth-child(2), .table1 tr:nth-child(even) td:nth-child(3) {     
	color: green; 
}  
.table1 tr:nth-child(odd) td:nth-child(2), .table1 tr:nth-child(odd) td:nth-child(3) {     
	color: red; 
}  
.table1 tr:nth-child(even) td:nth-child(2):after {     
	content: 'Linky'; 
}  
.table1 tr:nth-child(odd) td:nth-child(2):after {     
	content: 'Martin'; 
}  
.table1 th, .table2 th {     
	background-color: #189aab;     
	color: white; 
}
/* END: pb table */
.link-content { 	
	font-weight: bold; 
}  
.mt-1 {
	margin-top: 1em;
}
.mt-2 {
	margin-top: 2em;
}
.mt-5 {
	margin-top: 5em;
}
.nb {margin-top: 5px;}
.nb span {font-weight: bold;
	color: red;}
/* START: spots headers */
.chalets-only {color: #008000 !important;}
.chalets-only:after {content: 'Chalets \\ Houses Only';}
.chalets-camping {color: #ff00ff !important;}
.chalets-camping:after {content: 'Chalets & Camping';}
.camping-only {color: rgb(2,136,209) !important;}
.camping-only:after {content: 'Camping Only';}
.body-of-water {color: #e65100 !important;}
.body-of-water:before {content: 'Dams \\ Rivers \\ Lakes';}
.body-of-water span:after {display:block; content: '(click to see fishing spots)'; font-size: 0.8rem; color: #333; font-weight: normal;content: '(click to see fishing spots)'; text-transform: lowercase;}
.private-spot {color: #777 !important;}
.private-spot:after {content: 'Private \\ Clubs Only';}
.closed-spot {color: #AAA !important;}
.closed-spot:after {content: 'Closed';}
span.chalets-only, span.chalets-camping, span.camping-only, span.closed-spot, span.private-spot, span.body-of-water, a.visited-spot {
  font-weight: bold;	
}
a.unpaged-spot {color: #777 !important;}
a.unpaged-spot:hover {color: #44505B !important;}
/* END: spots headers */

/* START: add banner */
.add-banner .jumbotron {
	background-color: #189aab;
	color: white;
}
.add-banner i {
	font-size: 4em;
}
.add-banner .inner-banner {
	background-color: white;
	color: #189aab;
}
.add-banner .jumbotron h5 {
	font-size: 2em;
	color: white;
}
.add-banner .jumbotron h5:after {
	content: 'Have anything to add?';
}
/* END: add banner */
