/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL REVEAL ====================*/
const sr = ScrollReveal({
    distance: '20px',
    duration: 2800,
    viewfactor: 0.5,
})


sr.reveal(`.section__title,
     .about__description`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.home__data,
    .about__description,
    .contact__left`,{
    origin: 'left',
    interval: 100
})

sr.reveal(`.about_img,
    .contact__right`,{
    origin: 'right',
    interval: 100
})

sr.reveal(`.button,
    .faq__card,
    .faq__div,
    .footer__center,
    .social__title,
    .social__list,
    .copy_rights`,{
    origin: 'bottom',
    interval: 100
})


let desktop_reveal = ScrollReveal({
    mobile: false,
})

desktop_reveal.reveal(`.crs_mid`,{
    origin: 'top',
    interval: 100,
})

desktop_reveal.reveal(`.crs_left`,{
    origin: 'left',
    interval: 100,
})

desktop_reveal.reveal(`.crs_right`,{
    origin: 'right',
    interval: 100,
})