
/**
 * Javascript da tela de produto
 */
var Produto = {
    
	/**
	 * Construtor default.
	 * 
	 * @returns {undefined}
	 */		
	init : function() {
		Produto.bind.elements();
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
                Produto.action.select(this);
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
        * Mostrar o container do menu selecionado.
        */
        select: function(menuElement){
            
            $('.menu_container').removeClass("selected");
            $(menuElement).addClass("selected");

            $('.container').hide();
            var container = $(menuElement).data("container");
            $(container).show();

        }
    
    }
};

$(Produto.init);