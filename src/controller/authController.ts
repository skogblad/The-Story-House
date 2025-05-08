import jwt from 'jsonwebtoken'
import { Request, Response } from 'express';

// Log in
export const login = async (req: Request, res: Response) => {
    const {username, password} = req.body;
    if (username === undefined || password === undefined) {
      res.status(400).json({message: "Username and password are required"})
    }
  
    if (username === "admin" && password === "123") {
      const accessToken = jwt.sign({username}, process.env.JWT_SECRET || "", {expiresIn: "7d"});
  
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24 * 7 // Expires in 7 days
      })
      res.json({message: 'You are logged in'});
    } else {
      res.status(401).json({message: "Username or password are wrong"})
    }
  }


  // Log out
  export const logout = (req: Request, res: Response) => {
    res.clearCookie('accessToken')
    res.json({message: 'Token cleared'})
  }

  // Register
const users: { username: string; password: string }[] = [];

export const register = (req: Request, res: Response) => {
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
  users.push({ username, password });

  // Create accesstoken
  const accessToken = jwt.sign({ username }, process.env.JWT_SECRET || '', { expiresIn: '7d' });

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  res.status(201).json({ message: 'User registered successfully' });
};