import mongoose from 'mongoose';
import generateRandomString from '../../utils/generateRandomString.js';

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
    default: () => generateRandomString(7),
  },
});

const Link = mongoose.model('Link', LinkSchema);
export default Link;
