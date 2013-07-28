
/**
 * Javascript da tela de orcamento.
 */
var Orcamento = {
    
	/**
	 * Construtor default.
	 * 
	 * @returns {undefined}
	 */		
	init : function() {
		Orcamento.bind.elements();
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
                Orcamento.action.formSubmit();
            });

        }
        
    },

    /**
    * Todas as chamadas ajax.
    */
    ajax: {

        /**
        * Utilizado para enviar um email.
        */
        sendMail: function(){

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
            
            var empresa = $("#empresa");
            var contato = $("#contato");
            var telefone = $("#telefone");
            var email = $("#email");

            if( empresa.val() && contato.val() && telefone.val && email.val() ){
                $(".container_message_error").show();
                return;
            }    

            $(".container_message_success").show();
            Orcamento.ajax.sendMail();

        }
    
    }
};

$(Orcamento.init);