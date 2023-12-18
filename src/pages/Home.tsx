import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Main from "../components/Main";

const Home = () => {

    return ( 
        <div className="bg-dark text-slate-300 flex justify-center overflow-hidden">
            
            <Navbar />

            <div className="max-w-5xl">
                
                <Main />

                <Skills />

                <Projects />

                <AboutMe />
                
            </div>
            
        </div>
     );
}
 
export default Home;