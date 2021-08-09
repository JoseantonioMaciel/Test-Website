import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <section className= "IDK" id="something"> 
    <div className='cards'>
    <br/>
      <h1>Our Services</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='This damage may either be directly caused by the flames or could occur due to smoke and other corrosive substances emitted by the fire.'
              label='Fire Damage'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Accessory dwelling units, or ADUs for short, are separate dwelling areas that are on the same land as a detached house. '
              label='Acessory Dwelling Units'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='A room addition or bump out is a single room structure built onto the side of a house meant for a single function, such as a bedroom or bathroom'
              label='Room Addition'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='We prepare architectural plans and technical drawings for construction and engineering purposes.'
              label='New Home'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='The real estate definition of Leasehold improvements, also known as tenant improvements (TI), are the customized alterations a building owner makes to rental space as part of a lease agreement, in order to configure the space for the needs of that particular tenant.'
              label='Commercial Tenant Improvement'
              path='/products'
            />
            <CardItem
              src='images/img-5.png'
              text='We understands that an upfront investment in renovations can transform your property’s look, yielding significant returns. As the innovative leader in large-scale multifamily and commercial interior/community space renovations, we transform your property with expert solutions'
              label='Remodel Multifamily Duplex'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Building permits are typically required for any construction improvement, repair, alteration, construction, or demolition project, including pool or spa installations, sandblasting, most excavation and the erection of temporary structures such as temporary power poles. Permits are also required for re-roofing projects and improvements to plumbing, mechanical and electrical systems.'
              label='Permit Service'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='An AS-Built drawing is a revised set of drawings submitted by a contractor upon completion of a construction project. As built drawings show the dimensions, geometry, and location of all components of the project.'
              label='AS-Built Drawings'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Renovations is the process of improving a broken, damaged, or outdated structure. Renovations are typically either commercial or residential.'
              label='Renovation'
              path='/products'
            />
            </ul>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Cards;