
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
	 * Todos os métodos utilizados na tela ou vinculados via bind.
	 * 
	 * @type type
	 */      
    action: {

        /**
        * Realiza o submit do form
        */
        formSubmit: function(){
            
            if( $("#empresa").val() && $("#contato").val() && $("#telefone").val() && $("#email").val() ){
                Orcamento.action.showFormMessage("Favor preencher <br> os campos obrigatórios.");
                return;
            }    

            VCT.ajax.sendMail( $("#email").val(), "Orçamento", Orcamento.action.createEmailMessage() );

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

            var emailHtmlMessage = "<h3>Orçamento</h3><br>";
            var emailHtmlMessage += "Empresa: " + $("#empresa").val() + "<br>";
            var emailHtmlMessage += "Contato: " + $("#contato").val() + "<br>";
            var emailHtmlMessage += "Telefone: " + $("#telefone") + "<br>";
            var emailHtmlMessage += "Email: " + $("#email").val() + "<br>";
            var emailHtmlMessage += "Quantidade: " + $("#quantidade").val() + "<br>";
            var emailHtmlMessage += "Espessura: " + $("#espessura").val() + "<br>";
            var emailHtmlMessage += "Número de Cores: " + $("#numeroCores").val() + "<br>";
            var emailHtmlMessage += "Tarja Magnética: " + $("#tarjaMagnetica").val() + "<br>";
            var emailHtmlMessage += "Coercividade: " + $("#coercividade").val() + "<br>";
            var emailHtmlMessage += "Painel de Assinatura: " + $("#painelAssinatura").val() + "<br>";
            var emailHtmlMessage += "Etiqueta Raspadinha: " + $("#etiquetaRaspadinha").val() + "<br>";
            var emailHtmlMessage += "Personalização: " + $("#personalizacao").val() + "<br>";
            var emailHtmlMessage += "Quatidade de Linhas de Personalização: " + $("#qtdLinhasPersonalizacao").val() + "<br>";
            var emailHtmlMessage += "Cor da Personalização: " + $("#corPersonalizacao").val() + "<br>";
            var emailHtmlMessage += "Observações: " +  $("#observacoes").val() + "<br>";

            return emailHtmlMessage;

        }
    
    }
};

$(Orcamento.init);