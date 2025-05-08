import { Request, Response } from 'express';
import Users from '../modules/Users';



// Sort function
export const fetchAllUsers = async (req: Request, res: Response) => {
  const search = req.query.search as string;
  const sort = req.query.sort as string;

  try {
    const query: any = {};
    if (search) query.username = { $regex: search, $options: 'i' };

    const sortOrder = sort === 'desc' ? -1 : 1;

    const users = await Users.find(query).sort({username: sortOrder })
      .select('+username');
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//Fetch user by id
export const fetchUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await Users.findById(id);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return; 
    }

    const formattedUser = {
      user_id: user._id,
      user_name: user.username,
      user_is_admin: user.is_admin,
      user_created_at: user.created_at,
    };

    res.json(formattedUser);
  } catch (error: any) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to retrieve user' });
  }
};

//Post new user
export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password ) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }

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

//Update Patch User
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { username, password } = req.body;
  
  if (!username || !password ) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }
  try {
    // Create an object to hold the fields to be updated
    const updates: { [key: string]: any } = {};

    if (username) updates.username = username;
    if (password) updates.password = password;

    // Find the user by ID and update the fields
    const user = await Users.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true }
    );
     
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return; 
    }

    res.status(200).json({ message: 'User updated', updatedFields: updates });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const deleteUser = await Users.findByIdAndDelete(id);

    if (!deleteUser) {
      res.status(404).json({ message: 'User not found' });
      return; 
    }
    res.json({ message: 'User deleted' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

