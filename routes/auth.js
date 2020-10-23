const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/new',
            [//middlewares
                check('name', 'el nombre es obligatorio').not().isEmpty(),
                check('last_name', 'el apellido es obligatorio').not().isEmpty(),
                check('email', 'el email es obligatorio').isEmail(),
                check('password', 'el password es obligatorio').isLength({min:6}),
                check('picture', 'la imagen es obligatorio').not().isEmpty(),
                validateFields
            ],
            createUser);
router.post('./',
            [
                check('email', 'el email es obligatorio').isEmail(),
                check('password', 'el password es obligatorio').isLength({min:6}),
                validateFields
            ],
            loginUser);
router.post('./renew', revalidateToken);

module.exports = router;