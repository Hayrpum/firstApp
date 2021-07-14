
const description = document.querySelector('.input')
const button = document.querySelector('.button')
const container = document.querySelector('.bigBlock')
const sortButton = document.querySelector('.icon-sort')

let multiplay = -1

function createLine() {
    if (container.lastElementChild && container.lastElementChild.firstElementChild.value === '') {
        return
    }
    const labelElement = document.createElement('label');
    labelElement.classList.add('block')
    const newInput = document.createElement('input')
    newInput.classList.add('input')
    const newImg = document.createElement('img')
    newImg.classList.add('cross')
    newImg.src = "./icon/Group 77.png"

    container.append(labelElement)
    labelElement.append(newInput)
    labelElement.append(newImg)

    newInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            createLine()
        }
    })

    newImg.addEventListener('click', (event) => {
        if (labelElement.parentElement.childElementCount > 1) {
            event.target.parentElement.remove()
        }
        else {
            return
        }
    })


    newImg.addEventListener('mouseover', (event) => {
        event.target.src = "./icon/Group 70.png"
    })
    newImg.addEventListener('mouseout', (event) => {
        event.target.src = "./icon/Group 77.png"
    })

    newInput.focus()

}

button.addEventListener('click', (event) => {
    createLine()
})

createLine()


sortButton.addEventListener('mouseover', (event) => {
    if (multiplay === -1) {
        event.target.src = "./icon/Group 73.png"
    } else if (multiplay === 1) {
        event.target.src = "./icon/Group 91.png"
    }
})
sortButton.addEventListener('mouseout', (event) => {
    if (multiplay === -1) {
        event.target.src = "./icon/Group 74.png"
    } else if (multiplay === 1) {
        event.target.src = "./icon/Group 90.png"
    }
})


sortButton.addEventListener('click', (event) => {
    if (multiplay === -1) {
        event.target.src = "./icon/Group 91.png"
    }
    else if (multiplay === 1) {
        event.target.src = "./icon/Group 73.png"
    }

    multiplay *= -1

    const descriptionOne = document.querySelector('label')
    const descriptionAll = document.querySelectorAll('label')
    const arr = []

    let hasEmptyLine = false
    descriptionAll.forEach((label, index) => {
        if (index === descriptionAll.length - 1 && label.firstElementChild.value === '') {
            // НЕ НАДА ПУШИТЬ!!!
            hasEmptyLine = true
            return
        }
        arr.push(label)
        console.log(arr)


    })
    arr.sort((label1, label2) => {
        const firstLabel = label1.firstElementChild.value;
        const secondLabel = label2.firstElementChild.value;
        const result = secondLabel.localeCompare(firstLabel) * (multiplay * -1)

        return result


    })

    function render(array) {
        const lableClear = document.querySelector('.bigBlock')
        lableClear.append(descriptionOne);
        lableClear.innerHTML = ''
        array.forEach((element) => {
            lableClear.append(element);
        });
        if (hasEmptyLine) {
            createLine()
        }

    }
    render(arr)
})






