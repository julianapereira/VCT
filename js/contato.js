
/**
 * Javascript da tela de Contato.
 */
var Contato = {
    
	/**
	 * Construtor default.
	 * 
	 * @returns {undefined}
	 */		
	init : function() {
		Contato.bind.elements();
	},
    
	/**
	 * Utilizado para criar o bind das ações nos elementos da tela.
	 */    
    bind: {
    	
    	/**
    	 * Bind dos elementos da tela.
    	 */
        elements: function() {

            $('#enviar').click(function() {
                Contato.action.formSubmit();
            });

            $('.closeButton').click(function() {
                VCT.action.closeFormMessage();
            });

        }
        
    },
    
	/**
	 * Todos os métodos utilizados na tela ou vinculados via bind.
	 * 
	 * @type type
	 */      
    action: {

        /**
        * Realiza o submit do form
        */
        formSubmit: function(){

            if( $("#empresa").val() == "" || $("#nome").val() == "" || $("#mensagem").val() == ""
                || $("#telefone").val() == "" || $("#email").val() == "" ){
                VCT.action.showFormMessage("Favor preencher <br> os campos obrigatórios.");
                return;
            }    

            var message = Contato.action.createEmailMessage();
            VCT.ajax.sendMail( "Entre em Contato",  message );
            VCT.action.clearForm();

        }, 

        /**
        * Utilizado para contruir a mensagem de email.
        */
        createEmailMessage: function(){

            var emailHtmlMessage = "<h3>Contato</h3><br>";
            emailHtmlMessage += "Empresa: " + $("#empresa").val() + "<br>";
            emailHtmlMessage += "Nome: " + $("#nome").val() + "<br>";
            emailHtmlMessage += "Telefone: " + $("#telefone").val() + "<br>";
            emailHtmlMessage += "Email: " + $("#email").val() + "<br>";
            emailHtmlMessage += "Mensagem: " +  $("#mensagem").val() + "<br>";

            return emailHtmlMessage;

        }
    
    }
};

$(Contato.init);