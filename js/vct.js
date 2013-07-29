
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
        sendMail: function(_assunto, _mensagemHTML){
            $.post('http://vamosporpartes.com.br/SMTP/Email.php', 
                { 
                    emaildestinatario: "raf.bueno@gmail.com",
                    assunto : _assunto,
                    mensagemHTML : _mensagemHTML
                 } , 
                function(data) {
                    if(data){
                        VCT.action.showFormMessage("Mensagem enviada com sucesso.");
                    }else{
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

    /**
     * Todos os métodos utilizados na tela ou vinculados via bind.
     * 
     * @type type
     */      
    action: {

        /**
        * Utilizado para mostrar a mensagem do formulário.
        */
        showFormMessage: function(message){
            $(".container_message").html(message);
            $(".container_message").show();
        }

    }

    
};

$(VCT.init);