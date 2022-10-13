
//Customer details
function loadCustomersIDOption() {
    $("#Cusselectid").empty();
    for (let cus of Customer) {
        $("#Cusselectid").append(`<option>${cus.id}</option>`);
    }
    loadDataCus();
}


// $('#cmbCusID').change(function () {
//     let customer = searchCustomerWithID($('#cmbCusID').val());
//     setValuesToInvoiceDetails(customer.id, customer.name, customer.contactNo, customer.address);
//     $('#selectItem').focus();
// });



$('#Cusselectid').on('change',function (){

        let CusOpion   = $("#Cusselectid").val();
        let  customer = SearchCustomer(CusOpion);

    if (customer != null){
        $("#Cusselectid").val(customer.id);
        $("#CusSeleName").val(customer.Name);
        $("#CusSeleAdress").val(customer.Address);
        $("#CusSeleCon").val(customer.ConNo);
        // $("#CusSeleAdress").val(customer.Salary);

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
