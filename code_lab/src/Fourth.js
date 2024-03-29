import React from 'react';
import Rectangle7 from './images/Rectangle 7.svg';
import Curved from './images/Curved.svg';
import Rectangle1646 from './images/Rectangle 1646.svg';
import ClarityArrow from './images/clarity_arrow-line.svg';

const Fourth = () => {
    return (
        <div className="main">
            <div className="relative mx-auto h-screen w-screen">
            <img className="h-full w-full object-cover" src={Rectangle7}/>

               
                <img className="absolute top-72 mt-5 right-64 w-80" src={Curved} />
                <img className="absolute top-24 right-96 mr-56 w-80" src={Curved} />
                <img className="absolute bottom-24 right-96 mr-56 w-80" src={Curved} />

                <div classname="relative">

                    <div className="absolute top-48 left-56">
                        <h1 className="text-6xl">Fostering</h1>

                        <h3 className="text-6xl text-purple-500 mt-3">Success for All</h3>

                        <h2 className="text-6xl mt-3">Business Types </h2>

                        <div className="text-xl mt-20">
                            <h4>We cater to business needs of every</h4>
                            <h4>scale while ensuring that quality is</h4>
                            <h4>never compromised!</h4>
                        </div>
                        <img className="absolute -bottom-32" src={Rectangle1646} />
                        <img className="absolute -bottom-32 left-44 " src={ClarityArrow} />
                       
                    </div>

                </div>
                
                

            </div>
            </div>


            )

}
            export default Fourth;