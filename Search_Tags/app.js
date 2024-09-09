const content = document.querySelector('.content')
const input = document.querySelector('.content input')
const removeAllBtn = document.querySelector('.remove-all-btn')

let tags = ['HTML', 'CSS']

function renderTags() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += `
            <li>
                ${tag}
                <i class="fa-solid fa-xmark" onclick=removeTag(${i})></i>
            </li>
        `
    }
    content.appendChild(input)
    input.focus()
}

renderTags()

function removeTag(index) {
    tags.splice(index, 1)
    renderTags()
}

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        tags.push(input.value.trim())
        input.value = ''
        renderTags()
    }
})

removeAllBtn.addEventListener('click', () => {
    tags = []
    renderTags()
})
