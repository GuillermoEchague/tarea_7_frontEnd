Gestor de Inventario de una Tienda

Tienes un array de productos de una tienda, cada uno con información sobre su nombre, categoría, precio, cantidad en inventario y descuento. Tu tarea es trabajar con este inventario utilizando programación funcional y estructuras de control.

1. Filtrar Productos con Descuento: Usa filter para obtener un nuevo array con los productos que tienen un descuento aplicado (es decir, discount > 0).


2. Calcular el Precio Final con Descuento: Usa map para calcular el precio final de los productos que tienen descuento y crea un nuevo array que incluya el priceAfterDiscount.


3. Identificar Productos con Stock Bajo: Usa un bucle para identificar los productos con menos de 5 unidades en inventario y guárdalos en un array nuevo.

4. Actualizar el Stock de un Producto: Crea una función que reciba el nombre de un producto y una cantidad a agregar. Usa un try...catch para verificar si el producto existe en el array. Si existe, incrementa su stock; si no, lanza un error.


5. Resumen por Categorías: Usa un bucle para contar cuántos productos hay en cada categoría (electrónica, hogar, alimentos) y devuelve un objeto con este resumen.


Array

const products = [
  { name: "Laptop", category: "electrónica", price: 1200, stock: 5, discount: 0 },
  { name: "Televisor", category: "electrónica", price: 800, stock: 3, discount: 10 },
  { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
  { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
  { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
  { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
];
