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
                        <h1 class="w3-center">Le Catering</h1>
      <h5 class="w3-center">Tradition since 2020</h5><br/>
                        <h2 className="wow fadeInUp" data-wow-delay="0.6s"> The Menu: </h2>
                        <List/>
             
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
    