import './style.css'
const input = document.querySelector('#input')
const defaultText = document.querySelector('#default-text')
const debounceText = document.querySelector('#debounce-text')

document.addEventListener('DOMContentLoaded', main)

const updateText = debounceInput((value) => {
    debounceText.innerText = value
}, 1000)

function main() {
    input.addEventListener('input', (e) => {
        defaultText.innerText = e.target.value
        updateText(e.target.value)
    })
}

// Fire its callback after delay. If callback fire before delay its clear timer and run again
function debounceInput(callback, delay) {
    let timer
    return (...arg) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback(...arg)
        }, delay)
    }
}
