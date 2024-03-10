import {singleProject} from "@/lib/singleProject";


export default async function Project({params}: { params: { id: string}}){

    const project = await singleProject(params.id)
    console.log(project)
    return (
        <div>
            <h1 className="text-3xl font-bold">{project.id}</h1>
            {/*<p>{params.description}</p>*/}
        </div>
    )
}