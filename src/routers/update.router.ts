import { Router } from 'express';
import { updateUser } from '../controllers';

export const router = Router();

router.put('/user/:id',updateUser);