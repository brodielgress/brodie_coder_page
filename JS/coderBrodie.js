function game() {
    
}

let all_hrefs = document.querySelectorAll("a");

all_hrefs.forEach(function(single_href) {
    single_href.addEventListener('click', function(){
        this.classList.add('visited');
    })
});