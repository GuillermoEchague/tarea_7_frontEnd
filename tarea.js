// Array de productos

const products = [
  {
    name: "Laptop",
    category: "electrónica",
    price: 1200,
    stock: 5,
    discount: 0,
  },
  {
    name: "Televisor",
    category: "electrónica",
    price: 800,
    stock: 3,
    discount: 10,
  },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  {
    name: "Mesa de comedor",
    category: "hogar",
    price: 700,
    stock: 2,
    discount: 0,
  },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];

// 1. Filtrar Productos con Descuento
const discountedProducts = products.filter((product) => product.discount > 0);
console.log("Productos con descuento:", discountedProducts);

// 2. Calcular el Precio Final con Descuento
const productsWithFinalPrice = discountedProducts.map((product) => ({
  ...product,
  priceAfterDiscount: product.price - (product.price * product.discount) / 100,
}));
console.log("Productos con precio final:", productsWithFinalPrice);

// 3. Identificar Productos con Stock Bajo
const lowStockProducts = [];
for (const product of products) {
  if (product.stock < 5) {
    lowStockProducts.push(product);
  }
}
console.log("Productos con stock bajo:", lowStockProducts);

// 4. Actualizar el Stock de un Producto
function updateStock(productName, stockToAdd) {
  try {
    // Encontrar el producto por nombre
    const product = products.find(
      (p) => p.name.toLowerCase() === productName.toLowerCase()
    );
    if (!product) {
      throw new Error(
        `El producto "${productName}" no se encuentra en el inventario.`
      );
    }
    // Actualizar el stock
    product.stock += stockToAdd;
    console.log(
      `El stock de "${productName}" se actualizó correctamente. Nuevo stock: ${product.stock}`
    );
  } catch (error) {
    console.error(error.message);
  }
}

// Prueba de actualización de stock
updateStock("Laptop", 5); // Actualizar un producto existente
updateStock("Tablet", 10); // Intentar actualizar un producto inexistente

// 5. Resumen por Categorías
function getCategorySummary() {
  const categorySummary = {};
  for (const product of products) {
    const category = product.category;
    // Incrementar el contador de la categoría o inicializarlo
    categorySummary[category] = (categorySummary[category] || 0) + 1;
  }
  return categorySummary;
}

// Prueba del resumen por categorías
const summary = getCategorySummary();
console.log("Resumen por categorías:", summary);
