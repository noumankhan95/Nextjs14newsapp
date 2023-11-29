import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
  author: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  country: { type: String, required: true },
  language: { type: String, required: true },
  published_at: { type: String, required: true }, // You might want to use a specific date type here if applicable
  source: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const ArticleModel =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);
export default ArticleModel;
