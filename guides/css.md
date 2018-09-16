## General
* use **nb** to add red color and bold to phrases, eg.
```
<p class="nb"><span>2018-02-02 - Update:</span> ... </p>
```
* use **visited-spot** and **future-spot** to text to align with map colours, eg.
```
<span class="future-spot">future</span>
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
<a class="link-website" href="http://beaconvlei.co.za/" target="_blank" rel="noopener"></a>
</div>
<div class="col col-md-4 bottom-links-bookings">
<a class="link-safarinow" href="https://www.safarinow.com/go/beaconvleiguestfarm/?source=9331" target="_blank" rel="noopener"></a>
<a class="link-booking" href="https://www.booking.com/hotel/za/beacon-vlei-guest-farm.en-gb.html?aid=1456833" target="_blank" rel="noopener"></a>
</div>
<div class="col col-md-4 bottom-links-other">
<a href="http://nottsbrewery.co.za/" target="_blank" rel="noopener">Nottingham Road Brewery</a>
<a href="https://www.rawdons.co.za/" target="_blank" rel="noopener">Rawdons</a>
</div>
</div>

```

### Additional CSS
```
.bottom-links a, .bottom-links span { 	
	margin: 0px 0px 0px 10px; 
	line-height: 1em;
} 

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

.bottom-links-other:before, .bottom-links-bookings:before, .bottom-links-sites:before {
	font-weight: bold;
	white-space: pre;
}
.link-website:before, .link-facebook:before, .bottom-links-bookings a:before, .bottom-links-other a:before {
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

.table1, .table2 {     border-collapse: collapse; }  .table1, .table2, .table1 th, .table2 th, .table1 td, .table2 td {     border: 1px solid #ddd; }  .table1 th, .table2 th {     text-align: left; }  .table2 td {     text-align: left; }  .table1 tr:nth-child(even):hover { 	background-color: #eee; }  .table1 tr:nth-child(odd):hover { 	background-color: #eee; }  .table1 tr:nth-child(even) { 	background-color: #efefef; }   .table1 tr:nth-child(odd) {     border-bottom: 2px solid #ddd; }  .table1 td:first-child {     font-weight: bold;     background-color: #FFF; 	border-bottom: 2px solid #ddd; }  .table1 tr:nth-child(even) td:nth-child(2), .table1 tr:nth-child(even) td:nth-child(3) {     color: green; }  .table1 tr:nth-child(odd) td:nth-child(2), .table1 tr:nth-child(odd) td:nth-child(3) {     color: red; }  .table1 tr:nth-child(even) td:nth-child(2):after {     content: 'Linky'; }  .table1 tr:nth-child(odd) td:nth-child(2):after {     content: 'Martin'; }  .table1 th, .table2 th {     background-color: #189aab;     color: white; }

.nb {
	margin-top: 5px;	
}

.nb span {
	font-weight: bold;
	color: red;
}

.visited-spot {
	color: #008000;
}

.future-spot {
	color: #ff00ff;
}


```
