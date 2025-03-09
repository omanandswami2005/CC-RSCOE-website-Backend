import { Member } from "../models/Member";
import { hashPassword, comparePassword } from "../utils/hashPassword";
import { generateToken } from "../utils/generateToken";

interface RegisterData {
  username: string;
  name: string;
  email: string;
  password: string;
  contact_no?: string;
}


export const registerUser = async (data: RegisterData) => {
  const existing = await Member.findOne({ email: data.email });
  if (existing) throw new Error("User already exists");

  const hashed = await hashPassword(data.password);
  const user = await Member.create({ ...data, password: hashed }) as { _id: string };
  // const token = generateToken(user._id);
  return { user };
};

export const loginUser = async (email: string, password: string) => {
  // console.log(email, password);
  const user = await Member.findOne({ email }) as { _id: string, password: string };
  if (!user) throw new Error("User not found");

  const isValid = await comparePassword(password, user.password);
  if (!isValid) throw new Error("Invalid credentials");

  const token = generateToken(user._id);

  return { user, token };
};




export const getUserProfileById = async (id: string) => {
  console.log(id);
  const user = await Member.findById(id).select("-password");
  console.log(user);
  if (!user) throw new Error("User not found");
  return user;
};

export const updateUserProfileById = async (id: string, data: any) => {
  const user = await Member.findByIdAndUpdate(id, data, { new: true }).select("-password");
  if (!user) throw new Error("User not found");
  return user;
};
