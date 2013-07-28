
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
		Index.bind.elements();
	},
    
	/**
	 * Utilizado para criar o bind das ações nos elementos da tela.
	 */    
    bind: {
    	
    	/**
    	 * Bind dos elementos da tela.
    	 */
        elements: function() {
        	
        	$('#banner').cycle({
        		prev: '#prev', 
    			next: '#next',
    			before: Index.action.onBefore
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
        * Utilizado para mudar o bullet do banner depois que o evento do cycle acontecer.
        */
    	onBefore: function(){
    		$('.bullet_selected').removeClass("bullet_selected");
    		$(this.alt).addClass("bullet_selected");
    	}
    
    }
};

$(Index.init);