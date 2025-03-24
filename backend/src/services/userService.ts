import User from '../models/User';
import { IUser } from '../types';

export const getUsers = async () => {
  return await User.find().sort({ createdAt: -1 });
};

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const createUser = async (userData: IUser) => {
  return await User.create(userData);
};

export const updateUser = async (id: string, userData: Partial<IUser>) => {
  return await User.findByIdAndUpdate(id, userData, { new: true, runValidators: true });
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};