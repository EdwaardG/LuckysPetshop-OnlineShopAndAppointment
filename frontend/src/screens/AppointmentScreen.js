import React from 'react';
import { Link } from 'react-router-dom';
import  '../styles/AppointmentScreen.css';

export default function AppointmentScreen(){
return(
<div>
<div className="container">
<div className="container-time">
<img src="./images/LuckysPetshopLogoAppointment.png" alt=""/>
<h2 className="heading">Lucky's Petshop</h2>
<h3>Grooming Services</h3>
<h3>Operation Hours</h3>
<h3 className="heading-days">WEEK DAYS</h3>
<p>10am - 6pm</p>

<h3 className="heading-days">WEEK ENDS</h3>
<p>10am - 6pm</p>

<h4 className="heading-phone">Call Us:</h4>
</div>

<div className="container-form">
<form action="#">
<h2 className="heading">Book Appointment</h2>

<div className="form-field">
<p>Pet Owner Name</p>  
<input className="form-field"></input>
</div><br/>
<div className="form-field">
<p>Pet Name</p>
<input className="form-field"></input>
</div><br/>
<div className="form-field">
<p>Date</p>
<input className="form-field" type="date" id="date" name="date"></input>
</div><br/>
<div className="form-field">
<p>Time</p>
<input className="form-field" type="time" id="time" name="time"></input>
</div><br/>
<div className="form-field">
<p>Type of Pet?</p>
<select className="form-field" name="select" id="#">
<option className="1">Dog</option>
<option className="2">Cat</option>
</select>
</div><br/>
<div className="form-field">
<p>Type of Service?</p>
<select className="form-field" name="select" id="#">
<option value="1">Dog Groom</option>
<option value="2">Dog Spa</option>
<option value="2">Dog Bath</option>
</select>
</div><br/>
<button className="btnBook">Book</button>
</form>
</div>
</div>

<div className="container">

<div className="container-time">
<img src="./images/DogGroom.png" alt=""/>
<h1 className="heading-details">DOG FULL GROOM</h1>
<h5>Our full dog groom includes a gentle bath and a complete haircut from nose to tail.</h5>
<p>• Double Shampoo</p>
<p>• Wash & Blow Dry</p>
<p>• 15-mins or more for brushing.</p>
<p>• Full body haircut of your choice for your pet buddy.</p>
<p>• and more.</p>
<Link to="dogfullgroomdetails">
<button className="btnViewDetails">VIEW MORE DETAILS</button></Link>
</div>

<div className="container-time">
<img src="./images/DogSpa.png" alt=""/>
<h2 className="heading-details">DOG SPA BATH</h2>
<h5>The perfect bathing package to make your dog buddy happy, fresh, and healthy.</h5>
<p>Double Shampoo</p>
<p>• Wash & Blow Dry</p>
<p>• 15-mins or more for brushing.</p>
<p>• Hand Dry</p>
<p>• Sanitary Trim</p>
<p>• Trim around Eyes</p>
<p>• and more.</p>
<Link to="dogspabathdetails">
<button className="btnViewDetails">VIEW MORE DETAILS</button></Link>
</div>

<div className="container-time">
<img src="./images/DogBath.png" alt=""/>
<h1 className="heading-details">DOG BATH</h1>
<h5>The perfect bathing package to make your dog buddy happy, fresh, and healthy.</h5>
<p>• Double Shampoo</p>
<p>• Wash & Blow Dry</p>
<p>• 15-mins or more for brushing.</p>
<p>• and more.</p>
<Link to="dogbathdetails">
<button className="btnViewDetails">VIEW MORE DETAILS</button></Link>
</div>

</div>

</div>

)
}