const Service = require("../models/Service");

/**
 * Get all the services
 * @param {*} req
 * @param {*} res
 */
exports.services = async (req, res) => {
  // #swagger.tags = ['Service']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Services" },
  } */
  try {
    const services = await Service.findAll();

    res.status(200).json(services);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Get a service by id
 * @param {*} req
 * @param {*} res
 */
exports.details = async (req, res) => {
  // #swagger.tags = ['Service']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Service" },
  } */
  try {
    const id = req.params.id;
    const service = await Service.findByPk(id);

    if (!service) throw new Error("An error occured.");

    res.status(200).json(service);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Create a new service
 * @param {*} req
 * @param {*} res
 */
exports.create = async (req, res) => {
  // #swagger.tags = ['Service']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Service" },
  } */
  try {
    const service = await Service.create(req.body);

    res.status(201).json(service);
  } catch (e) {
    res.status(500).json({ error: "An error occured." });
  }
};

/**
 * Update a service
 * @param {*} req
 * @param {*} res
 */
exports.update = async (req, res) => {
  // #swagger.tags = ['Service']
  /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/Service" },
  } */
  const id = req.params.id;

  try {
    const service = await Service.update(req.body, { where: { id: id } });

    res.status(200).json(service);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};

/**
 * Delete a service
 * @param {*} req
 * @param {*} res
 */
exports.delete = async (req, res) => {
  // #swagger.tags = ['Service']
  const id = req.params.id;

  try {
    const service = await Service.destroy({ where: { id: id } });

    res.status(204).json(service);
  } catch (e) {
    res.status(404).json({ error: "An error occured." });
  }
};
