// src/controllers/authController.ts
import { RequestHandler } from 'express';
import {
  registerUser,
  loginUser,
  getUserProfileById,
  updateUserProfileById,
} from '../services/authService';

// Explicitly type the controller as RequestHandler
export const register: RequestHandler = async (req, res, next) => {
  try {
    const {
      username,
      name,
      email,
      password,
    } = req.body;
    const { user } = await registerUser({
      username,
      name,
      email,
      password,
    });
    res.status(201).json({ user });
  } catch (error: any) {
    next(error); // Pass error to Express error handler
  }
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const { user, token } = await loginUser(email, password);
    res.status(200).json({ user, token });
  } catch (error: any) {
    next(error);
  }
};

export const logout: RequestHandler = async (req, res) => {
  // Perform logout logic
  res.cookie('token', '', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logout successful' });
};

export const getProfileById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    // Fetch user details and exclude sensitive data (e.g., password)
    console.log(id);
    const user = await getUserProfileById(id);
    if (!user) {
      res.status(404).json({ message: 'User not found' });
    } else {
      res.status(200).json({ user });
    }
  } catch (error) {
    next(error);
  }
};

export const updateProfileById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUserProfileById(id, req.body);
    res.status(200).json({ user: updatedUser });
  } catch (error) {
    next(error);
  }
};
