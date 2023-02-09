const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) //элемент находится над плейсхолдером, куда мы можем поместить
    placeholder.addEventListener('dragenter', dragenter) //когда заходим на территорию плейсхолдера
    placeholder.addEventListener('dragleave', dragleave) //когда перетащили, но вышли
    placeholder.addEventListener('drop', dragdrop) //отпустили
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}
