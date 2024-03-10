import Project from "@/models/Project";
import {NextResponse} from "next/server";

export default async function getProjects() {
    try {
        const projects = await Project.find()
        // console.log({projects})
        return projects
    }catch (error){
        // console.log(error)
        return error
    }
}