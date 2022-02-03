const Pet = require("../models/pets.model");

module.exports.findAllPets = (req, res) => {
  Pet.find()
    .then(allDaPets => res.json( allDaPets ))
    .catch(err => res.json({ message: "Something ain't right!", error: err }));
};

module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(oneSinglePet => res.json({ pet: oneSinglePet }))
        .catch(err => res.json({ message: "Hey woah hey slow down wait man", error: err }));
};

module.exports.createNewPet = (req, res) => {
  Pet.create(req.body)
    .then(newlyCreatedPet => res.json({ pet: newlyCreatedPet }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingPet = (req, res) => {
  Pet.updateOne({ _id: req.params.id }, req.body, { new: true })
    .then(updatedPet => res.json({ pet: updatedPet }))
    .catch(err => res.json({ message: "Try again holmes", error: err }));
};

module.exports.deleteAnExistingPet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Ah ah ah, you didn't say the magic password", error: err }));
};