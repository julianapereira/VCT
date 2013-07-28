
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
        	
            $('.menu_container').click(function() {
                Contato.action.formSubmit();
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
            
            if( $("#empresa").val() && $("#nome").val() && $("#telefone").val() && $("#email").val() ){
                Contato.action.showFormMessage("Favor preencher <br> os campos obrigatórios.");
                return;
            }    

            VCT.ajax.sendMail( $("#email").val(), "Entre em Contato", Contato.action.createEmailMessage() );

        }, 

        /**
        * Utilizado para mostrar a mensagem do formulário.
        */
        showFormMessage: function(message){
            $(".container_message").html(message));
            $(".container_message").show();
        },

        /**
        * Utilizado para contruir a mensagem de email.
        */
        createEmailMessage: function(){

            var emailHtmlMessage = "<h3>Contato</h3><br>";
            var emailHtmlMessage += "Empresa: " + $("#empresa").val() + "<br>";
            var emailHtmlMessage += "Nome: " + $("#nome").val() + "<br>";
            var emailHtmlMessage += "Telefone: " + $("#telefone") + "<br>";
            var emailHtmlMessage += "Email: " + $("#email").val() + "<br>";
            var emailHtmlMessage += "Mensagem: " +  $("#mensagem").val() + "<br>";

            return emailHtmlMessage;

        }
    
    }
};

$(Contato.init);