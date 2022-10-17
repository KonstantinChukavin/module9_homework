
const windowResult = document.querySelector('.result');
const btnGetNumber = document.querySelector('.get__number');

btnGetNumber.addEventListener('click', () => {
    const valueWidth = document.querySelector('.input__one').value;
    const valueHeight = document.querySelector('.input__two').value;

    if (valueHeight < 100 || valueHeight > 300 || valueWidth < 100 || valueWidth > 300) {
        windowResult.innerHTML = `
    <div class="card"><p style="color:#FF0000">Одно из чисел вне диапазона от 100 до 300!</p></div>
    `;
    } else {
        fetch(`https://picsum.photos/${valueWidth}/${valueHeight}`)
            .then((response) => {
                const cards = `
            <div class="card"><img src="${response.url}" class="card-image"/></div>
            `;
                windowResult.innerHTML = cards;
            })
            .catch(() => { console.log('error') });
    }
})