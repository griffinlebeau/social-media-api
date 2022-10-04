const router = require('express').Router();

const { getAllThoughts,
        getOneThoughtById,
        createThought,
        updateThought,
        deleteThought,
        addReaction,
        removeReaction } = require('../../controllers/thought-controller');

router.route('/') // /api/thoughts
                .get(getAllThoughts) 

router.route('/:userId')// /api/thoughts/:userId
                .post(createThought);

router.route('/:thoughtId') // /api/thoughts/:thoughtId
                .get(getOneThoughtById)
                .put(updateThought)
                .delete(deleteThought);
            
router.route('/:thoughtId/reactions') // /api/thoughts/:thoughtId/reactions
                .post(addReaction);
            
router.route('/:thoughtId/reactions/:reactionId')
                .delete(removeReaction);
                
module.exports = router;