import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "tag is required"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
