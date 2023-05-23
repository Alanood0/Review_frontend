import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Section1 from './Section1';
import section1Image1 from '../images/image1.jpg';
import Section2 from './Section2';
import Section3 from './Section3';


function  Detail(){
    return (
        <>
        <Header/>
                {/* section 2 */}
                <section id="skills">
            <div className="container">
                <div className="row">
                  <Section1 imageName={section1Image1} eName="HR Course" ePosition="Head of HR Department"/>
                  <Section2 CName="Stratigic human resource management" Cdescription="Deep focus on the HRM practices and policies applyed by organization in the world" Cduration="1 MONTH" CstartDate="12-MAY-2023" CendDate="12-JAN-2023" Clocation="Dubai" Clevel="Entry" />
                </div>
                
            </div>
          </section>

          <div id="reviewpart"> 
   {/* <!--Testimonials-------------------> */}
   <section id="testimonials">

    {/* <!--testimonials-box-container------> */}
    <div class="testimonial-box-container">
 {/* <!--BOX-1--------------> */}
 {/* <Section3 Rname="HR" Rate1="" Rate2="" Rate3 ="" Rate4 ="" Rate5="" Rcomment="" /> */}
 <Section3 Rname="Asmaa" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="fas fa-star" Rate5="far fa-star" Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />
 {/* <!--BOX-2--------------> */}
 <Section3 Rname="Aisha" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="fas fa-star" Rate5="far fa-star"  Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />

 {/* <!--BOX-3--------------> */}
 <Section3 Rname="Ahmed" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="fas fa-star" Rate5="far fa-star"  Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />

 {/* <!--BOX-4--------------> */}
 <Section3 Rname="Ali" Rate1="fas fa-star" Rate2="fas fa-star" Rate3 ="fas fa-star" Rate4 ="fas fa-star" Rate5="far fa-star"  Rcomment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, quaerat quis? Provident temporibus architecto asperiores nobis maiores nisi a. Quae doloribus ipsum aliquam tenetur voluptates incidunt blanditiis sed atque cumque." />
 </div>
 
</section>
</div>


         
        <Footer/>
        </>
        
        );
    }
    
export default Detail;