$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
               scrollTop: target.offset().top
          }, 1000);
          return false;
      }
  }
});

function LoadImage() {
  for(let i=2001;i<=2022;i=i+2) {
  document.getElementById("timeline").innerHTML += "<li><div class='timeline-badge'>"+i+"</div><div class='timeline-panel'><div class='timeline-body'><p><img src='"+i+".jpg'></p></div></div></li>";
  document.getElementById("timeline").innerHTML += "<li class='timeline-inverted'><div class='timeline-badge warning'>"+(i+1)+"</div><div class='timeline-panel'><div class='timeline-body'><p><img src='"+(i+1)+".jpg'></p></div></div></li>";
}
}