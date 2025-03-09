import mongoose, { Document, Schema } from 'mongoose';

export interface IMember extends Document {
  username: string;
  name: string;
  email: string;
  password: string;
  mem_type: 'team' | 'general';
  contact_no?: string;
  mem_prof_info?: {
    links?: {
      github?: string;
      linkedin?: string;
      leetcode?: string;
    };
    skills?: string[];
    about?: string;
  };
  isVerified: boolean;
  profile_pic?: string;
  createdAt: Date;
  updatedAt: Date;
}

const MemberProfileSchema: Schema = new Schema({
  links: {
    github: String,
    linkedin: String,
    leetcode: String,
  },
  skills: [String],
  about: String,
});

const MemberSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mem_type: { type: String, enum: ['team', 'general'], required: true, default: 'general' },
  contact_no: { type: String, default: ""},
  mem_prof_info: { type: MemberProfileSchema, default: {} },
  isVerified: { type: Boolean, default: false },
  profile_pic: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Member = mongoose.model<IMember>('Member', MemberSchema);
