import mongoose, { Schema, Model } from "mongoose";
mongoose.connect(process.env.MONGODB_URI)
interface IProject {
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

const projectSchema = new Schema<IProject>({
    username: String,
    projectName: String,
    projectDescription: String,
    image: String,
    blockchain: String,
    price: Number,
    projectDate: Date,
    totalSupply: Number,
    hasWhitelist: Boolean,
    priceType: String,
    airdrop: Boolean,
    howToGetWhitelisted: String,
    creator: String,
    status: String
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model<IProject>("Project", projectSchema);

export default Project;