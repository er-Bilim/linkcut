import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  originalUrl: {
    type: String,
    required: true,
    trim: true,
  },
  shortUrl: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
});

const Link = mongoose.model('Link', LinkSchema);
export default Link;
