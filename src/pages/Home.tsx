import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Main from "../components/Main";

const Home = () => {

    return ( 
        <div className="wrapper bg-dark min-h-screen w-full flex justify-center text-slate-300 ">
            <Navbar />
            <div className="max-w-5xl ">
                
                <Main />

                <Skills />

                <Projects />

                <AboutMe />
                
            </div>
            
        </div>
     );
}
 
export default Home;