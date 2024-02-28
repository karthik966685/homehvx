import React, { useState } from 'react';



const Homepage = () => {
    const accordionData = [
        {
          id: 1,
          title: 'What types of events does Shriram Visuals cater to?',
          content: `Shriram Visuals cater to a diverse range of events, including corporate gatherings such aspresentaƟons, conferences, product launches, trade shows, team-building events, rewards &recogniƟons, Hackathons, and Trainings.`,
        },
        {
          id: 2,
          title: 'What equipment do you offer for rent?',
          content: `Another section with some content. Customize it as needed.`,
        },
        {
          id: 3,
          title: 'Do you offer delivery & setup?',
          content: `Content for Section 3 goes here. Customize as needed.`,
        },
        {
          id: 4,
          title: 'What are your rental charges?',
          content: `Content for Section 4 goes here. Customize as needed.`,
        },
        {
          id: 5,
          title: 'How do I book my event with you?',
          content: `Content for Section 5 goes here. Customize as needed.`,
        },
        {
          id: 6,
          title: 'Do you offer discounts for long-term rentals?',
          content: `Content for Section 6 goes here. Customize as needed.`,
        },
      ];
    
      const [activeSection, setActiveSection] = useState(null);
    
      const handleSectionClick = (id) => {
        setActiveSection((prevActiveSection) =>
          prevActiveSection === id ? null : id
        );
      };
  return (
   
<>
<div className="about">
        <div className="imag">
          <h6>Welcome to SriramVisuals</h6>
          <h1>About us</h1>
          <p>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.</p>
        </div>
        <div className="sec02">
            <div className="left-content">
                <p>Established in 2007, Shriram Visuals is just more than audio-visual rentals in Bengaluru, we are yourpartners in creating unforgettable experiences through premium audio-visual equipment. Our primaryobjective is to ensure that your business conferences leave a lasting impression on your clients andcolleagues, creating vibrant, memorable, and beautiful orchestrated celebrations. Transform any spaceinto a vibrant party zone effortlessly, guaranteeing cherished moments.
</p> <br/> 
<p>We provide a comprehensive solution covering projector rentals, premium brand speakers such as JBLor QSC, stage setups of any size to keep the energy high at corporate and personal events, videographyand photography services, webcasting for virtual conferences and meetings, and delicious cateringservices – ALL AT ONE PLACE. </p>       
<br/>
<p>Our client base comprises prestigious IT companies, banks, training institutes, clubs, and eventmanagement firms, catering to audiences ranging from 10 to 1000 people. Over the years, we've earneda reputable 4+ rating from local search engines and Google reviews, underlining our commitment toquality service.</p>
            </div>
            <div className="right-content">
                <div className="top">
                    <div className="left">
                        <h1>17+</h1>
                        <p>years of experience</p>
                        </div>
                        <div className="right">
                        <h1>5000+</h1>
                        <p>Events</p>
                        </div>

                </div>
                <div className="bottom">
                <div className="left">
                        <h1>1000+</h1>
                        <p>Customers </p>
                        </div>
                        <div className="right">
                        <h1>40000+</h1>
                        <p>hours of service</p>
                        </div>
                </div>

            </div>
            
            </div>
            <div className="sec03">
                <div className="left-img">

                </div>
                <div className="right-text">
                    <div className="first">
                        <h2>Our Vision</h2>
                        <p>Established in 2007, Shriram Visuals is just more than audio-visual rentals in Bengaluru, we are yourpartners in creating unforgettable experiences through premium audio-visual equipment. Our primaryobjective is to ensure that your business conferences leave a lasting impression on your clients andcolleagues, creating vibrant, memorable, and beautiful orchestrated celebrations. Transform any spaceinto a </p>
                    </div>
                    <div className="second">
                        <h2>Our Mission</h2>
                        <p>Established in 2007, Shriram Visuals is just more than audio-visual rentals in Bengaluru, we are yourpartners in creating unforgettable experiences through premium audio-visual equipment. Our primaryobjective is to ensure that your business conferences leave a lasting impression on your clients andcolleagues, creating vibrant, memorable, and beautiful orchestrated celebrations. Transform any spaceinto a  </p>
                    </div>
                    <div className="thrid">
                        <h2>Our Values</h2>
                        <p>Established in 2007, Shriram Visuals is just more than audio-visual rentals in Bengaluru, we are yourpartners in creating unforgettable experiences through premium audio-visual equipment. Our primaryobjective is to ensure that your business conferences leave a lasting impression on your clients andcolleagues, creating vibrant, memorable, and beautiful orchestrated celebrations. Transform any spaceinto a </p>
                    </div>
                </div>
            </div>

            <div className="sec04">
                <div className="brands">
                    <p>Trusted by more than 50+ brands</p>
                    <div className="img-brand">

                    </div>

                </div>
                <div className="spekars">
                    <div className="one">

                    </div>
                    <div className="two">
                        <h3>Get Speakers for Rental <br/>For your Events Now</h3>
                        <button>Enquire Now</button>

                    </div>
                    <div className="three">

                    </div>

                </div>
            </div>
            <div className="sec05">
                <div className="heading">
                    <p>Testimonials</p>
                    <h1>What people are saying</h1>
                </div>
                <div className="slide-page">
                <div className="left-im">

                </div>
                <div className="right-pera">
                    <div className="semi">

                    </div>
                    <div className="star"></div><br/>
                    <div className="box">
                        <p style={{ fontStyle: 'italic' }}>“I am incredibly happy with how things turned out during PDI. Thank you very much for your hard work,flexibility, and diligence in pulling a successful event together. We had great feedback from ourcolleagues, it is considered a massive success all around. That's quite an achievement, given thecomplexity of what we pulled together. It was a pleasure working with Shriram Visuals. We hope tohave the opportunity to work again in the future.”</p><br/><br/>
                    <h4>Chankith Jain</h4>
                    <h5>Engineering Manager</h5>
                    </div>

                </div>
                </div>
                 </div>
                 <div className="sec06">
                    <div className="center-con">
                      
                            <h1>Frequently Asked Questions</h1>
                   <p>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque<br/> sollicitudin. Lorem ipsum dolor</p>
                   <div className="box1">
                  
        {accordionData.map(({ id, title, content }) => (
          <div className="accordion-item" key={id}>
            <div
              className={`accordion-title ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleSectionClick(id)}
            >
              <div>{title}</div>
              <div>{activeSection === id ? '<' : '>'}</div>
            </div>
            {activeSection === id && (
              <div className="accordion-content">{content}</div>
            )}
          </div>
        ))}
      </div>
      
      
     </div>

      </div>
     
      <div className="sec07">
      <div className="center-co">
      <div className="box2">
        <h1>Lorem ipsum sit dolor consect <br/>adipiscing sit is Lorem ipsum</h1>
        <button>Reach us</button>
        </div>
        <div className="footer">
            <div className="nav">
                <h3>Home</h3>
                <h3>About us</h3>
                <h3>Services</h3>
                <h3>Contact us</h3>

            </div>

        </div>
        <div className="imgs">
       
        </div>
      

      </div>

      </div>
      </div>
                  

             

        
        </>
     
   
  )
}

export default Homepage
