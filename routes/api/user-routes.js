const router = require('express').Router();
const { getAllUsers,
        getOneUserById,
        createUser,
        updateUser,
        deleteUser } = require('../controllers/user-controller')
router.route('/')
                .get(getAllUsers)
                .post(getOneUserById);
router.route('/:id')
                .get(createUser)
                .put(updateUser)
                .delete(deleteUser);
module.exports = router;