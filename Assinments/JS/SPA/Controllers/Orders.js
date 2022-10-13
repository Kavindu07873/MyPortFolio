
//Customer details
function loadCustomersIDOption() {
    $("#Cusselectid").empty();
    for (let cus of Customer) {
        $("#Cusselectid").append(`<option>${cus.id}</option>`);
    }
}
$('#Cusselectid').on('change',function (){

        let CusOpion   = $("#Cusselectid").val();
        let  customer = SearchCustomer(CusOpion);

    if (customer != null){
        $("#Cusselectid").val(customer.id);
        $("#CusSeleName").val(customer.Name);
        $("#CusSeleAdress").val(customer.Address);
        $("#CusSeleCon").val(customer.ConNo);

    }else {
        alert("error");
    }
})

//product details
function loadItemIDOption() {
    $("#ItemCode").empty();
    for (let itm of Items) {
        $("#ItemCode").append(`<option>${itm.id}</option>`);
    }

}
$('#ItemCode').on('change',function (){

    let ItemOpion   = $("#ItemCode").val();
    let  item = SearchItem(ItemOpion);

    if (item != null){
        $("#ItemCode").val(item.id);
        $("#ItemName").val(item.Name);
        $("#Price").val(item.Price);
        $("#QtyOnHand").val(item.Qty);
        // $("#CusSeleAdress").val(customer.Salary);

    }else {
        alert("error");
    }
})



//Create Array called Orders
    var Orders = []
//add data to cart
$("#AddItemTotheCart").click(function (){

    let Pro_code =$("#ItemCode").val()
    let Pro_Name = $("#ItemName").val()
    let Price = $("#Price").val()
    let Qtys = $("#OrderQty").val()
    // let ItemPrice = ( paresent* Price);

   let  ItemPrice    = parseInt(Price)*parseInt(Qtys)

    var CartOblect = {
        Code : Pro_code,
        Name : Pro_Name,
        Price : Price,
        Qty : Qtys,
        TotalPrice : ItemPrice
    }


    Orders.push(CartOblect);

    loadAllCartDetails();

})

function loadAllCartDetails(){
    $("#tblCart").empty();

    for (var order of Orders) {
        var raw = `<tr><td>${order.Code}</td><td>${order.Name}</td><td>${order.Price}</td><td>${order.Qty}</td><td>${order.TotalPrice}</td></tr>`;

        $("#tblCart").append(raw);

        CalculationTotal();


        }
}





function CalculationTotal(){

    let length = $('#tblCart>tr').length;
    let total = 0;

    for (let i=0;i<length;i++){
        let oneitemTotal = $('#tblCart>tr').eq(i).children().eq('4').text();
        let NumberValue = parseFloat(oneitemTotal);

        total = total + NumberValue
        $("#TotalPriceAll").val(total);
    }

}



function clearAll(){
    $("#txtCustomerSalary").val("")
    $("#txtCustomerContNo").val("")
    $("#txtCustomerAddress").val("")
    $("#txtCustomerName").val("")
    $("#txtCustomerID").val("")
    $("#txtItemDescription").val("")
    $("#txtItemQuentity").val("")
    $("#txtItemPrice").val("")
    $("#txtItemName").val("")
    $("#txtItemCode").val("")
    $("#Cusselectid").val("")
    $("#CusSeleName").val("")
    $("#CusSeleCon").val("")
    $("#CusSeleAdress").val("")
    $("#ItemName").val("")
    $("#Price").val("")
    $("#QtyOnHand").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")



}
