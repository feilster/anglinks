## General
* use **nb** to add red color and bold to phrases, eg.
```
<p class="nb"><span>2018-02-02 - Update:</span> ... </p>
```
* use **visited-spot** and **future-spot** to text to align with map colours, eg.
```
// in text or sentence
<span class="visited-spot"></span>
<span class="future-spot"></span>
// headings
<h5 class="visited-spot"></h5>
<h5 class="future-spot"></h5>
```

## Bottom links
### Rules
* always show **sites** heading at least
* remove divs if no **booking** or **other**
### Images
* height: always 17px
* name: `<site>`-17.png
* in wp name\caption: `<site>` logo small

### Complete example
```
<div class="bottom-links">
<h6></h6>
<div class="row">
<div class="col col-md-4 bottom-links-sites">
<a class="link-website" href="" target="_blank" rel="noopener"></a>
<a class="link-facebook" href="" target="_blank" rel="noopener"></a>
</div>
<div class="col col-md-4 bottom-links-bookings">
<a class="link-safarinow" href="?source=9331" target="_blank" rel="noopener"></a>
<a class="link-booking" href="?aid=1456833" target="_blank" rel="noopener"></a>
<a class="link-airbnb" href="" target="_blank" rel="noopener"></a>
<a class="link-wheretostay" href="" target="_blank" rel="noopener"></a>
</div>
<div class="col col-md-4 bottom-links-other">
<a href="" target="_blank" rel="noopener">name</a>
</div>
</div>
</div>

```
### If no links exist
```
<h6 class="links-heading"></h6>
<div class="row bottom-links">
<div class="col col-md-4 bottom-links-sites">
<span></span>
</div>
</div>

```

## Additional CSS
```
/* Full width button on the homepage */
.full-btn.elementor-widget-button .elementor-button { width: 100%; }

/* Newsletter form button */
.oew-newsletter-form-wrap .button { padding: 0 20px; }

/* Footer */
body #footer-widgets { text-align: center; }
body #footer-widgets .ocean-newsletter-form { margin: 0 0 26px; }
body #footer-widgets .ocean-newsletter-form-wrap input[type="email"] { color: #7c7c7c; border-width: 2px; border-color: rgba(255,255,255,0.2); font-size: 15px; letter-spacing: 0.8px; }
body #footer-widgets .ocean-newsletter-form-wrap input[type="email"]:hover { border-color: rgba(255,255,255,0.5); }
body #footer-widgets .ocean-newsletter-form-wrap input[type="email"]:focus { border-color: rgba(255,255,255,0.6); }
body #footer-widgets .ocean-newsletter-form-wrap button:hover { background-color: #5c7c19; }
body #footer-widgets .social-widget li a { color: #4a4a4a; font-size: 20px; line-height: 1; padding: 0.5em; }
body #footer-widgets .social-widget li a:hover { color: #8cba29; }

/* Scroll top button */
#scroll-top { right: 30px; bottom: 0; width: 48px; height: 35px; line-height: 35px; font-size: 22px; border-radius: 4px 4px 0 0; }

/* Footer newsletter form on responsive */
@media only screen and (max-width: 320px) {
    #scroll-top { display: none !important; }
}


/*------------------------------------*
	Additional styles
*------------------------------------*/

h5, h6 {
	color: #444 !important;
}
h5 {
	margin: 20px 0px 15px 0px;	
	font-size: 22px;
}
h6 {
	margin: 20px 0px 5px 0px;	
	font-size: 19px;
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

/* Additional CSS (Appearance) */
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
.bottom-fish-count p {
	margin-left: 10px;
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
.link-content {font-weight: bold;}  
.mt-1 {margin-top: 1em;}
.mt-2 {margin-top: 2em;}
.mt-5 {margin-top: 5em;}
.nb {margin-top: 5px;}
.nb span {font-weight: bold;
	color: red;}

/* START: spots */
.spots {padding: 0px;}
.spots h5 {margin-bottom: 0.1rem;}
.spots ul {margin-top: 0.1rem;}
.chalets-only {color: #008000 !important;}
.chalets-only:after {content: 'Chalets \\ Houses Only';}
.chalets-camping {color: #ff00ff !important;}
.chalets-camping:after {content: 'Chalets & Camping';}
.camping-only {color: rgb(2,136,209) !important;}
.camping-only:after {content: 'Camping Only';}
.body-of-water {color: #e65100 !important;}
.body-of-water:before {content: 'Dams \\ Rivers \\ Lakes';}
.body-of-water span:after {display:block;font-size: 12px; color: #777; font-weight: normal;content: '(click to see fishing spots or more info)'; text-transform: lowercase;}
.private-spot {color: #777 !important;}
.private-spot:after {content: 'Private \\ Clubs \\ Other';}
.day-trips-only {color: #c2185c !important;}
.day-trips-only:after {content: 'Day Trips Only';}
.closed-spot {color: #AAA !important;}
.closed-spot:after {content: 'Closed';}
.dam-info:after {content: 'Additional Info'; color: DarkTurquoise !important;}
a.unpaged-spot {color: #777 !important;}
a.unpaged-spot:hover {color: #44505B !important;}
span.dam-blurb-top:before {content:'Here’s a map of all the fishing spots we’ve discovered at ';}
span.dam-blurb-top:after {content:' including some additional info.';}
span.prov-blurb-top:before {content:'Here’s a map of all the fishing spots we’ve discovered in ';}
span.prov-blurb-top:after {content:' including some additional info.';}
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
	color: white !important;
	margin: 1rem;
}
.add-banner .jumbotron h5:after {
	content: 'Have anything to add?';
}
/* END: add banner */

/* extra styling to get ocean wp menu to work with bootstrap*/
#site-navigation-wrap .dropdown-menu {
    position: relative;
    top: auto;
    display: block;
    border: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
}
#footer-widgets .footer-box {
	min-width: 33%;
}
#related-posts .span_1_of_3 {
    min-width: 33.3333333333%;
}
.parallax {
  height: 350px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.7;
  transition: opacity 1s;
}
.parallax:hover {
    opacity: 1;
}

#searchform-dropdown input {color: #0f8189 !important;}
/*------------------------------------*
	END: Additional styles
*------------------------------------*/
```
