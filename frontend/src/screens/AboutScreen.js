import React from 'react';
import  '../styles/About.css';

export default function AboutScreen(){
return(
    <div>
<div className="container-about">
<h1 className="aboutus-header">About Us</h1>
<p className="aboutus-companydesc">Lucky Pet Shop is the pet supply retail store for dogs and cats in the Metro Manila. It carries a huge selection of local and imported pet products including food, treats, clothes, toiletries, grooming tools, cages, toys and more. It has modern, spacious, and clean salon facility for pet grooming and trained professional groomers.</p><br/>
<p className="aboutus-companydesc">Lucky Pet Shop has its own pharmacy for your pet's medical needs. With its strong command of the industry, Lucky Pet Shop can mount fun, relevant and big events that are well attended by the pet community. </p>
<br/><hr/><br/>

<div><h1 className="aboutus-header2">Project Contributors</h1>
<h1 className="aboutus-header3">The people behind the developing of the system.</h1>
</div>

<div className="card-container">
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <br/><br/>
        <img className="aboutus-img" src="./images/roundedEdward.png" alt=""/>
        <h4><b>Edward Gen L. Enejosa</b></h4> 
    <p>Lead Developer</p> 
    <p>enejosa.024188@cubao.sti.edu.ph</p> 
    </div>
    <div class="flip-card-back">
        <br/><br/>
    <img className="aboutus-img" src="./images/roundedPhilip.png" alt=""/>
    <h4><b>Jhon Philip F. Narra</b></h4>
    <p>Documentator</p>
    <p>narra.136369@cubao.sti.edu.ph</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <br/><br/>
        <img className="aboutus-img" src="./images/roundedMartin.png" alt=""/>
        <h4><b>Martin V. Pacheco</b></h4> 
    <p>Documentator</p> 
    <p>pacheco.158282@cubao.sti.edu.ph</p>
    </div>
    <div class="flip-card-back">
        <br/><br/>
    <img className="aboutus-img" src="./images/roundedJerome.png" alt=""/>
    <h4><b>Jerome Edison N. Lotivio</b></h4> 
    <p>Assistant Programmer</p>
    <p>lotivio.013140@cubao.sti.edu.ph</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <br/><br/>
        <img className="aboutus-img" src="./images/roundedJerome.png" alt=""/>
    <h4><b>Jerome Edison N. Lotivio</b></h4> 
    <p>Assistant Programmer</p>
    <p>lotivio.013140@cubao.sti.edu.ph</p>
    </div>
    <div class="flip-card-back">
        <br/><br/>
    <img className="aboutus-img" src="./images/roundedMartin.png" alt=""/>
    <h4><b>Martin V. Pacheco</b></h4> 
    <p>Documentator</p>
    <p>pacheco.158282@cubao.sti.edu.ph</p>
    </div>
  </div>
</div>

<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
        <br/><br/>
    <img className="aboutus-img" src="./images/roundedPhilip.png" alt=""/>
    <h4><b>Jhon Philip F. Narra</b></h4>
    <p>Documentator</p>
    <p>narra.136369@cubao.sti.edu.ph</p>
    </div>
    <div class="flip-card-back">
        <br/><br/>
    <img className="aboutus-img" src="./images/roundedEdward.png" alt=""/>
    <h4><b>Edward Gen L. Enejosa</b></h4> 
    <p>Lead Programmer</p>
    <p>enejosa.024188@cubao.sti.edu.ph</p> 
    </div>
  </div>
</div>
</div>




</div>
    </div>
)
}