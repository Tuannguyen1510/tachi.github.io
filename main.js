const buyBtns= document.querySelectorAll('.City-button')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal-close')
const modalContainer = document.querySelector('.modal-container')
function showBuyTickets(){
    modal.classList.add('open')
}
function hideBuyTickets(){
    modal.classList.remove('open')
}
for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}
modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})

