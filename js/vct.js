
/**
 * Javascript da tela de VCT.
 */
var VCT = {
    
    /**
    * Todas as chamadas ajax.
    */
    ajax: {

        /**
        * Utilizado para enviar um email.
        */
        sendMail: function(_emaildestinatario, _assunto, _mensagemHTML){
            $.post('http://vamosporpartes.com.br/SMTP/Email.php', 
                { 
                    emaildestinatario: _emaildestinatario,
                    assunto : _assunto,
                    mensagemHTML : _mensagemHTML
                 } , 
                function(data) {
                    if(data){
                        VCT.action.showFormMessage("Mensagem enviada com sucesso.");
                    }else`{
                       VCT.action.showFormMessage("Não foi possível enviar o email.");
                    }
                }
            ).fail(
                function() { 
                     VCT.action.showFormMessage("Não foi possível enviar o email.");
                }
            );
        }

    },
    
};

$(VCT.init);