
const divElement = document.querySelector(`#element`);
const Form = document.querySelector(`#Form`);
const Save = document.querySelector(`#Save`);
const Color = document.querySelector(`input[name="chooseColor"]`)


Save.addEventListener(`click`, () => {
    let form = Form.value
    let color = Color.value
    divElement.classList.add(form)
    divElement.style.backgroundColor = color
});
