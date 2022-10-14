
$("#SaveItem").click(function (){

    let  ItemCode = $("#txtItemCode").val();
    let  ItemName = $("#txtItemName").val();
    let  ItemPrice = $("#txtItemPrice").val();
    let  ItemQty = $("#txtItemQuentity").val();
    let  ItemDescription = $("#txtItemDescription").val();

    var ItemObject = {
        id : ItemCode,
        Name : ItemName,
        Price : ItemPrice,
        Qty : ItemQty,
        Description : ItemDescription
    }

    // put object to item array
    Items.push(ItemObject);

    loadAllItemDetails()
    EventBindingItem();
    loadItemIDOption();
    clearAll();

});

$("#LoadItem").click(function (){
    loadAllItemDetails()
    EventBindingItem();
    loadItemIDOption();
    clearAll();

});
function loadAllItemDetails(){

    // remove all data from the table
    $("#tblItem").empty();

    // get all item records from the array
    for (var item of Items) {
        // Using String Literals to do the same thing as above
        var rows = `<tr><td>${item.id}</td><td>${item.Name}</td><td>${item.Price}</td><td>${item.Qty}</td><td>${item.Description}</td></tr>`;

        //then add it to the table body of customer table
        $("#tblItem").append(rows);

    }

}

//  mehidi table eka click karama data print we
function EventBindingItem(){
    $("#tblItem>tr").click(function (){
        let id = $(this).children(":eq(0)").text();
        let Name = $(this).children(":eq(1)").text();
        let Price = $(this).children(":eq(2)").text();
        let Qty = $(this).children(":eq(3)").text();
        let Description = $(this).children(":eq(4)").text();

        //  tble eke textfild walata data add karanawa
        $("#txtItemCode").val(id);
        $("#txtItemName").val(Name);
        $("#txtItemPrice").val(Price);
        $("#txtItemQuentity").val(Qty);
        $("#txtItemDescription").val(Description);

    });

    //double click remove table colom
    $("#tblItem>tr").on('dblclick',function (){
        $(this).remove();
    });

}


$("#txtItemCode").on('keyup',function (event){
    if (event.code == "Enter"){
        let typeid = $("#txtItemCode").val();
        let item = SearchItem(typeid);

        if (item != null){
            $("#txtItemCode").val(item.id);
            $("#txtItemName").val(item.Name);
            $("#txtItemPrice").val(item.Price);
            $("#txtItemQuentity").val(item.Qty);
            $("#txtItemDescription").val(item.Description);

        }else {
            alert("error");
        }

    }
})
//Search Item
function SearchItem(ItemCode){
    for (let item of Items) {
        if (item.id == ItemCode){
            return item
        }
    }
        return null;
}
//delete Item
function deleteItem(){
          let item = SearchItem(ItemCode);

            if(item != null){
                let indexnum = Items.indexOf(item);
                Items.splice(indexnum,1);
                loadAllItemDetails();
                return true;
            }
            else {
                    return false;
            }
}

$("#DeleteItem").click(function (){

            let deleteitemid = $("#ItemCode").val();
            deleteItem(deleteitemid)

        })

//Enter Button use for textfield
$("#txtItemCode").on('keydown',function (event){

    if (event.key == "Enter"){
        $("#txtItemName").focus();
    }

});

$("#txtItemName").on('keydown',function (event){

    if (event.key == "Enter"){
        $("#txtItemQuentity").focus();
    }

});

$("#txtItemQuentity").on('keydown',function (event){

    if (event.key == "Enter"){
        $("#txtItemPrice").focus();
    }

});

$("#txtItemPrice").on('keydown',function (event){

    if (event.key == "Enter"){
        $("#txtItemDescription").focus();
    }

});

$("#txtItemDescription").on('keydown',function (event){

    if (event.key == "Enter"){
        confirm("Do You Want To Add This Customer...?")
        $("#SaveItem").focus();
    }
});

$("#SaveItem").on('keydown',function (event){

    if (event.key == "Enter"){
        $("#txtItemCode").focus();
    }
});

















































































