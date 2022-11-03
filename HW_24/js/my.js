const carImg = $(`#carImg`);
const carImgTitle = $(`#carImgTitle`)
const colorBtns = $(`#colorBtns`);
const API = `https://raw.githubusercontent.com/brightestsirius/Front-end-Pro-19/master/lesson_27/tesla.json`;

const renderColorBtns = (data) => {
    $(data).each((index, item) =>{ 
        let btn = $(`<button class="dot" style="background-color: ${item.color}"></button>`
    );
    btn.on(`click`, () => renderCar(item));
    colorBtns.append(btn);

})
}

const renderCar = (item) => {
    carImg.attr(`src`, 
    `https://mc-astro.github.io/tesla-roadster-colors/img/${item.img}.jpg`
    )
    carImg.attr(`alt`, item.title);
    carImgTitle.html(item.title);
    carImgTitle.css(`color`, item.color)
};



$.ajax({
    url: API,
    method: `GET`,
    success: data => {
        data = JSON.parse(data);
        renderColorBtns(data)

        renderCar(data[0])
        
    },
    error: (error) => console.log(error),
  });
  

  