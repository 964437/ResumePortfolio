var navanchortag = document.querySelector('.nav-menu a');
// console.log(navanchortag);

for(var i=0; i<navanchortag.length; i++){
    navanchortag[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowercase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        // var targetSectionCoordinates = targetSection.getBoundingClientRect();
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
                window.scrollBy(0,50);
        },50);
    });
}