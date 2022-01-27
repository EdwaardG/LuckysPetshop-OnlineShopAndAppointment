import React from 'react';
import { Link } from 'react-router-dom';

export default function DogGroomDetailsScreen(){
return(
   <div>
    <div class="container">
<div class="container-details">
<img src="./images/LuckysPetshopLogoAppointment.png" alt=""/>
<h2 class="heading-details-lucky">Lucky's Petshop</h2>
<h3 class="heading-details-groom">Other Grooming Packages:</h3>
<Link to="/dogfullgroomdetails"><h2 class="heading-details-other">• DOG FULL GROOM</h2></Link>
<Link to="/dogspabathdetails"><h2 class="heading-details-other">DOG SPA BATH</h2></Link>
<Link to="/dogbathdetails"><h2 class="heading-details-other">DOG BATH</h2></Link>
</div>

<div class="container-details">
<img src="./images/DogGroom.png" alt=""/>
<h1 class="heading-details">DOG FULL GROOM</h1>
<p class="heading-details-package">This package is great for your dog buddy who needs washing to maintain a healthy looking coat, clean ears, and trimmed nails.</p>
<p class="heading-details-package">Our dog full groom package will includes the following:</p>
<p class="heading-details-package">• Double Shampoo Wash</p>
<p class="heading-details-package">• Conditioner</p>
<p class="heading-details-package">• Anal Gland Expression</p>
<p class="heading-details-package">• Blow Dry</p>
<p class="heading-details-package">• Ear Cleaning</p>
<p class="heading-details-package">• Ear Hair Removal</p>
<p class="heading-details-package">• Nail Trim</p>
<p class="heading-details-package">• Pet Safe Cologne</p>
<p class="heading-details-package">• Sanitary Trim</p>
<p class="heading-details-package">• Trim Around Eyes</p>
<p class="heading-details-package">• Face Trim</p>
<p class="heading-details-package">• Shave & Scissor Feet</p>
<p class="heading-details-package">• Scissor Finish</p>
<p class="heading-details-package">• Full body hair cut of your choice</p>
<Link to="appointmentscreen">
<button class="btnViewDetails">GO BACK TO APPOINTMENT PAGE</button></Link>
</div>
    </div>
   </div>
)
}