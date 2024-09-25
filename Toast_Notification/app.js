const buttonShows = document.querySelectorAll('button')

buttonShows.forEach(buttonShow => {
    buttonShow.addEventListener('click', (e) => {
        createToast(e.target.getAttribute('class'))
    })
});

const toasts = {
    success: {
        icon: '<i class="fa-solid fa-circle-check"></i>',
        msg: '<span>This is a Success message</span>'
    },
    warning: {
        icon: ' <i class="fa-solid fa-circle-exclamation"></i>',
        msg: '<span>This is a Warning message</span>'
    },
    error: {
        icon: '<i class="fa-solid fa-triangle-exclamation"></i>',
        msg: '<span>This is a Error message</span>'
    }
}

function createToast(status) {
    let toast = document.createElement('div')
    toast.className = `toast ${status}`

    toast.innerHTML = `
        ${toasts[status].icon}
        ${toasts[status].msg}
        <div class="countdown"></div>
    `
    document.querySelector('.toasts').appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toast_hide 1s ease forwards'
    }, 3000);

    setTimeout(() => {
        toast.remove()
    }, 4000);
}