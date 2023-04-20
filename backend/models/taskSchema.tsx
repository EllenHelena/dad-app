import mongoose, { Schema, Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  time: number;
  quantity: number;
}

const taskSchema: Schema<ITask> = new Schema(
  {
    title: String,
    time: Number,
    quantity: Number,
  },
  { timestamps: true }
);

export default mongoose.model<ITask>("Task", taskSchema);
