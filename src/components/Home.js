import React from 'react';
import Header from './Header';
import Footer from './Footer';
import section1Image1 from '../images/image1.jpg';
import List from './List';


function  Home(){
    return (
        <>
        <Header/>
          {/* section 3 */}
          <section id="skills">
            <div className="container">
                <div className="row">
    
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title">
                        <h1 className="wow fadeInUp" data-wow-delay="0.6s"> The Menu</h1>
             <List imageName={section1Image1} CName="Honey Almond Granola with Fruits" Cdescription="Natural cereal of honey toasted oats, raisins, almonds and dates"  Cprice="30" />
              <List imageName={section1Image1} CName="Blueberry Pancakes" Cdescription="With syrup, butter and lots of berries" Cprice="40" />
              <List imageName={section1Image1} CName="Belgian Waffle" Cdescription="Vanilla flavored batter with malted flour"  Cprice="45" />

             
             
              </div>
                    </div>
              </div>
            </div>
            </section>

        <Footer/>
        </>
        
        );
    }
export default Home;
    