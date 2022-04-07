const menu = document.querySelector('#nav-icon')
const menuLinks = document.querySelector('.navbar__item')

menu.addEventListener('mouseenter', function() {
    menuLinks.classList.toggle('active');
    
});

// menuLinks.addEventListener('mouseleave', function() {
//     menuLinks.classList.toggle('inactive');
// });






var blink_speed = 1000; 
var t = setInterval(function () {
    var ele = document.getElementById('blink');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);


document.querySelectorAll('a[href^="#').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});


// $(
//       function(){
//             $(window).resize(
//                   function(){
//                         //do something when window resizes like:
//                         var $winH = $(this).height();
//                         var $winW = $(this).width();

//                         if ($winH )
                        
//                         $('img').width($winW / 10); //set width = width of window - 100 px
//                         $('img').height($winH / 10); //set height = height of window - 100 px
                        
//                   }
//             )
//       }
// );
    
    


