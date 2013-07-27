/**
 * Javascript da tela inicial
 */
var Index = {
    
	/**
	 * Construtor default.
	 * 
	 * @returns {undefined}
	 */		
	init : function() {
		
	},
    
	/**
	 * Utilizado para criar o bind das ações nos elementos da tela.
	 */    
    bind: {
    	
    	/**
    	 * Bind dos elementos da tela.
    	 */
        elements: function() {
        	
        	$('#randomImage').cycle()

        }
        
    },
    
	/**
	 * Todos os métodos utilizados na tela ou vinculados via bind.
	 * 
	 * @type type
	 */      
    action: {
    	
    	
    
    }
};

//Inicializando o javascript da tela.
$(Index.init);
