import { Router } from 'express';
import { TutorController } from '../controllers/tutor.controller';
import { petRoutes } from './pet.routes';

const router = Router();

// Rotas para tutores
router.get('/', TutorController.getAllTutors);
router.post('/', TutorController.createTutor);
router.get('/:id', TutorController.getTutorById);
router.put('/:id', TutorController.updateTutor);
router.delete('/:id', TutorController.deleteTutor);

// Rotas aninhadas para pets de um tutor específico
router.use('/:tutorId/pets', petRoutes);

export { router as tutorRoutes };