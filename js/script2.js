$(document).ready(()=>{
    addrow()
    $("#btnCrear").click(buildTicket)
})

function calctotal(){
    let columnas = $(this).closest("tr").find("input");
    if($(columnas[2]).val().length > 0 && $(columnas[3]).val().length > 0) {
        let cantidad = $(columnas[2]).val();
        let precio = $(columnas[3]).val();
        $(columnas[4]).attr("value", parseInt(cantidad) * parseFloat(precio));
    }
}

function buildTicket() {
    var datos = $(document).find("input");
    var total = 0.0;
    var iva = 0.0; 
    var totalAbsoluto = 0.0;

    var rootcard = $('<div></div>');
        rootcard.addClass('card');
    
    var cardContent = $('<div></div>');
        cardContent.addClass('card-content');
        
        var cardTittle = $('<span></span>');
            cardTittle.addClass('card-tittle');

            var center =$('<center></center>');
                var h3 = $('<h3></h3>');
                    h3.text('** Malon Mart **');
                    center.append(h3);

                var h4 = $('<h4></h4>');
                    h4.text(' ************************');
                    center.append(h4);

                var space = $('<hr/>');
                    center.append(space);

                var rOw = $('<div></div>');
                    rOw.addClass('row');
            
                    var cOl = $('<div></div>');
                        cOl.addClass('col s2');
                        rOw.append(cOl);

                    var cOl = $('<div></div>');
                        cOl.addClass('col');
                        cOl.text(' Código');
                        rOw.append(cOl);

                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text(' Nombre');
                        rOw.append(cOl);

                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text(' Cantidad');
                        rOw.append(cOl);

                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text(' Precio');
                        rOw.append(cOl);
                
                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text(' Subtotal');
                        rOw.append(cOl);

            center.append(rOw);
    
        cardTittle.append(center);    

        
    let filas = datos.length/5; 

    for(i=0;i<filas;i++){
                var center =$('<center></center>');    
                    var rOw = $('<div></div>');
                        rOw.addClass('row');
     
                    var cOl = $('<div></div>');
                        cOl.addClass('col s2');
                        rOw.append(cOl);

                    var cOl = $('<div></div>');
                        cOl.addClass('col');
                        cOl.text($(datos[i*5]).val());
                        rOw.append(cOl);

                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.attr("style", "text-align: center;")
                        cOl.text($(datos[i*5+1]).val());
                        rOw.append(cOl);

                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text($(datos[i*5+2]).val());
                        rOw.append(cOl);

                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text($(datos[i*5+3]).val());
                        rOw.append(cOl);
         
                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text($(datos[i*5+4]).val());
                        total = parseFloat($(datos[i*5+4]).val()) + total;
                        rOw.append(cOl);

            center.append(rOw);

        cardTittle.append(center);    

    }
            var center =$('<center></center>');
                var rOw = $('<div></div>');
                    rOw.addClass('row');
            
                    var cOl = $('<div></div>');
                        cOl.addClass('col s8');
                        rOw.append(cOl);
                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text('Subtotal');
                        rOw.append(cOl);
                    var cOl = $('<div></div>');
                        cOl.addClass('col center');
                        cOl.text(total);
                        rOw.append(cOl);

            center.append(rOw);

            var rOw = $('<div></div>');
                rOw.addClass('row');
            
                    var cOl = $('<div></div>');
                        cOl.addClass('col s8');
                        rOw.append(cOl);
                    var cOl = $('<div></div>');
                        cOl.addClass('col m2');
                        cOl.text('Iva');
                        rOw.append(cOl);      
                    var cOl = $('<div></div>');
                        cOl.addClass('col center');
                        cOl.text('16%');
                        iva = total * 0.16;
                        rOw.append(cOl);   
            center.append(rOw);

                    var rOw = $('<div></div>');
                        rOw.addClass('row');
                            var cOl = $('<div></div>');
                                cOl.addClass('col s8');
                        rOw.append(cOl);
                            var cOl = $('<div></div>');
                                cOl.addClass('col m2');
                                cOl.text('Total');
                        rOw.append(cOl);
                            var cOl = $('<div></div>');
                                cOl.addClass('col center');
                                totalAbsoluto = total + iva;
                                cOl.text(totalAbsoluto);        
                        rOw.append(cOl);
            center.append(rOw);

                    var rOw = $('<div></div>');
                        rOw.addClass('row');
            
                    var cOl = $('<div></div>');
                        cOl.addClass('row');

                        let idx = 'MLMRCX_' + datos.length + $(datos[0]).val() + datos.length * $(datos[4]).val()

                        cOl.text('ID:' + idx)
                        rOw.append(cOl);
            center.append(rOw);

                    var space = $('<hr/>');
            center.append(space);

                    var h6 = $('<h6></h6>');
                        h6.text(' Call center: +52 777 341 2411 ');
                        center.append(h6);

                    var h6 = $('<h6></h6>');
                        h6.text(Date());
                        center.append(h6);
                    
                        var h7 = $('<h6></h6>');
                        h7.text(' #Hailgrasa ');
                        center.append(h7);
                    var h5 = $('<h6></h6>');
                        h5.text(' #HelloHello el diseño es mi pasión Chueck ');
                        center.append(h5);
                    var h4 = $('<h4></h4>');
                        h4.text(' ************************');
                        center.append(h4);

                    var h8 = $('<h8></h8>');
                        h8.text('System: @Hana897TRX (Gabriela) / Karimo64 (Karim) / Chucho (Jesus Guerrero)');
                        center.append(h8);

                cardTittle.append(center); 
            cardContent.append(cardTittle);
        rootcard.append(cardContent); 
    $('#receiptContent').append(rootcard);

}   

function addrow() {
    let columnas = $(this).closest("tr").find("input");
    // (e|E)(\+|\-)[0-9](\.[0-9])?
    let regex = new RegExp('^\d+$')
    //let regex = new RegExp('(e|E)(\+|\-)[0-9](\.[0-9])?')

    if(regex.exec($(columnas[2]).val()) && regex.exec($(columnas[3]).val())){
        swal("Ups, Something went wrong!", "Revisa los campos de datos");
        return;
    }

    var direction = $("#tabla")
    var tr = $("<tr></tr>")
    var td = $("<td></td>")

    var inp = $("<input></input>") 
    inp.attr("type","text")
    td.append(inp)
    tr.append(td)

    var td = $("<td></td>")

    var inp = $("<input></input>")
    inp.attr("type","text")
    td.append(inp)
    tr.append(td)

    var td = $("<td></td>")

    var inp = $("<input></input>")
    inp.attr("type","number")
    inp.bind('change',calctotal)
    td.append(inp)
    tr.append(td)

    var td = $("<td></td>")

    var inp = $("<input></input>")
    inp.attr("type","number")
    inp.bind('change',calctotal)
    td.append(inp)
    tr.append(td)

    var td = $("<td></td>")

    var inp = $("<input></input>")
    inp.attr("type","number")
    inp.attr("disabled", "disabled")
    td.append(inp)
    tr.append(td)

    var td = $("<td></td>")

    var inp = $("<button></button>")
    inp.attr("type","button")
    inp.addClass('waves-effect waves-light btn-small')
    inp.text("+")
    inp.click(addrow)
    td.append(inp)
    tr.append(td)

    var td = $("<td></td>")

    var inp = $("<button></button>")
    inp.attr("type","button")
    inp.addClass('waves-effect waves-light btn-small')
    inp.text("-")
    inp.bind('click',delet)
    td.append(inp)
    tr.append(td)
    
    direction.append(tr)
}

function delet(){
    var direction = $("#tabla")
    console.log(direction.children().children().length)
    if(direction.children().children().length<=2)
        return;

    $(this).parents()[1].remove()

}

