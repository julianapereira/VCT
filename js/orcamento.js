
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

            $("#espessura").click(function() {
                Orcamento.action.showOptions();
            });
        	
            $("#espessuras div").click(function() {
                Orcamento.action.selectOption(this);
            });

            $(".radio").click(function() {
                Orcamento.action.selectRadioButton(this);
            });            

            $('#enviar').click(function() {
                Orcamento.action.formSubmit();
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
        * Mostrar as opcoes de espessuras.
        */
        showOptions: function(){
            $("#espessuras").show();
        },

        /**
        * Selecionar uma espessura.
        */
        selectOption: function(option){
            $("#espessuras").hide();
            $("#espessura").html($(option).text());
        },

        /**
        * Selecionar um radio button.
        */
        selectRadioButton: function(radio){
            var group = $(radio).data("group");
            var value = $(radio).data("value");
            $("."+group).removeClass("checked");
            $(radio).addClass("checked");
            $("#"+group).val(value);
        },

        /**
        * Realiza o submit do form
        */
        formSubmit: function(){
            
            if( $("#empresa").val() == "" || $("#contato").val() == "" || $("#telefone").val() == "" || $("#email").val() == "" ){
                VCT.action.showFormMessage("Favor preencher <br> os campos obrigatórios.");
                return;
            }    

            var message = Orcamento.action.createEmailMessage();
            VCT.ajax.sendMail( "Orçamento",  message );
            VCT.action.clearForm();

        }, 

        /**
        * Utilizado para contruir a mensagem de email.
        */
        createEmailMessage: function(){

            var emailHtmlMessage = "<h3>Orçamento</h3><br>";
            emailHtmlMessage += "Empresa: " + $("#empresa").val() + "<br>";
            emailHtmlMessage += "Contato: " + $("#contato").val() + "<br>";
            emailHtmlMessage += "Telefone: " + $("#telefone").val() + "<br>";
            emailHtmlMessage += "Email: " + $("#email").val() + "<br>";
            emailHtmlMessage += "Quantidade: " + $("#quantidade").val() + "<br>";
            emailHtmlMessage += "Espessura: " + $("#espessura").text() + "<br>";
            emailHtmlMessage += "Número de Cores: " + $("#numeroCores").val() + "<br>";
            emailHtmlMessage += "Tarja Magnética: " + $("#tarjaMagnetica").val() + "<br>";
            emailHtmlMessage += "Coercividade: " + $("#coercividade").val() + "<br>";
            emailHtmlMessage += "Painel de Assinatura: " + $("#painelAssinatura").val() + "<br>";
            emailHtmlMessage += "Etiqueta Raspadinha: " + $("#etiquetaRaspadinha").val() + "<br>";
            emailHtmlMessage += "Personalização: " + $("#personalizacao").val() + "<br>";
            emailHtmlMessage += "Quatidade de Linhas de Personalização: " + $("#qtdLinhasPersonalizacao").val() + "<br>";
            emailHtmlMessage += "Cor da Personalização: " + $("#corPersonalizacao").val() + "<br>";
            emailHtmlMessage += "Observações: " +  $("#observacoes").val() + "<br>";

            return emailHtmlMessage;

        }
    
    }
};

$(Orcamento.init);