import { Router } from 'express';
import { readUser } from '../controllers';

export const router = Router();


router.get('/user', readUser);
