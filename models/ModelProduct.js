import mongoose from "mongoose";

const ModelProduct = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Products", ModelProduct);
