import ModelProduct from "../models/ModelProduct.js";

const getProduct = async (req, res) => {
  try {
    const product = await ModelProduct.find();
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await ModelProduct.findById(id);
  if (!product) return res.status(404).json({ message: "Data not found" });

  try {
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new ModelProduct(product);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = await ModelProduct.findById(id);
  if (!product) return res.status(404).json({ message: "Data not found" });

  try {
    const updatedProduct = await ModelProduct.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await ModelProduct.findById(id);
  if (!product) return res.status(404).json({ message: "Data not found" });
  try {
    const deletedProduct = await ModelProduct.findByIdAndDelete(id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export {
  getProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
