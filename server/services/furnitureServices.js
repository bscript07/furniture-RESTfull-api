const Furniture = require("../models/Furniture")

exports.getAll = () => Furniture.find();
exports.getOne = (furnitureId) => Furniture.findById(furnitureId);
exports.create = (furnitureData) => Furniture.create(furnitureData);
