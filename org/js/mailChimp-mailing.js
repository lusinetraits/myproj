var launchPage = {
    url: 'subscribe',
    sent: false
}
$(document).ready( function() {
    $('#sInputEmail').bind({
        focus: function(){
            $('#error').slideUp();
            if($(this).val() == 'your@email.com') {
                $(this).val('');
            }
        },
        blur: function() {
            if($(this).val() == '') {
                $(this).val('your@email.com');
            }
        }
    });

    $('#submit-email').click( function(e) {
        e.preventDefault();
        $('#error').slideUp();
        $('#resp').html('');
       // $('#submit-email').attr('disabled', true);
        if($('#sInputEmail').val().match(/^\S+@\S+\.\S+$/)/* && launchPage.sent !== true && $('#sInputEmail').val() != 'your@email.com' */) {
            // POST email address
            $.post(launchPage.url, { sInputEmail: $('#sInputEmail').val() },
                function(data) {
                    if(data.match(/class='subscribe'/)){
                       // $('#sInputEmail').attr('disabled', true);
                        $('#resp').html(data);
                        $('.subscribe').css('display', 'block');
                        $('#resp').animate({ opacity: 'toggle' }, 'slow');
                       // $('.hide-me').animate({ opacity: 0 }, 'slow');
                     /*   launchPage.sent = true;*/
                    } else {
                        //$('#submit-email').attr('disabled', false);
                        $('#error').html(data);
                        $('#error').slideDown();
                    }
                });
        } else if(launchPage.sent == true) {

        } else {
            $('#submit-email').attr('disabled', false);
            $('#error').html('<p class="error">Please enter a valid email address.</p>');
            $('#error').slideDown();
        }
    });

    $('#subInputEmail').bind({
        focus: function(){
            $('#errorF').slideUp();
            if($(this).val() == 'your@email.com') {
                $(this).val('');
            }
        },
        blur: function() {
            if($(this).val() == '') {
                $(this).val('your@email.com');
            }
        }
    });

    $('#submit-email-footer').click( function(e) {
        e.preventDefault();
        $('#errorF').slideUp();
        $('#respF').html('');
       // $('#submit-email-footer').attr('disabled', true);
        if($('#subInputEmail').val().match(/^\S+@\S+\.\S+$/) /* && launchPage.sent !== true && $('#subInputEmail').val() != 'your@email.com'*/ ) {
            // POST email address
            $.post(launchPage.url, { sInputEmail: $('#subInputEmail').val() },
                function(data) {
                    if(data.match(/class='subscribeF'/)){
                       // $('#subInputEmail').attr('disabled', true);
                        $('#respF').html(data);
                        $('.subscribeF').css('display', 'block');
                        $('#respF').animate({ opacity: 'toggle' }, 'slow');
                       // $('.hide-me').animate({ opacity: 0 }, 'slow');
                       /* launchPage.sent = true;*/
                    } else {
                        //$('#submit-email').attr('disabled', false);
                        $('#errorF').html(data);
                        $('#errorF').slideDown();
                    }
                });
        } else if(launchPage.sent == true) {

        } else {
            $('#submit-email-footer').attr('disabled', false);
            $('#errorF').html('<p class="error">Please enter a valid email address.</p>');
            $('#errorF').slideDown();
        }
    });
});