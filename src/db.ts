/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/quotes */
import { MongoClient } from 'mongodb';
const {
  MONGO_URI = "mongodb+srv://flan02:FDIGZn5agPcDy0nC@curriculumvitae.i63qivu.mongodb.net/tvShows?retryWrites=true&w=majority",
} = process.env;

export const client = new MongoClient(MONGO_URI);
export const db = client.db();