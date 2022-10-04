const router = require('express').Router();

const { getAllUsers,
        getOneUserById,
        createUser,
        updateUser,
        deleteUser,
        addFriend,
        removeFriend } = require('../../controllers/user-controller');

router.route('/') // /api/users
                .get(getAllUsers) 
                .post(createUser);

router.route('/:userId') // /api/users/:userId
                .get(getOneUserById)
                .put(updateUser)
                .delete(deleteUser);

router.route('/:userId/friends/:friendId') // /api/users/:userId/friends/:friendId
                .post(addFriend)
                .delete(removeFriend)
                
module.exports = router;