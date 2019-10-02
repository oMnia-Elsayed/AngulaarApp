import { Product } from '../_model/product';


export class ProductService {

    products: Product[];
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Product A',
                price: 10, discount: 2, quantity: 3,
                images: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
            {
                id: 2,
                name: 'Product B',
                price: 40, discount: 2.5, quantity: 2,
                images: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
            {
                id: 3,
                name: 'Product C',
                price: 50, discount: 3, quantity: 5,
                images: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
            {
                id: 4,
                name: 'Product D',
                price: 50, discount: 3, quantity: 5,
                images: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
                description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
            },
            {
              id: 5,
              name: 'Product F',
              price: 30 , discount: 2.5 ,
              images: 'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg'
            },
        ];
    }

    getAll(): Product[] {
      return this.products;
    }


    getById(id: number): Product {
        return this.products.find(p => p.id === id);
    }

    addProduct(p: Product) {
        p.id = this.products.length + 1;
        this.products.push(p);
    }

    updateProduct(p: Product) {
        const i = this.products.findIndex(e => e.id === p.id);
        this.products[i] = p;
    }

    deleteProduct(id: number) {
        const i = this.products.findIndex(e => e.id === id);
        this.products.splice(i, 1);
    }
}
