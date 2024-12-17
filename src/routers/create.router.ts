import {Router} from 'express';
import { createUser } from '../controllers';

export const router = Router();

router.post('/user',createUser)

