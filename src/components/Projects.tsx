
const Projects = () => {

    const projects = [
        {id: 1, title: 'Angular with firebase auth', url: '/angular.PNG', github: 'https://github.com/rymnd08/job-search', live: 'https://job-search-3ee65.web.app'},
        {id: 2, title: 'Tried laravel out of curiosity', url: '/LARAVEL.PNG', github: 'https://github.com/rymnd08/learn-laravel', live: ''},
        {id: 4, title: 'First project learning tailwind', url: '/tailwind.png', github: 'https://github.com/rymnd08/food-app-tailwind', live: 'https://food-project-7aa2d.web.app'},
        {id: 3, title: 'First react app', url: '/todo.PNG', github: 'https://github.com/rymnd08/first-react', live: 'https://react-todo-2f61d.web.app'},
        {id: 5, title: 'Simple crud using react', url: '/react_proj.PNG', github: 'https://github.com/rymnd08/simple-react-crud', live: 'https://react-simple-web-1.web.app'},
        {id: 6, title: 'Create personal portfolio using react', url: '/portfolio.PNG', github: 'https://github.com/rymnd08/rymnd-portfolio', live: ''},
    ]

    return ( 
        <div className="min-h-screen border border-transparent mt-20 px-4 lg:px-0" id="projects">

            <h2 className="text-white text-3xl font-bold mt-20">Simple Projects</h2>

            <div className="div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center mt-6 min-h-[75vh] gap-10">
                {projects.map(project => (
                    <div className="project-card border rounded  max-h-[200px] aspect-[16/9] p-4 hover:text-white hover:cursor-pointer hover:scale-110 transition ease duration-[200ms] hover:font-bold" key={project.id}>
                        <h3 className="mb-3"> {project.title} </h3>
                        <img src={project.url} alt={project.url.replace(/.png/i, '')} className="object-cover rounded" />
                        <div className="flex justify-around mt-3">
                            <a href={project.github} target="_blank" className="py-1 px-3 bg-black text-slate-300 rounded " >Code <i className="bi bi-github"></i></a>
                            {project.live && <a href={project.live} target="_blank" className="py-1 px-3 bg-blue-600 text-slate-300 rounded ">Live <i className="bi bi-link-45deg"></i></a>}
                        </div>
                    </div>
                ))}
                
            </div> 
        </div>
    );
}
 
export default Projects;