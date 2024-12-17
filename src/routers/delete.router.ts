import { Router } from 'express';
import { deleteUser } from '../controllers';

export const router = Router();

router.delete('/user/:id',deleteUser);