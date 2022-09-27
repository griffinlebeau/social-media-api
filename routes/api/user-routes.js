const router = require('express').Router();

const { getAllUsers,
        getOneUserById,
        createUser,
        updateUser,
        deleteUser } = require('../../controllers/user-controller');

router.route('/')
                .get(getAllUsers)
                .post(createUser);

router.route('/:id')
                .get(getOneUserById)
                .put(updateUser)
                .delete(deleteUser);
                
module.exports = router;