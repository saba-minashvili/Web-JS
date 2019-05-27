function addEvents(){
    let btns = document.getElementsByClassName('btns__item');
    for (let i=0; i < btns.length; i++) {
        btns[i].addEventListener('click', activeTab);
    }
}

addEvents();

function activeTab(){
    console.log('this',this);
    let btns = document.getElementsByClassName('btns__item');
    for (let i = 0; i < btns.length; i++) {			  
        btns[i].classList.remove('active');			 			
    }

    this.classList.add('active');

    for (let i = 0; i < btns.length; i++) {			  
        if (btns[i].classList.contains('active')) {
            showContent(i);
        };			 			
    }
}

function showContent(index){
    let content = document.getElementsByClassName('content__item');
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove('show');
    }
    content[index].classList.add('show');
}