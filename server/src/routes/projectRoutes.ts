import { Router } from 'express';
import { getProjects } from '../controllers/projectController';
import { createProject } from '../controllers/projectController';

const router = Router();

router.get('/', getProjects);
router.post('/', createProject);

export default router;
