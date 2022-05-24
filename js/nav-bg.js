const toggleRoundedFounder = () => {
    // Bootstrap responsive - small devices
    const founderImg = document.querySelector('#founderImg')
    const founderText = document.querySelector('#founderText')
    if (innerWidth <= 768) {
        // Remove borders from founder's message
        founderImg.classList.remove('rounded-start')
        founderText.classList.remove('rounded-end')
    } else {
        founderImg.classList.add('rounded-start')
        founderText.classList.add('rounded-end')
    }
}

window.addEventListener('load', () => {
    // Style navigation based on scroll
    document.addEventListener('scroll', () => {
        const main = document.querySelector('main')
        const rect = main.getBoundingClientRect()
        const absoluteRectY = rect.y + scrollY
        const nav = document.querySelector('nav')
        const navbarToggler = document.querySelector('.navbar-toggler')
        if (scrollY > absoluteRectY) {
            nav.classList.add('bg-dark')
            navbarToggler.classList.add('bg-light')
        } else {
            nav.classList.remove('bg-dark')
            navbarToggler.classList.remove('bg-light')
        }
        toggleRoundedFounder()
    })
})

window.addEventListener('resize', () => {
    toggleRoundedFounder()
})