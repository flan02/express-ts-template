/* eslint-disable import/no-extraneous-dependencies */
import { Response, Request, NextFunction } from 'express';
import { Todo, TodoWithId, Todos } from './todos.model';
import { InsertOneResult } from 'mongodb';

export async function findAll(_req: Request, res: Response<TodoWithId[]>, next: NextFunction) {
  try {
    console.log('mongodb connected 🚀');
    const result = await Todos.find();
    const todos = await result.toArray();
    res.json(todos);
  } catch (error) {
    next(error);
  }
}

export async function createOne(req: Request<{}, InsertOneResult>, res: Response<InsertOneResult<TodoWithId>>, next: NextFunction) {
  try {
    const validateResult = await Todo.parse(req.body);
    const insertResult = await Todos.insertOne(validateResult);
    res.json(insertResult);
  } catch (error) {
    next(error);
  }
}