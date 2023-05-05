$(".dark-btn").click (
    function(){
         $(".box").toggleClass("dark");
         $("body").toggleClass("dark");
        



        }
    
    
    );

    $(".glow-btn").click (
        function(){
             $(".box").toggleClass("glow");
             
            
    
    
    
            }
        
        
        );

        $(".spin-btn").click (
            function(){
                 $(".box").toggleClass("spin");
                 
                
        
        
        
                }
            
            
            );

            $(".rvl-btn").click (
                function(){
                     $(".thoughts").css({"opacity":"1", "border":"1px solid" } );
                      $( ".rvl-btn").hide(); 
                     
            
            
            
                    }
                
                
                );

                $( ".draggable" ).draggable();