import express from 'express';

import {home} from '../controllers/homeCont.mjs';
import {shop} from '../controllers/shopCont.mjs';
import {blog} from '../controllers/blogCont.mjs';
import {about} from '../controllers/aboutCont.mjs';
import {sproduct} from '../controllers/sproductCont.mjs';
import {form_submission} from '../controllers/homeCont.mjs';

const router = express.Router();

router.get('/home',home);
router.get('/shop',shop);
router.get('/sproduct',sproduct);
router.get('/blog',blog);
router.get('/about',about);
router.post('/home',form_submission);

export default router;