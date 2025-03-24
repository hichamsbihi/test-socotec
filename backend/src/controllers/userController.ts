import { Request, Response } from 'express';
import * as userService from '../services/userService';

// GET USERS 
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    });
  }
};

// GET USER BY HIS ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.getUserById(req.params.id);
    
    if (!user) {
      res.status(404).json({ success: false, error: 'User not found' });
      return;
    }
    
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// CREATE NEW USER
export const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user = await userService.createUser(userData);
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// UPDATE USER
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const userData = req.body;
    const user = await userService.updateUser(req.params.id, userData);
    
    if (!user) {
      res.status(404).json({ success: false, error: 'User not found' });
      return;
    }
    
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

//DELETE USER
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.deleteUser(req.params.id);
    
    if (!user) {
      res.status(404).json({ success: false, error: 'User not found' });
      return;
    }
    
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};