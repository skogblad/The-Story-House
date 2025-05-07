import mongoose from "mongoose";
import { IUsers } from "../types/IUsers";
const Schema = mongoose.Schema;

const UsersSchema = new Schema<IUsers>(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    is_admin: {
      type: Boolean,
      default: false
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false // This disables the __v field
  }
);

export default mongoose.model('Users', UsersSchema);

