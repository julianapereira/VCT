
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
    	
    	onBefore: function(){

    		var elem = $(".bullet_selected")[0];

    		if(elem == undefined){

    			$($("#bullets").children()[0]).addClass("bullet_selected");

    		}else{

	    		$(elem).removeClass("bullet_selected");
	    		if($(elem).next().length == true){
	    			$(elem).next().addClass("bullet_selected");
	    		}else{
	    			$($(elem).parent().children()[0]).addClass("bullet_selected");
	    		}

    		}

    	}
    
    }
};

