import React from 'react';
import Background from './images/Wireframe - 2.svg';
import Logo from './images/HM-codelabs-logo 1.svg';
import Arrow from './images/Polygon 1.svg';
import Search from './images/search-interface-symbol 1.svg';
import Group3 from './images/Group 3.svg';
import Bar from './images/glass morph.svg';
import Shadow from './images/Component 109.svg';
import Box from './images/Group 73.svg';
import Phone from './images/Group 86.svg';
import Elevating from './images/ELEVATING.svg';
import Rectangle5 from './images/Rectangle 5.png';

const Home = () => {
    return (
        <div className="main">
            

                <div className="relative mx-auto">

                    <img className="h-screen w-screen object-cover" src={Background} alt="purple" />
                    <img className="absolute top-0 left-0 transform -translate-x-64 opacity-25"src={Shadow} />
                    <img className="bg-purple-white absolute top-10 left-20" src={Logo} />
            
                    <img className="absolute top-10 right-20 " src={Bar}/>
                    <div className="flex flex-row items-center justify-center space-x-28 absolute top-16 right-20 mt-15 mr-32 ">
                            <span className="text-white">Home</span>
                            <span className="text-white">Projects</span>
                            <span><img className="right-20" src={Arrow}/></span>
                            <span className="text-white">More</span>
                            <span className="text-white">Contact</span>
                            <span><img src={Search}/></span>
        
                            <span><img src={Group3}/></span>
                        </div> 
                       
                        <div classname="relative">
                    <div className="absolute top-48 left-56 text-white">
                        <h1 className="text-8xl">ELEVATING</h1>
                        <br></br>
                        <h3 className="text-6xl">Business to "Next level"</h3>
                        <br></br>
                        <h2 className="text-xl">Give Your Venture an Edge Over Technology with our </h2>
                        <h2 className="text-xl">Ready-To-Deploy Saas Solutions</h2>
                    </div>
                    <div className="absolute bottom-72 left-52">
                        <img src={Box}/>
                    </div>
                    <div className="absolute bottom-16 left-56 opacity-50">
                        <img src={Rectangle5} />
                    </div>
                    <div className="absolute right-80 top-56 w-80">
                    <img src={Phone}/></div>
                    <img className="absolute bottom-64 right-64" src={Elevating}/>
                    </div>
                   

                </div>



            </div>

        
    )
}
export default Home;