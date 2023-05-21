import React from 'react'
import vg from "../Assets/support man.png";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle, 
    AiFillYoutube,
    
} from "react-icons/ai"; 

import dell from "../Assets/dell.png";
import hp from "../Assets/hp.png";
import whirlpool from "../Assets/whirlpool.png";
import voltas from "../Assets/voltas.png";



const Home = () => {
  return ( 
    <>

    <div className="home">
        <main>
        <h1>Service Provider</h1>
        <p>Solution to all your appliances problems.</p>
        </main>
    </div>
    
    <div className='home2'>
        <img src={vg} alt="Graphics"/>

        <div>
            <p>
            Its a one stop online service provider platform, where the customers who are looking for repair experts, can find best one. Here the verified technicians provide doorstep services to resolve their repairing issues pertaining to household items like AC, Led TV, Refrigerator, Washing Machine, Microwave etc
            </p>
        </div>
    </div>

   <div className='home3' id="about">
    <div>
        <h1>Who we are?</h1>
        <p> At Service Provider, our aim is to provide customers a wide range of complete repairing solution for their Kitchen appliance, Home appliances, carpentry work, plumbering work etc.At Present we are focusing on home appliance repair solution and we are also committed to add more doorstep service solutions.We strive to help people by providing extraordinary service and expert repairs using only the highest quality parts available.
       </p>
    </div>
   </div>

   <div className='home4' id="brands">
    <div>
        <h1>Brands</h1>
        <article>

            <div style={{
                animationDelay: "0.3s",
            }}>
                {/* <AiFillGoogleCircle/> */}
                <img src={dell} alt="dell" style={{
                    width:"60px"
                }}  />
                <p>Dell</p>
            </div>

            <div style={{
                animationDelay: "0.5s",
            }}>
                {/* <AiFillAmazonCircle/> */}
                <img src={hp} alt="hp" style={{
                    width:"60px"
                }} />

                <p>Amazon</p>
            </div>


            <div style={{
                animationDelay: "0.7s",
            }}>
                {/* <AiFillYoutube/> */}
                <img src={voltas} alt="hp" style={{
                    width:"60px"
                }} />

                <p>Voltas</p>
            </div>

            <div style={{
                animationDelay: "0.7s",
            }}>
                {/* <AiFillYoutube/> */}
                <img src={whirlpool} alt="hp" style={{
                    width:"60px"
                }} />

                <p>Whirlpool</p>
            </div>

            <div style={{
                animationDelay: "0.7s",
            }}>
                <AiFillYoutube/>
                <p>Youtube</p>
            </div>

            <p className='more'>And many more...</p>


        </article>
    </div>
   </div>
    </>
  )
}

export default Home;