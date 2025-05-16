import { Document, Types } from "mongoose";

export interface IUsers extends Document {
  username: string;
  password: string;
  is_admin: boolean;
  created_at: Date;
}