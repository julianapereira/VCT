
/**
 * Javascript da tela de servico
 */
var Servico = {
    
    /**
     * Construtor default.
     * 
     * @returns {undefined}
     */     
    init : function() {
        Servico.bind.elements();
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
                Servico.action.select(this);
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

$(Servico.init);