import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import { getImage } from "../firebase";

const Home = () => {
    const [image, setImage] = useState('')
    
    async function getImageURL(){
        const url = await getImage('1x1.png')
        setImage(url)
        console.log(url)
    }
    useEffect(()=>{

        getImageURL()
    },[image])

    return ( 
        <div className="wrapper bg-dark min-h-screen w-full flex justify-center text-slate-300 ">
            <Navbar />
            <div className="max-w-5xl ">
                <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-8 h-screen " id="home">
                    <div className="fade-in-left  w-full flex justify-center">
                        {image && <img src={image} alt="" className="h-[320px] rounded-full border-2 border-slate-300 hover:scale-110 transition ease duration-[1s]" />}
                    </div>
                    <div className="text-center fade-in-right ">
                        <h2 className="text-3xl lg:text-5xl font-bold leading-[50px] lg:leading-[80px] p-8 lg:p-0 hover:scale-110 transition ease duration-[1s]">
                            Aspiring Developer, Transforming Ideas into Code – Line by Line, Pixel by Pixel
                        </h2>
                    </div>
                </div>

                <div className="h-screen border border-transparent relative " id="skills">
                    <h3 className="absolute top-20 w-full  text-3xl font-bold text-white px-4 lg:px-0">
                        Skills
                    </h3>
                    <Skills />
                </div>

                <div className="h-screen border border-transparent relative " id="projects">
                    <h3 className="absolute top-20 w-full border text-3xl font-bold text-white">
                        Projects
                    </h3>
                </div>

                <div className="h-screen border border-transparent relative  " id="about-me">
                    <h3 className="absolute top-20 w-full border text-3xl font-bold text-white">
                        About me
                    </h3>
                </div>

            </div>
            
        </div>
     );
}
 
export default Home;