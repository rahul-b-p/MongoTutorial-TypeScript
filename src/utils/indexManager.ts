import users  from '../models/users.model'; 
let isAgeIndexCreated = false;

export const ensureIndexCreated = async () => {
  if (!isAgeIndexCreated) {
    await users.collection.createIndex({ age:1 }, { 
      background: true, 
      unique: false 
    });
    isAgeIndexCreated = true;
  }
};