const AboutMe = () => {
    return ( 
        <div className="min-h-screen border border-transparent" id="about-me">
            <h2 className="text-white text-3xl font-bold mt-20 mb-10">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start place-content-center min-h-[75vh] gap-20">

                <div className="rounded p-4 border hover:scale-110 transition ease duration-200">
                    <h3 className="mb-4 font-bold text-2xl">Resume</h3>
                    <img src="/resume.PNG" alt="" className="h-[200px] rounded mb-3 "  />
                    <div className="flex justify-between rounded text-center">
                        <a href="/rymnd_resume2023.pdf" target="_blank" className="py-1 px-3 bg-blue-500 w-full">Open</a>
                        <a href="/rymnd_resume2023.pdf" download="raymund_regalado_resume.pdf" className="py-1 px-3 bg-slate-500 w-full">Download</a>
                    </div>
                </div>

                <div className="rounded p-4 border hover:scale-110 transition ease duration-200">
                    <h3 className="mb-4 font-bold text-2xl">GitHub</h3>
                    <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub logo" className="h-[200px] rounded mb-3 "  />
                    <a href="https://github.com/rymnd08" target="_blank" className="py-1 px-3 bg-blue-500 block text-center">Open</a>
                </div>

                <div className="md:flex gap-4 items-center hover:scale-110 transition ease duration-200 p-4">
                    <img src="https://static-00.iconduck.com/assets.00/gmail-icon-512x511-fih5xfbp.png" className="mx-auto lg:mx-0 mb-3 lg:mb-0 h-[100px] w-[100px] aspect-[1/1] object-cover rounded-[20px]" alt="Gmail logo" />
                    <h3 className="text-2xl font-semibold ">raymundregalado8@gmail.com</h3>
                </div>

                <div className="md:flex gap-4 items-center hover:scale-110 transition ease duration-200 p-4">
                    <img src="https://cdn.logojoy.com/wp-content/uploads/20230921104408/Facebook-logo-600x319.png" 
                    className="mx-auto lg:mx-0 mb-3 lg:mb-0 h-[100px] w-[100px] aspect-[1/1] object-cover rounded-[20px]" alt="Facebook logo" />
                    <h3 className="text-2xl font-semibold  underline">
                        <a href="https://www.facebook.com/rymnd0800" 
                            target="_blank">
                            https://www.facebook.com/rymnd0800
                        </a>
                    </h3>
                </div>
            
            </div>
        </div>
     );
}
 
export default AboutMe;