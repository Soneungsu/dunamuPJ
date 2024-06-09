// url 에서 parameter 추출
function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) { sval = temp[1]; }
    }
    return sval;
}

function openMenu(node) {
    if(!node.closest('header').classList.contains('bg')) node.closest('header').classList.add('bg');
    node.classList.add('close');
    node.setAttribute('onclick', 'closeMenu(this)');
    document.querySelector('.navigation').style.display = 'block';
}

function closeMenu(node) {
    node.closest('header').classList.remove('bg');
    if(window.scrollY === 0) node.classList.remove('close');
    node.setAttribute('onclick', 'openMenu(this)');
    document.querySelector('.navigation').style.display = 'none';
}

$(function() {
    $('header').on('mouseenter', function(e) {
        this.classList.add('bg');
        this.querySelector('.navigation').style.display = 'flex';

        $('header').on('mouseleave', function(e) {
            this.classList.remove('bg');
            this.querySelector('.navigation').style.display = 'none';
        })
    })

    $('header').on('click', '.navigation a.tit', function(e) {
        this.parentElement.classList.contains('on')?this.parentElement.classList.remove('on'):this.parentElement.classList.add('on')
    })

    if(document.querySelector('.nav_tab .select')){
        document.querySelector('.nav_tab .select').addEventListener('click', function(e) {
            document.querySelector('.select_popup').classList.add('on');
        });
    }

    window.addEventListener('scroll', function() {
        if(window.scrollY > 0) {
            document.querySelector('header').classList.add('bg');
        }else{
            document.querySelector('header').classList.remove('bg');
        }
    });
});