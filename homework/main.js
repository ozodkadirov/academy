let car = [
    {
        img: 'https://www.topgear.com/sites/default/files/images/news-article/2021/06/40e1c45e083453cf6a1b6f8c006ab93e/0x0-ModelSPLAID-1.jpg?w=1280&h=720' ,
        name:'Tesla Model S',
        price: 27000,
        condition: 'good'
    },
    {
        img: 'https://static.tildacdn.com/tild3731-3636-4635-b936-306262643733/56a698bc9df62e7ed52e.jpg' ,
        name:'Lamborghini Aventador',
        price: 47000,
        condition: 'good'
    },
    {
        img: 'https://wroom.ru/i/cars2/ferrari_812superfast_1.jpg' ,
        name:'Ferrari 812',
        price: 54000,
        condition: 'good'
    },
    {
        img: 'https://wallpapercave.com/wp/wp1674079.jpg    ' ,
        name:' Ford Mustang',
        price: 52000,
        condition: 'good'
    },
    {
        img: 'https://www.sim-autopro.ru/upload/img/64a359bdbfbbb.jpg' ,
        name:'Mercedes-AMG',
        price: 65000,
        condition: 'good'
    },
    {
        img: 'http://bugattiv.ru/wp-content/uploads/2017/04/bugatti_chiron-2016_18.jpg' ,
        name:'Bugatti Chiron',
        price: 78000,
        condition: 'good'
    },
    {
        img: 'https://imageio.forbes.com/specials-images/imageserve/5e11bd4db122cb0007953e6f/0x0.jpg?format=jpg&amp;width=1200  ' ,
        name:'Ford Mustang Mach-E',
        price: 71000,
        condition: 'good'
    },
    {
        img: 'https://images.dealer.com/ddc/vehicles/2019/Porsche/911/Coupe/perspective/front-left/2019_54.png' ,
        name:'Porsche 911',
        price: 62000,
        condition: 'good'
    },
    {
        img: 'https://avatars.mds.yandex.net/i?id=2f58823691719f78492c7c8c519138a1b19015bb-10851049-images-thumbs&n=13' ,
        name:'McLaren 720S',
        price: 86000,
        condition: 'good'
    },
    {
        img: 'https://www.wheels97.com/tr:w-1200,dpr-1/images/car-color-images/lamborghini/lamborghini-huracan/nero-helene_1Iizl258t.jpg' ,
        name:'Huracan Evo',
        price: 72000,
        condition: 'good'
    },
    {
        img: 'https://avatars.mds.yandex.net/i?id=519a79bdab65eadf28352b2afaad29e72e4e5222-10385077-images-thumbs&n=13' ,
        name:'Corvette',
        price: 49000,
        condition: 'good'
    },
    {
        img: 'https://cdn.hiconsumption.com/wp-content/uploads/2022/04/2023-Toyota-GR-Supra-0-Hero-1074x711.jpg' ,
        name:'Toyota Supra',
        price: 59000,
        condition: 'good'
    },
    {
        img: 'https://cdn10.bigcommerce.com/s-4df9uz5/products/21614/images/100429/AA78276-1__71436.1599890802.1280.1280.jpg' ,
        name:'Pagani Huayra',
        price: 85000,
        condition: 'good'
    },
    {
        img: 'https://avatars.mds.yandex.net/get-autoru-vos/1964973/13f74f08ddde7bd933794a556f8cec79/1200x900' ,
        name:'KIA',
        price: 16000,
        condition: 'good'
    },
    {
        img: 'https://purepng.com/public/uploads/large/purepng.com-mclaren-650s-blue-carcarvehicletransportmclaren-961524658327ovnru.png' ,
        name:'McLaren 600LT',
        price: 77000,
        condition: 'good'
    },
    {
        img: 'https://img123.s3.amazonaws.com/2017/08/05/2f/317df7b2e4af4a0f_0ec0067aececbb.jpg' ,
        name:'Lexus LC 500',
        price: 17000,
        condition: 'good'
    },
    {
        img: 'https://cdn.motor1.com/images/mgl/WRg7L/s1/ultra-rare-2005-ford-gt-gtx1-roadster-for-sale.jpg' ,
        name:'Ford GT',
        price: 111000,
        condition: 'good'
    },
    {
        img: 'https://avatars.mds.yandex.net/i?id=2b2aa7cba25ed4b1e852566e197fe119924ba31c-9140040-images-thumbs&n=13' ,
        name:'Rolls-Royce',
        price: 90000,
        condition: 'good'
    },
    {
        img: 'https://www.avtovykupru.ru/wp-content/uploads/2021/05/polo1_2_white.png' ,
        name:'Volkswagen',
        price: 14000,
        condition: 'good'
    },
    {
        img: 'https://i.trse.ru/2015/06/Hyundai4.jpg' ,
        name:'Hyundai',
        price: 23000,
        condition: 'good'
    },
    {
        img: 'https://i.pinimg.com/originals/d7/a8/68/d7a868851906a28f5571d8d5b8901912.jpg' ,
        name:'Audi R8',
        price: 36000,
        condition: 'good'
    },
    {
        img: 'https://www.storodnik.ru/uploads/images/cars/porsche/taycan/big.png' ,
        name:'Porsche Taycan',
        price: 43000,
        condition: 'good'
    },
]


const wrapper = document.querySelector('.car__wrapper')

car.map(( item ) => {
    wrapper.innerHTML += `
    <div class="card">
            <img src=${item.img} alt="">
        <h4>${item.name}</h4>
            <h2>${item.price}</h2>
            <p>${item.condition}</p>
            <button>Купить</button>
           
        </div>
    `
})
