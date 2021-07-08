// Update data on MongoDB with: npm run data:import
const products = [
  {
    name: 'Asus Rog Strix RTX 3070 TI',
    image: '/images/asusrogstrix3070TI.jpg',
    description: 'Asus Rog Strix GeForce RTX 3070 TI 8GB GDDR6X',
    brand: 'Asus',
    category: 'Graphics Card/GPU',
    price: 1300,
    countInStock: 2,
    rating: 4.5,
    numReviews: 6,
  },
  {
    name: 'Asus Rog Strix RTX 3080 TI',
    image: '/images/asusrogstrix3080TI.jpg',
    description: 'Asus Rog Strix GeForce RTX 3080 TI 8GB GDDR6X',
    brand: 'Asus',
    category: 'Graphics Card/GPU',
    price: 2500.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: 'Dell GeForce RTX 3080',
    image: '/images/dellrtx3080dualfan.jpg',
    description:
      'Dell GeForce RTX 3080 DUAL FAN 10GB GDDR6X 4Y12V Video Graphic Card GPU',
    brand: 'Dell',
    category: 'Graphics Card/GPU',
    price: 1700.99,
    countInStock: 5,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: 'MSI Gaming GeForce RTX 3080 Ti',
    image: '/images/msi3080TI.jpg',
    description:
      'MSI Gaming GeForce RTX 3080 Ti 12GB GDDR6X PCI Express 4.0 x16 Video Card RTX 3080 Ti Gaming X Trio 12G',
    brand: 'Sony',
    category: 'Graphics Card/GPU',
    price: 2200.99,
    countInStock: 0,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: 'NVIDIA GeForce RTX 3070 Founders',
    image: '/images/rtx3070founders.jpg',
    description:
      'NVIDIA GeForce RTX 3070 8GB GDDR6 PCI Express 4.0 Graphics Card - Dark Platinum and Black',
    brand: 'NVIDIA',
    category: 'Graphics Card/GPU',
    price: 499.99,
    countInStock: 1,
    rating: 5.0,
    numReviews: 20,
  },
  {
    name: 'NVIDIA GeForce RTX 3080 Founders',
    image: '/images/rtx3080founders.jpg',
    description:
      'NVIDIA GeForce RTX 3080 10GB GDDR6X PCI Express 4.0 Graphics Card - Titanium and Black',
    brand: 'NVIDIA',
    category: 'Graphics Card/GPU',
    price: 699.99,
    countInStock: 0,
    rating: 5.0,
    numReviews: 32,
  },
];

export default products;
