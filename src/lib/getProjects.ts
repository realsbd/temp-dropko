import './db'

export default async function getProjects() {
    const { client } = await connectToDatabase();
    return client.collection('projects').find();
}