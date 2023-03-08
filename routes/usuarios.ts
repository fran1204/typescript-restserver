import { Router } from "express";
import { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } from '../controllers/usuarios';

const router = Router();

// TODO: Faltan los middlewares para validar el ID y los demás campos que se le envía
router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);


export default router;