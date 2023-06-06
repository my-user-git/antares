document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.section-size__item').forEach(function (TabsName) {
        TabsName.addEventListener('click', function (event) {
            let el = this
            el.classList.add('section-size__active')
            document.querySelectorAll('.section-size__desc').forEach(item => {
                if (item != el) {
                    item.classList.remove('section-size__desc-active')
                }
            })
            document.querySelectorAll('.section-size__item').forEach(item => {
                if (item != el) {
                    item.classList.remove('section-size__active')
                }
            })
            console.log(document.querySelectorAll('.section-size__desc'))
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.section-size__desc').forEach(function (TabsDesc) {
                TabsDesc.classList.remove('section-size__desc-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('section-size__desc-active')
            console.log(event.currentTarget.dataset.path)
        })
    })
})