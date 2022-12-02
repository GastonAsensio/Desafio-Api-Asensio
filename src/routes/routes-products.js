const express = require("express");
const productsRouter = express.Router();
const Manager = require("../manager.js");
const manager = new Manager("src/productFile.json");

const midProducts = (req, res, next) => {
  const { title, price, thumbnail } = req.body;
  if (!title || !price || !thumbnail) return res.status(400).send({ err: "This data is required!" });
  next();
};

productsRouter.get("/", async (req, res) => {
  res.send(await manager.getAll());
});
productsRouter.get("/:id", async (req, res) => {
  res.send(await manager.getById(parseInt(req.params.id)));
});
productsRouter.post("/", async (req, res) => {
  res.send(await manager.createProduct(req.body));
});
productsRouter.put("/:id", async (req, res) => {
  res.send(await manager.modifyById(parseInt(req.params.id), req.body));
});
productsRouter.delete("/:id", async (req, res) => {
  res.send(await manager.deleteById(parseInt(req.params.id)));
});
productsRouter.delete("/", async (req, res) => {
  res.send(await manager.deleteAll(parseInt(req.params.id)))
} )

module.exports = productsRouter;
