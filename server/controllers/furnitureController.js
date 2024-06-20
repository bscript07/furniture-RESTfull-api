const router = require('express').Router();
const furnitureService = require('../services/furnitureServices');

router.get('/', async (req, res, next) => {
    
        const furnitures = await furnitureService.getAll();
        res.json(furnitures);

});

router.get('/:furnitureId', async (req, res, next) => {
    try {

        const furniture = await furnitureService.getOne(req.params.furnitureId);
        if (!furniture) {
            return res.status(404).json({ message: 'Furniture not found' });
        }

        res.json(furniture);
    } catch (err) {
        console.error(`Error fetching furniture with ID ${req.params.furnitureId}:`, err);
        next(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const furnitureData = req.body;
        const furniture = await furnitureService.create(furnitureData);
        res.status(201).json(furniture);
    } catch (err) {
        console.error('Error creating new furniture:', err);
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
