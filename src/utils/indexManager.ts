import users  from '../models/users.model'; 
let isAgeIndexCreated = false;

export const ensureIndexCreated = async (age:number) => {
  if (!isAgeIndexCreated) {
    await users.collection.createIndex({ age }, { 
      background: true, 
      unique: false 
    });
    isAgeIndexCreated = true;
  }
};