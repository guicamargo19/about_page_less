$(document).ready(function() {
    $("form").on('submit', function(event) {
        event.preventDefault();
        $("form").validate({
            rules: {
                nome: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                mensagem: {
                    required: true,
                }  
            },
            messages: {
                nome: 'Por favor, digite seu nome',
                email: 'Por favor, digite seu e-mail',
                mensagem: 'Por favor, digite uma mensagem'
            },
            submitHandler: function() {
                $('#mensagem-sucesso').show();
                $('#nome').val('');
                $('#email').val('');
                $('#mensagem').val('');
            }
        })
    })
});


