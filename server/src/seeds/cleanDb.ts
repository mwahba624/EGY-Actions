import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    let modelExists = [];

    const model = models[modelName];
    if (model?.db?.db) {
      modelExists = await model.db.db.listCollections({ name: collectionName }).toArray();
    }

    if (modelExists.length > 0) {
      await db.dropCollection(collectionName);
    }
  } catch (error) {
    console.error('Error checking or dropping collection:', error);
    throw error;
  }
};
