import { Schema, model } from "mongoose";

interface IReview {

}

const ReviewSChema = new Schema<IReview>({

})

export default model<IReview>('reviews', ReviewSChema)