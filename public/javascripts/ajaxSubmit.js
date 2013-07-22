$(function() {
    console.log('DOM is ready');
    $('#survey').on('submit', function(e) {
        e.preventDefault();
        console.log("'hijacked the default submit");
        var selected = $('input:checked').val();
        $.ajax({
            url: 'ajax/test.html',
            data: {answer: selected},
            success: function(data) {
                console.log('ajax sent: ' + data);
            },
            dataType: 'json'
        });

    });
});