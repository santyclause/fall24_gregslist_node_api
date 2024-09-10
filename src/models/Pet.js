import { Schema } from "mongoose";


export const PetSchema = new Schema(
  {
    name: { type: String, minlength: 1, maxlength: 100, required: true },
    imgUrl: { type: String, minlength: 1, maxlength: 1000, required: true },
    age: { type: Number, min: 0, max: 5000, required: true },
    likes: [{ type: String, minlength: 0, maxlength: 100, required: true }],
    isVaccinated: { type: Boolean, required: true },
    status: { type: String, enum: ['adopted', 'adoptable'], required: true },
    species: { type: String, enum: ['cat', 'dog', 'bird', 'capybara', 'rat'], required: true },
    creatorId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  }
)

PetSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account'
})