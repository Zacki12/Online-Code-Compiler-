const compiler = () =>{

    const html= document.getElementById("html");
    const css= document.getElementById("css");
    const js= document.getElementById("js");


    const code= document.getElementById("result").contentWindow.document;
    
    
    
    document.getElementById("myBtn").onclick = function (){
        code.open();
        code.writeln(

            html.value + "<style>"
            +css.value+
        "</style>" + "<script>" +js.value+"</script>"

            
        );
        
    }





}


compiler();