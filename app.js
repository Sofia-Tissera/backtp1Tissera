class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        // Validar que el código no esté repetido
        if (this.products.some((product) => product.code === code)) {
            console.log("El código ya está en uso. No se puede agregar el producto.");
            return;
        }

        const product = {
            id: this.nextProductId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(product);
        this.nextProductId++;
        console.log("Producto agregado:", product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.id === id);
        if (product) {
            return product;
        } else {
            console.log("Producto no encontrado. ID:", id);
            return null;
        }
    }
}

// Ejemplo de uso
const manager = new ProductManager();
manager.addProduct("Producto 1", "Descripción 1", 10.99, "imagen1.jpg", "P1", 50);
manager.addProduct("Producto 2", "Descripción 2", 19.99, "imagen2.jpg", "P2", 30);

console.log("Todos los productos:", manager.getProducts());
console.log("Producto con ID 1:", manager.getProductById(1));
console.log("Producto con ID 3:", manager.getProductById(3));