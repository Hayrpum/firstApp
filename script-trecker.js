const field = document.querySelector('.input-field')
const description = document.querySelector('.input')
const button = document.querySelector('.button')
const container = document.querySelector('.bigBlock')
const sortButton = document.querySelector('.icon-sort')

let multiplay = -1

const task = document.createElement('label');
task.classList.add('block')
const newInput = document.createElement('input')
newInput.classList.add('input')
const newImg = document.createElement('img')
newImg.classList.add('cross')
newImg.src = "./icon/Group 77.png"

function createLine() {
    const task = document.createElement('label');
    task.classList.add('block')
    const newInput = document.createElement('input')
    newInput.classList.add('input')
    const newImg = document.createElement('img')
    newImg.classList.add('cross')
    newImg.src = "./icon/Group 77.png"

    container.append(task)
    task.append(newInput)
    task.append(newImg)

    newInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            createLine()
        }
    })

    newImg.addEventListener('click', (event) => {
        event.target.parentElement.remove()

    })

    newImg.addEventListener('mouseover', (event) => {
        event.target.src = "./icon/Group 70.png"
    })
    newImg.addEventListener('mouseout', (event) => {
        event.target.src = "./icon/Group 77.png"
    })
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

    function res(array) {
        const lableClear = document.querySelector('.bigBlock')
        lableClear.append(descriptionOne);
        
        array.forEach((element) => {
            lableClear.append(element);
            element.remove()
        });
        if (hasEmptyLine) {
            createLine()
        }

    }
    res(arr)
})






