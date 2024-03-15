let phones = [
    {
        img:'https://www.creditasia.uz/upload/iblock/316/smartfon-samsung-galaxy-a12-sm-a127f-dsn-32gb-red-1.jpg',
        price: 5250,
        oldPrice: 350,
        name: 'Samsung Galaxy 12'


    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP6olOVVXqv62PcQJhdebNd9S3LQpAEBV4TA&usqp=CAU',
        price: 2450,
        oldPrice: 350,
        name: 'OPPO 5 ULTRA'


    },
    {
        img:'https://olcha.uz/image/400x400/products/2020-06-18/xiaomi-redmi-note-9-pro-6128gb-tropical-green-global-14064-2.jpeg',
        price: 3250,
        oldPrice: 350,
        name: 'Redmi 9 note'


    },
    {
        img:'https://assets.asaxiy.uz/product/items/desktop/44f683a84163b3523afe57c2e008bc8c2022092114241486833ApwaRWowaz.png.webp',
        price: 1250,
        oldPrice: 350,
        name: 'Apple 14 Pro'


    },
    {
        img:'https://s3p.kattabozor.uz/ri/ada50bb4c1f962391de9a1a183d132027ae6fd01c1df0b9b570c8e28374c0c53_LJNM38_640l.jpg',
        price: 6250,
        oldPrice: 350,
        name: 'TEXNO SPARK'
    },
    {
        img:'https://m.media-amazon.com/images/I/71iAbxvu+pL.jpg',
        price: 199,
        oldPrice: 350,
        name: 'Nokia 2019'
    },
    {
        img:'https://mini-io-api.texnomart.uz/catalog/product/3560/356080/191203/48005070-a2a2-4ee0-b06a-48456578044d.webp',
        price: 180,
        oldPrice: 350,
        name: 'Vivo real 8'
    },
    {
        img:'https://cdn.mediapark.uz/imgs/40d480f3-db36-4663-842e-2e64f3e2dbea_%D0%A4%D0%AB%D0%98%D0%92%D0%A4%D0%AB%D0%981.webp',
        price: 250,
        oldPrice: 350,
        name: 'Redmi 13'
    },
    {
        img:'https://resizer.mail.ru/p/abea8b22-e936-5c5b-939e-3106d51f0a81/AQAKfw-WYKCbNvrJxtArhE26geBM4Ohp9lABU7JTUzk7KUcr-2wFhRxivLVvpScErxzzjFHGbTcVKFd1frmUE4iEBwo.png',
        price: 150,
        oldPrice: 350,
        name: 'Redmi'
    },
    {
        img:'https://assets.asaxiy.uz/product/items/desktop/f033ab37c30201f73f142449d037028d2024011711251245606EDsFNo7lK0.jpg',
        price: 120,
        oldPrice: 350,
        name: 'Honor'
    },
    {
        img:'https://mobile-review.com/all/wp-content/uploads/2022/03/1-23.jpg',
        price: 149,
        oldPrice: 350,
        name: 'Samsung A50'
    },
    {
        img:'https://avatars.mds.yandex.net/get-mpic/3934197/img_id1926878627582448929.jpeg/orig',
        price: 870,
        oldPrice: 350,
        name: 'Nokia 2019'
    },
    
]

const wrapper =  document.querySelector('.wrapper')
console.log(wrapper);


phones.map(( item ) => {
    wrapper.innerHTML += `
    <div class="card">
        <img src=${item.img} alt="">
        <h4>${item.name}</h4>
        <h2>${item.price}$</h2>
        <s>${item.oldPrice}$</s>
        <button>Купить</button>
    </div>
    `
})
