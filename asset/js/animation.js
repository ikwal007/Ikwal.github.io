// animasi text 
$(window).on('load', function() {
    $('.p-hilang').addClass('p-muncul');
    $('.btn-hilang').addClass('btn-muncul');
});
// akhir animasi text
// animasi read more
let more = document.querySelectorAll('.more');
for (let i = 0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active');
    })
}
// akhir animasi read more