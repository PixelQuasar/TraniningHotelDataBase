import { Schema, model } from "mongoose"

interface IPost {
    content: string,
    images: Array<string>,
    views: number,
    likes: number,
    authorId: string,
    active: boolean,
}

const PostSchema = new Schema<IPost>({
    content: String,
    images: [String],
    views: Number,
    likes: Number,
    authorId: Number,
    active: Boolean
})

PostSchema.index({content: "text"})

export default model<IPost>("post", PostSchema)