import { Request, Response } from 'express';
//import { User } from '../modules/users';
//import { db } from '../config/db';
import Users from '../modules/Users';


// Sort function
export const fetchAllUsers = async (req: Request, res: Response) => {
  const search = req.query.search as string;
  const sort = req.query.sort as string;

  try {
    const query: any = {};
    if (search) query.username = { $regex: search, $options: 'i' };

    const sortOrder = sort === 'desc' ? -1 : 1;

    const users = await Users.find(query).sort({ username: sortOrder });
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

/*
//Fetch user by id
export const fetchUser = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
  const sql = `
    SELECT
    user.id AS user_id,
    user.username AS user_name,
    user.is_admin AS user_is_admin,
    user.created_at AS user_created_at
    
    FROM users
    WHERE user_id = ?
    `

    const [rows] = await db.query<RowDataPacket[]>(sql, [id]);
    //res.json(rows[0]);
    res.json(formatUser(rows));
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};

const formatUser = (rows: any) =>  {
  const formatedUser = {
    id:           rows[0].user_id, 
    content:      rows[0].user_name, 
    done:         rows[0].user_password, 
    created_at:   rows[0].user_created_at 
    
  };
  return formatedUser; 
};


//Post new user
export const createUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password ) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }

  try {
    const sql = `
    INSERT INTO users (username, password)
    VALUES (?, ?)
  `;
    const [result] = await db.query<ResultSetHeader>(sql, [
      username,
      password
    ]);
    res.status(201).json({
      message: 'User created',
      id: result.insertId,
      username,
      password
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

//Update Patch User
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params; // Get the ID from the URL parameters
  const { username, password } = req.body;
  if (!username || !password ) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }
  try {
    // Build dynamic SET clause based on provided fields
    const updates = [];
    const values = [];

    if (username) {
      updates.push('username = ?');
      values.push(username);
    }

    if (password) {
      updates.push('password = ?');
      values.push(password);
    }

    // Add the ID to the values array
    values.push(id);

    const sql = `
    UPDATE users
    SET ${updates.join(', ')}
    WHERE id = ?
    `;

    const [result] = await db.query<ResultSetHeader>(sql, values);
    res.status(200).json({
      message: 'User updated',
      id: parseInt(id),
      updatedFields: {
        ...(username && { username }),
        ...(password && { password }),
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const sql = `
      DELETE FROM users
      WHERE id = ?
    `;
    const [result] = await db.query<ResultSetHeader>(sql, [id]);
    if (result.affectedRows === 0) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json({ message: 'User deleted' });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    res.status(500).json({ error: message });
  }
};

*/