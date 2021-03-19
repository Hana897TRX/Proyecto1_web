$(document).ready(()=>{
    addrow()
    $("#btnCrear").click(getData)
})

function calctotal(){
    let columnas = $(this).closest("tr").find("input");
    if($(columnas[2]).val().length > 0 && $(columnas[3]).val().length > 0) {
        let cantidad = $(columnas[2]).val();
        let precio = $(columnas[3]).val();
        $(columnas[4]).attr("value", parseInt(cantidad) * parseInt(precio));
    }
}

function getData() {
    let columnas = $(document).find("input");
}   

function addrow() {
    var direction = $("#tabla")
    var tr = $("<tr></tr>")
    var td = $("<td></td>")

    var inp = $("<input></input>") 
    inp.attr("type","string")
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
    inp.text("+")
    inp.click(addrow)
    td.append(inp)
    tr.append(td)

    var td = $("<td></td>")

    var inp = $("<button></button>")
    inp.attr("type","button")
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