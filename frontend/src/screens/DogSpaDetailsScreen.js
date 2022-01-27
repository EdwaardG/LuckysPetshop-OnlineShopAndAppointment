import React from 'react';
import { Link } from 'react-router-dom';

export default function DogSpaDetailsScreen(){
return(
    <div>
        <div class="container">
<div class="container-details">
<img src="./images/LuckysPetshopLogoAppointment.png" alt=""/>
<h2 class="heading-details-lucky">Lucky's Petshop</h2>
<h3 class="heading-details-groom">Other Grooming Packages:</h3>
<Link to="/dogfullgroomdetails"><h2 class="heading-details-other"> DOG FULL GROOM</h2></Link>
<Link to="/dogspabathdetails"><h2 class="heading-details-other">• DOG SPA BATH</h2></Link>
<Link to="/dogbathdetails"><h2 class="heading-details-other"> DOG BATH</h2></Link>
</div>

<div class="container-details">
<img src="./images/DogSpa.png" alt=""/>
<h1 class="heading-details">DOG SPA BATH</h1>
<p class="heading-details-package">This package is great for your dog buddy to keep him happy, healthy, and confident.</p>
<p class="heading-details-package">Our dog spa bath package will includes the following:</p>
<p class="heading-details-package">• Double Shampoo Wash</p>
<p class="heading-details-package">• Conditioner</p>
<p class="heading-details-package">• Anal Gland Expression</p>
<p class="heading-details-package">• Blow Dry</p>
<p class="heading-details-package">• Ear Cleaning</p>
<p class="heading-details-package">• Ear Hair Removal</p>
<p class="heading-details-package">• Nail Trim</p>
<p class="heading-details-package">• Nail Grid</p>
<p class="heading-details-package">• Pet Safe Cologne</p>
<p class="heading-details-package">• Hand Dry</p>
<p class="heading-details-package">• Trim Aroud Eyes</p>
<p class="heading-details-package">• Sanitary Trim</p>
<Link to="appointmentscreen">
<button class="btnViewDetails">GO BACK TO APPOINTMENT PAGE</button></Link>
</div>
    </div>

    </div>
)
}