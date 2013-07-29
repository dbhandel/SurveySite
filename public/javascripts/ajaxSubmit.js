$(function() {
    var currentQ = 0;
    console.log('DOM is ready');
    $('#survey').on('submit', function(e) {
        e.preventDefault();
        var selected = $('input:checked').val();
        $.ajax({
            url: '/' + currentQ,
            data: {answer: selected},
            success: function (data) {
                $('p').text(data.question.q);
                $('#a1').contents()[1].nodeValue = data.question.a1;
                // Alternative, without the use of .contents()
                // $('#a1')[0].childNodes[1].nodeValue = data.question.a1;

                //$('input#1').text(data.question.a1);
                //$('label#1').append(data.question.a1);
                //$('label#1').append(data.question.a1);
                //$('input#1').parent().clear();
                //$('input#1').parent().text('').append(data.question.a1);
                //$('input#1').parent().append(data.question.a1);
            },
            dataType: 'json'
        });
        currentQ++;
    });
});