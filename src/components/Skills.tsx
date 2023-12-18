type ISkills = {
    id: number
    name: string
    imgURL: string
}

const Skills  = () => {
    const skills: ISkills[] = [
        {id: 1, name: 'JavaScript', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
        {id: 2, name: 'TypeScript', imgURL: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png'},
        {id: 3, name: 'Angular', imgURL: 'https://miro.medium.com/v2/resize:fit:2680/1*jlg3PXZ6PYdUGy40tXybKw.gif'},
        {id: 4, name: 'React', imgURL: '/react.png'},
        {id: 5, name: 'tailwindcss', imgURL: 'https://www.svgrepo.com/show/374118/tailwind.svg'},
        {id: 6, name: 'Bootstrap', imgURL: 'https://brandlogos.net/wp-content/uploads/2021/09/bootstrap-logo.png'},
        {id: 7, name: 'PHP', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png'},
        {id: 8, name: 'MySQL', imgURL: 'https://icons-for-free.com/iconfiles/png/512/logo+my+query+server+sql+icon-1320184811372606623.png'},
        {id: 13, name: 'mongoDB', imgURL: 'https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png'},
        {id: 9, name: 'HTML', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png'},
        {id: 10, name: 'CSS', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png'},
        {id: 11, name: 'Git', imgURL: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'},
        {id: 12, name: 'GitHub', imgURL: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'},
    ]

    return ( 
        <div className="mt-20 min-h-screen border border-transparent px-4 lg:px-0" id="skills">
            <h3 className="text-3xl font-bold text-white mb-10 lg:mb-0 mt-20">
                Skills
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:min-h-[calc(100vh-200px)] place-content-center gap-4 ">
                
                {skills.map(skill => (
                    <div key={skill.id} className=" rounded flex items-center gap-4 hover:text-white hover:cursor-pointer hover:scale-110 transition ease duration-[200ms] hover:font-bold">
                        <div className=" w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] " >
                            <img src={skill.imgURL} alt="" className={`object-contain h-full w-full rounded`} />
                        </div>
                        <h3 className="md:text-lg lg:text-xl"> {skill.name} </h3>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Skills;