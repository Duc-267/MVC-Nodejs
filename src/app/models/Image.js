import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Image = new Schema({
  img: { type: Buffer }
});

var image = mongoose.model('Image',Image);

export default image;
