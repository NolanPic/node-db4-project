const express = require('express');
const model = require('./model');

const router = express.Router();

router.get('/', (req, res) => {
    model.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Something went wrong getting recipes' });
        });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    model.getShoppingList(id)
        .then(list => {
            if(list.length) {
                res.status(200).json(list);
            }
            else {
                res.status(404).json({ error: 'No ingredient list exists for this recipe' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Something went wrong getting a shopping list' });
        });
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    model.getInstructions(id)
        .then(instructions => {
            if(instructions.length) {
                res.status(200).json(instructions);
            }
            else {
                res.status(404).json({ error: 'No instructions exist for this recipe' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Something went wrong getting instructions' });
        });
});

module.exports = router;
