var sentences = new Array ('Welcome','I am', 'Jagsharan Preet Singh Khahra', 'I am Electrical Engineer', 'Web Developer', 'and Writer', 'Send messages to', 'to@jpsk.me','or find @Jagshrn');

var timer = 5000;

$(document).ready(function(){

    var total = sentences.length - 1;

    for (var i = 0; i <= total; i++) {

        $('#box').append('<p class="sl" id="textBox'+i+'"></p>');

        var max = sentences[i].length - 1;

        for (var j = 0; j <= max; j++) {
            $('#textBox'+i).append('<span style="transition: ' + Math.random()*3 + 's; transition-delay: ' + Math.random() + 's;">' + sentences[i].charAt(j) + '</span>');
        };

    };

    var maxBox = $('#box > p').length;
    var r = 0;

    $('#textBox' + r).addClass('active');

    setInterval(function(){

        $('#textBox' + r).removeClass('active');

        r++;

        if (r == maxBox) {
            r = 0;
        }

        setTimeout(function(){
            $('#textBox' + r).addClass('active');
        }, 2000);

    }, timer);

});
