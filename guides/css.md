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
<h6>Links</h6>
<div class="row bottom-links">
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

```

## Additional CSS
```
.bottom-links a, .bottom-links span { 	
	margin: 0px 0px 0px 10px; 
	line-height: 1em;
} 

/* use this to indicate that no links were found */
.bottom-links span:before { 	
	content: '\f057';
	font-family: 'Font Awesome 5 Free';
  	font-weight: 400;
	color: red;
	margin: 0px 5px 0px 0px;
} 
.bottom-links span:after { 	
	content: 'nothing found';
} 

/**/
.bottom-links-other:before, .bottom-links-bookings:before, .bottom-links-sites:before {
	font-weight: bold;
	white-space: pre;
}
.link-website:before, .link-facebook:before, .bottom-links-bookings a:before, .bottom-links-other a:before, .contact-phone:before, .contact-email:before {
	  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
	margin: 0px 5px 0px 0px;
}

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

.bottom-links-bookings:before {
	content: 'Book with \A';
}
.bottom-links-bookings a:before {
	content: '\f236';
}
.link-safarinow:after { 	content: url('http://www.anglinks.co.za/wp/wp-content/uploads/2018/07/safarinow-logo-small.png'); 	
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

.bottom-links-other:before {
	content: 'Other \A';
}
.bottom-links-other a:before {
	content: '\f0c1';
}


.link-content { 	
	font-weight: bold; 
}  

.link-location:after { 	
	content: url('http://www.anglinks.co.za/wp/wp-content/uploads/2018/06/gmap.png'); 	
	margin-left: 10px; 
}  


.bottom-extras { 	
} 
.contact-heading:after {
	content: 'Contact Info'
}
.contact-phone:before { 	
	content: '\f095';
}
.contact-email:before { 	
	content: '\f0e0';
}



.table1, .table2 {     border-collapse: collapse; }  .table1, .table2, .table1 th, .table2 th, .table1 td, .table2 td {     border: 1px solid #ddd; }  .table1 th, .table2 th {     text-align: left; }  .table2 td {     text-align: left; }  .table1 tr:nth-child(even):hover { 	background-color: #eee; }  .table1 tr:nth-child(odd):hover { 	background-color: #eee; }  .table1 tr:nth-child(even) { 	background-color: #efefef; }   .table1 tr:nth-child(odd) {     border-bottom: 2px solid #ddd; }  .table1 td:first-child {     font-weight: bold;     background-color: #FFF; 	border-bottom: 2px solid #ddd; }  .table1 tr:nth-child(even) td:nth-child(2), .table1 tr:nth-child(even) td:nth-child(3) {     color: green; }  .table1 tr:nth-child(odd) td:nth-child(2), .table1 tr:nth-child(odd) td:nth-child(3) {     color: red; }  .table1 tr:nth-child(even) td:nth-child(2):after {     content: 'Linky'; }  .table1 tr:nth-child(odd) td:nth-child(2):after {     content: 'Martin'; }  .table1 th, .table2 th {     background-color: #189aab;     color: white; }

.nb {
	margin-top: 5px;	
}

.nb span {
	font-weight: bold;
	color: red;
}

.visited-spot {
	color: #008000 !important;
}
.visited-spot:after {
	content: 'visited'
}

.future-spot {
	color: #ff00ff !important;
}
.future-spot:after {
	content: 'future'
}

span.future-spot, span.visited-spot {
  font-weight: bold;	
}


```
