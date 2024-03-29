const wrapper = document.querySelector('.wrapper')

const func = async () => {
    // получаем данные с сервера
    const response = await fetch('https://dummyjson.com/users')

    // сохраняем данные в переменную data
    const data = await response.json()

    console.log(data);

    data.users.map((el) =>{
        wrapper.innerHTML += `
        <div class="card">
        <img src=${el.image} alt="">
        <h2>${el.firstName} ${el.lastName}</h2>
        <h3>${el.birthDate}</h3>
        <p>${el.university}</p>
        <b>${el.email}</b>
        <button>Купить</button>
    </div>
        `
    })
}

func()