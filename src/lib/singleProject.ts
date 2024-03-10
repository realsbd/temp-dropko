import Project from "@/models/Project";

export async function singleProject(id: string){
    try {
        return await Project.findById(id)
    } catch (error){
        return error
    }
}