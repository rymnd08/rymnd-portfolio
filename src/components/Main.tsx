const Main = () => {
    return ( 
        <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center gap-8 min-h-screen " id="home">
            <div className="fade-in-left  w-full flex justify-center">
            <img src="/1x1.png" alt="" className="h-[320px] rounded-full border-2 border-slate-300 hover:scale-110 transition ease duration-[1s]" />
            </div>
            <div className="text-center fade-in-right ">
                <h2 className="text-3xl lg:text-5xl font-semibold leading-[50px] lg:leading-[80px] p-8 lg:p-0 hover:scale-110 transition ease duration-[1s]">
                    Hello I'm Raymund, aspiring <span className="text-white font-bold">developer</span>. Let's transform ideas into code.
                </h2>
            </div>
        </div>
     );
}
 
export default Main;