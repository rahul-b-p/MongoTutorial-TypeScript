import { Router } from 'express';
import { readUser, readUserByAge } from '../controllers';
import { ensureAgeIndex } from '../middlewares';

export const router = Router();


router.get('/user', readUser);

router.get('/user/:age',ensureAgeIndex, readUserByAge )
