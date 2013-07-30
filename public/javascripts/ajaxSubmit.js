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
                $('p#question').text(data.question.q);
                $('#a1').contents()[1].nodeValue = data.question.a1;
                $('#a2').contents()[1].nodeValue = data.question.a2;
                $('#a3').contents()[1].nodeValue = data.question.a3;
                $('#a4').contents()[1].nodeValue = data.question.a4;
            },
            dataType: 'json'
        });
        currentQ++;
    });
});