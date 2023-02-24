const listadoDeProductos = [
    {
      id: 1,
      nombre: 'Sofa with Back and Seat Cushions',
      precio: 50000,
      imagen: './assets/img/sofas/3-Seat-Sofa-with-Removable-Back-and-Seat-Cushions-and-4-Comfortable-Pillows.webp',
      cantidad: 100,
      category: 'sofas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 2,
      nombre: 'Alazyhome Metal Bed Frame',
      imagen: './assets/img/camas/Alazyhome-Sturdy-Metal-Platform-Bed-Frame.webp',
      precio: 100000,
      cantidad: 45,
      category: 'camas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 3,
      nombre: 'Accent Chair Upholstered',
      precio: 65000,
      imagen: './assets/img/sillas/Accent-Chair,living-room-chairs-Upholstered-Accent-Chair.webp',
      cantidad: 90,
      category: 'sillas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 4,  
      nombre: 'Industrial Dining Table Set',
      precio: 75000,
      imagen: './assets/img/mesas/3-Piece-Industrial-Dining-Table-Set-with-Bench-and-Sided-Drawer-for-Kitchen.webp',
      cantidad: 50,
      category: 'mesas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 5,
      nombre: 'BIKAHOM Mid Century Modern Solid Wooden', 
      precio: 85000,
      imagen: './assets/img/camas/BIKAHOM-Mid-Century-Modern-Solid-Wooden-Platform-Bed-with-Adjustable-Height-Headboard-for-Bedroom.webp',
      cantidad: 30,
      category: 'camas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 6,
      nombre: 'Francie Mid Century Modern',
      precio: 90500,
      imagen: './assets/img/mesas/Francie-Mid-Century-Modern-5-Piece-Dining-Set-by-Christopher-Knight-Home-ffcb8059-dae0-49ca-ae4d-1fec925b27ba_600.webp',
      cantidad: 85,
      category: 'mesas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 7,
      nombre: 'Aston Modern Solid Chair',
      precio: 80000, 
      imagen: './assets/img/sillas/Aston-Modern-Solid-wood-Accent-Chair.webp',
      cantidad: 100,
      category: 'sillas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 8,
      nombre: 'Chesterfield Seater Sofa',
      precio: 10000,
      imagen: './assets/img/sofas/Chesterfield-3-Seater-Sofa-Modern-Velvet-Upholstered-Sofa-with-Tufted-Back-and-Wood-Circle-Legs,-Lounge-Couch-for-Living-Room.webp',
      cantidad: 95,
      category: 'sofas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 9,
      nombre:'Grain Wood Furniture',
      precio: 80500,
      imagen: './assets/img/camas/Grain-Wood-Furniture-Greenport-Louvered-Platform-Bed.webp',
      cantidad: 70,
      category: 'camas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 10,
      nombre: 'HOMCOM Rustic Country Wood',
      precio: 90000,
      imagen: './assets/img/mesas/HOMCOM-Rustic-Country-Wood-Top-3-Piece-Kitchen-Table-Dining-Set-with-2-Matching-Chairs-&-Versatile-Design-for-Small-Space.webp',
      cantidad: 60,
      category: 'mesas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 11,
      nombre: 'Carbon Loft Hofstetler',
      precio: 11500,
      imagen: './assets/img/sillas/Carbon-Loft-Hofstetler-Armless-Accent-Chair.webp',
      cantidad: 80,
      category: 'sillas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 12,
      nombre: 'Futzca Convertible Sectional Sofa',
      precio: 12000,
      imagen: './assets/img/sofas/Futzca-Convertible-Sectional-Sofa-Couch-with-Reversible-Chaise,-Modern-Linen-Fabric-L-Shaped-Couch-for-Small-Space.webp',
      cantidad: 92,
      category: 'sofas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 13,
      nombre: 'Grain Wood Furniture Montauk',
      precio: 12000,
      imagen: './assets/img/camas/Grain-Wood-Furniture-Montauk-Queen-Solid-Wood-Panel-Bed.webp',
      cantidad: 90,
      category: 'camas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 14,
      nombre: 'Lifestorey Lydon Dining',
      precio: 12000,
      imagen: './assets/img/mesas/Lifestorey-Lydon-5-piece-Dining-Set.webp',
      cantidad: 81,
      category: 'mesas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 15,
      nombre: 'High Back Solid Wood',
      precio: 40000,
      imagen: './assets/img/sillas/High-Back-Solid-Wood-Armrest-Backrest-Leisure-Chair-Accent-Chair.webp',
      cantidad: 100,
      category: 'sillas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 16,
      nombre: 'Jaxx Zipline Queen size Convertible',
      precio: 90000,
      imagen: './assets/img/sofas/Jaxx-Zipline-Queen-size-Convertible-Sleeper-Loveseat-and-Ottomans-Bed-8a51de72-6fd6-44ef-a536-8a24b970055d_600.webp',
      cantidad: 75,
      category: 'sofas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 17,
      nombre: 'Grain Wood Furniture Shaker',
      precio: 7900 ,
      imagen: './assets/img/camas/Grain-Wood-Furniture-Shaker-Panel-Queen-Solid-Wood-Platform-Bed.webp',
      cantidad: 62,
      category: 'camas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 18,
      nombre: 'Simple Living Baxter Dining',
      precio: 9900,
      imagen: './assets/img/mesas/Simple-Living-Baxter-Dining-Set-with-Storage-Ottomans.webp',
      cantidad: 94,
      category: 'mesas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 20,
      nombre: 'Kassi Contemporary Slipper',
      precio: 5000,
      imagen: './assets/img/sillas/Kassi-Contemporary-Slipper-Accent-Chair-by-Christopher-Knight-Home.webp',
      cantidad: 93,
      category: 'sillas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 21,
      nombre: 'Morden Fort Couches',
      precio: 40500,
      imagen: './assets/img/sofas/Morden-Fort-Couches-for-Living-Room,-Sofas-for-Living-Room-Furniture-Sets,-Sofa,-Fabric,-Linen.webp',
      cantidad: 93,
      category: 'sofas',
      descripcion: 'DESCRIPCION',
  
    },
    {
      id: 22,
      nombre: 'Kotter Home Kayson Metal',
      precio: 40500,
      imagen: './assets/img/camas/Kotter-Home-Kayson-Metal-Headboard-and-Footboard.webp',
      cantidad: 77,
      category: 'camas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 23,
      nombre: 'Simple Living Country Cottage',
      precio: 75000,
      imagen: './assets/img/mesas/Simple-Living-Country-Cottage-Drop-Leaf-3-piece-Dining-Set.webp',
      cantidad: 10,
      category: 'mesas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 24,
      nombre: 'Mid Century Accent Armchair',
      precio: 89600,
      imagen: './assets/img/sillas/Mid-Century-Accent-Armchair-Solid-Hardwood-Upholstered.webp',
      cantidad: 64,
      category: 'sillas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 25,
      nombre: 'Sofa Bed Sleeper Purple',
      precio: 31000,
      imagen: './assets/img/sofas/Sofa-Bed-Sleeper-Purple-Fabric.webp',
      cantidad: 30,
      category: 'sofas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 26,
      nombre: 'Kotter Home Solid Wood',
      precio: 55000,
      imagen: './assets/img/camas/Kotter-Home-Solid-Wood-Mid-century-Platform-Bed.webp',
      cantidad: 78,
      category: 'camas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 27,
      nombre: 'Simple Living Knox',
      precio: 57800,
      imagen: './assets/img/mesas/Simple-Living-Knox-3-Piece-Nook-Set.webp',
      cantidad: 53,
      category: 'mesas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 28,
      nombre: 'Moser Bay Mignon',
      precio: 10560,
      imagen: './assets/img/sillas/Moser-Bay-Mignon-32-Wide-Tufted-Wingback-Accent-Chair-and-Ottoman.webp',
      cantidad: 43,
      category: 'sillas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 29,
      nombre: 'StocktoN Sofa by Bush Furniture',
      precio: 25000,
      imagen: './assets/img/sofas/Stockton-85W-Sofa-by-Bush-Furniture.webp',
      cantidad: 34,
      category: 'sofas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 30,
      nombre: 'Porch Den Bayview Charcoal Grey',
      precio: 85000,
      imagen: './assets/img/camas/Porch-Den-Bayview-Charcoal-Grey-Upholstered-Bed-08dcf185-9e92-49c2-9785-5205e3705f6c_600.webp',
      cantidad: 64,
      category: 'camas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 31,
      nombre: 'Simple Living Templetont',
      precio: 18000,
      imagen: './assets/img/mesas/Simple-Living-Templeton-5-Piece-Dining-Set.webp',
      cantidad: 25,
      category: 'mesas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 32,
      nombre: 'Quentin High Back Club Chair',
      precio: 89750,
      imagen: './assets/img/sillas/Quentin-High-Back-Club-Chair-by-Christopher-Knight-Home-fd027320-ba81-49ad-a313-796f3178c8cb_600.webp',
      cantidad: 10,
      category: 'sillas',
      descripcion: 'DESCRIPCION',
    },
    {
      id: 33,
      nombre: 'Three Seats Without Chaise',
      precio: 67800,
      imagen: './assets/img/sofas/Three-Seats-Without-Chaise-Concubine-Solid-Wood-Frame-Sofa.webp',
      cantidad: 30,
      category: 'sofas',
      descripcion: 'DESCRIPCION',
    }
  ];

const splitProducts = size => {
    let dividedProducts = [];
    for (let i = 0; i < listadoDeProductos.length; i += size)
      dividedProducts.push(listadoDeProductos.slice(i, i + size))
      return dividedProducts;
};

const productsController = {
    dividedProducts: splitProducts(8),
    nextProductsIndex: 1,
    productsLimit: splitProducts(8).length,
};