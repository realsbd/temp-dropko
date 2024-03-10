import getProjects from "@/lib/getProjects";
import Link from "next/link";

export default async function Projects () {

    const projects = await getProjects()

    // console.log({projects})
    interface Project {
        _id: string;
        username: string;
        projectName: string;
        projectDescription: string;
        image: string;
        blockchain: string;
        price: number;
        projectDate: Date;
        totalSupply: number;
        hasWhitelist: boolean;
        priceType: string;
        airdrop: boolean;
        howToGetWhitelisted: string;
        creator: string;
        status: string;
    }

    return (
        <div>
            {projects.map((project: Project) => (
                <div key={project._id}>
                    <Link href={`/projects/${project._id}`}><h2>{project.projectName}</h2></Link>
                </div>
            ))}
        </div>
    );
}
