import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/AppointmentScreen.css';

export default function AppointmentScreen(){
return(
<div>
<div class="container">
<div class="container-time">
<img src="./images/LuckysPetshopLogoAppointment.png" alt=""/>
<h2 class="heading">Lucky's Petshop</h2>
<h3>Grooming Services</h3>
<h3>Operation Hours</h3>
<h3 class="heading-days">WEEK DAYS</h3>
<p>10am - 6pm</p>

<h3 class="heading-days">WEEK ENDS</h3>
<p>10am - 6pm</p>

<h4 class="heading-phone">Call Us:</h4>
</div>

<div class="container-form">
<form action="#">
<h2 class="heading">Book Appointment</h2>

<div class="form-field">
<p>Pet Owner Name</p>  
<input class="form-field"></input>
</div><br/>
<div class="form-field">
<p>Pet Name</p>
<input class="form-field"></input>
</div><br/>
<div class="form-field">
<p>Date</p>
<input class="form-field" type="date" id="date" name="date"></input>
</div><br/>
<div class="form-field">
<p>Time</p>
<input class="form-field" type="time" id="time" name="time"></input>
</div><br/>
<div class="form-field">
<p>Type of Pet?</p>
<select class="form-field" name="select" id="#">
<option value="1">Dog</option>
<option value="2">Cat</option>
</select>
</div><br/>
<div class="form-field">
<p>Type of Service?</p>
<select class="form-field" name="select" id="#">
<option value="1">Dog Groom</option>
<option value="2">Dog Spa</option>
<option value="2">Dog Bath</option>
</select>
</div><br/>
<button class="btnBook">Book</button>
</form>
</div>
</div>

<div class="container">

<div class="container-time">
<img src="./images/DogGroom.png" alt=""/>
<h1 class="heading-details">DOG FULL GROOM</h1>
<h5>Our full dog groom includes a gentle bath and a complete haircut from nose to tail.</h5>
<p>• Double Shampoo</p>
<p>• Wash & Blow Dry</p>
<p>• 15-mins or more for brushing.</p>
<p>• Full body haircut of your choice for your pet buddy.</p>
<p>• and more.</p>
<Link to="dogfullgroomdetails">
<button class="btnViewDetails">VIEW MORE DETAILS</button></Link>
</div>

<div class="container-time">
<img src="./images/DogSpa.png" alt=""/>
<h2 class="heading-details">DOG SPA BATH</h2>
<h5>The perfect bathing package to make your dog buddy happy, fresh, and healthy.</h5>
<p>Double Shampoo</p>
<p>• Wash & Blow Dry</p>
<p>• 15-mins or more for brushing.</p>
<p>• Hand Dry</p>
<p>• Sanitary Trim</p>
<p>• Trim around Eyes</p>
<p>• and more.</p>
<Link to="dogspabathdetails">
<button class="btnViewDetails">VIEW MORE DETAILS</button></Link>
</div>

<div class="container-time">
<img src="./images/DogBath.png" alt=""/>
<h1 class="heading-details">DOG BATH</h1>
<h5>The perfect bathing package to make your dog buddy happy, fresh, and healthy.</h5>
<p>• Double Shampoo</p>
<p>• Wash & Blow Dry</p>
<p>• 15-mins or more for brushing.</p>
<p>• and more.</p>
<Link to="dogbathdetails">
<button class="btnViewDetails">VIEW MORE DETAILS</button></Link>
</div>

</div>

</div>

)
}