// const questions = document.querySelectorAll('.question')

// questions.forEach((question) => {
//     const btn = question.querySelector('.question-btn');
//     btn.addEventListener('click', () => {
//         questions.forEach((other) => {
//             if (other !== question){
//                 other.classList.remove('show-text')
//             }
//         })
//         question.classList.toggle('show-text')
//     })
// })


const btns = document.querySelectorAll('.question-btn')
const questions = document.querySelectorAll('.question')

btns.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        const question = e.currentTarget.parentElement.parentElement
        questions.forEach((other) => {
            if (other !== question){
                other.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text')
    })
})