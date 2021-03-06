
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
            $.post('http://vctbrasil.com.br/SMTP/Email.php', 
                { 
                    emaildestinatario: "televendas@vctbrasil.com.br,comercial@vctbrasil.com.br",
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
            $(".containerMessage").html(message);
            $(".container_message").show();
        },

        /**
        * Utilizado para ferrar a mensagem do formulário.
        */
        closeFormMessage: function(){
            $(".containerMessage").html("");
            $(".container_message").hide();
        },

        /**
        * Limpar os dados do formulário.
        */
        clearForm: function(){
           $("input").val("");
           $("textarea").val("");
        }

    }

    
};

$(VCT.init);