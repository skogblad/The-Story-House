import jwt from 'jsonwebtoken'
import { Request, Response } from 'express';
import Users from '../modules/Users';

// Log in
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
     res.status(400).json({ message: "Username and password are required" });
     return
  }

  try {
    const user = await Users.findOne({ username });

    if (!user) {
       res.status(401).json({ message: "Invalid username or password" });
       return
    }

    const accessToken = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET || "", {
      expiresIn: '7d'
    });

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true, 
      sameSite: 'none', 
      maxAge: 1000 * 60 * 60 * 24 * 7
    });

    res.json({ message: 'You are logged in' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Log out
  export const logout = (req: Request, res: Response) => {
    res.clearCookie('accessToken')
    res.json({message: 'Token cleared'})
  }

// Register
const users: { username: string; password: string }[] = [];

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: 'Username and password are required' });
    
  }

  // Check if user exist
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    res.status(409).json({ message: 'Username already exists' });
    
  }

  // Add user
  try {
    const newUser = await Users.create({ username, password });

    res.status(201).json({
      message: 'User created',
      username: newUser.username,
      password: newUser.password, // note: only include this in testing 
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};
