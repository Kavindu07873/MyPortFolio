//Customer details
function loadCustomersIDOption() {
    $("#Cusselectid").empty();
    for (let cus of Customer) {
        $("#Cusselectid").append(`<option>${cus.id}</option>`);
    }
    Autogenaraeorderid();

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


//add data to cart
$("#AddItemTotheCart").click(function (){

    $("#tbl2").css('display','none')
    $("#tbl1").css('display','block');




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

//Qty eka wenas karanna ona
    let y = parseFloat($("#QtyOnHand").val());
   let z =  (y - Qtys)
    $("#QtyOnHand").val(z);
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


//enter button set
$("#OrderQty").on('keydown',function (event) {
    if (event.key == "Enter") {
        $("#AddItemTotheCart").focus();
    }
});
$("#AddItemTotheCart").on('keydown',function (event){
    if (event.key == "Enter"){
        $("#Discount").focus();
    }
});
$("#Discount").on('keydown',function (event){
    if (event.key == "Enter"){
        $("#Cash").focus();
    }
});


//Balance eka hadanawa
$("#Cash").on('keydown ',function(event){
    if (event.key == "Enter") {
       let Money = $("#Cash").val();
        let CashOnHand = parseFloat(Money);

       let AllPrice  =$("#TotalPriceAll").val();
            let TOTAL = parseFloat(AllPrice);

let Balance = (CashOnHand - TOTAL)
       $("#Balance").val(Balance)

//discount ona nm
       if(parseFloat($("#Discount").val())>0){
           let discount  = $("#Balance").val();
           let disc = parseFloat(discount);

           let x = parseFloat($("#Discount").val())

           let newPri  =(disc * x)/100
           let discPrice = parseFloat(newPri);
           let NewPrice=(Balance - discPrice)
           $("#Balance").val(NewPrice);
       }
    }
});


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
function Autogenaraeorderid(){
    let id ="D00001";
    let i = 0;
        while(i<100){
             id = ("D"+i)
            i++;
        }
        if(i<100){

        }
    $("#OrderId").val(id);
    // $("#OrderId").val().remove();
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
    $("#OrderId").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
    // $("").val("")
}
