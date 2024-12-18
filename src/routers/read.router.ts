import { Router } from 'express';
import { readAge, readUser, readUserByAge } from '../controllers';
import { ensureAgeIndex } from '../middlewares';

export const router = Router();


router.get('/user', readUser);

router.get('/user/:age',ensureAgeIndex, readUserByAge )

router.get('/age',readAge)
