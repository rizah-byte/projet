const titles= document.querySelectorAll('.title');
window.addEventListener('scroll',()=>{
    titles.forEach(title=>{
        const position=title.getBoundingClientRect().top;
        const windowHeight=window.innerHeight;
        if(position<windowHeight-100){
            title.classList.add('active');
        }
        //Merci
    });
});
