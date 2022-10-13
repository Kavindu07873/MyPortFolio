
// make arry called customer
var Customer = [];


$("#SaveCustomer").click(function (){

    let  cusid = $("#txtCustomerID").val();
    let  cusName = $("#txtCustomerName").val();
    let  cusAddress = $("#txtCustomerAddress").val();
    let  cusConNo = $("#txtCustomerContNo").val();
    let  cusSalary = $("#txtCustomerSalary").val();

    var CustomerObject = {
        id : cusid,
        Name : cusName,
        Address : cusAddress,
        ConNo : cusConNo,
        Salary : cusSalary
    }

    // put object to customer array
    Customer.push(CustomerObject);

    loadAllCustomerDetails()
    EventBinding();
    loadCustomersIDOption()
    SearchCustomer();
});

$("#LoadAllCustomer").click(function (){
    loadAllCustomerDetails()
    EventBinding();
    loadCustomersIDOption()
});

//Enter Button use for textfield
$("#txtCustomerID").on('keydown',function (event){

    // if (event.key == "Enter"){
    //     $("#txtCustomerName").focus();
    // }

});

$("#txtCustomerName").on('keydown',function (event){

    if (event.key == "Enter"){
        $("#txtCustomerContNo").focus();
    }

});

$("#txtCustomerContNo").on('keydown',function (event){

    if (event.key == "Enter"){
        $("#txtCustomerAddress").focus();
    }

});

$("#txtCustomerAddress").on('keydown',function (event){

    if (event.key == "Enter"){
        $("#txtCustomerSalary").focus();
    }

});

$("#txtCustomerSalary").on('keydown',function (event){

    if (event.key == "Enter"){
        confirm("Do You Want To Add This Customer...?")
        $("#SaveCustomer").focus();
    }

});

// Tap Button Remove
$("#txtCustomerID,#txtCustomerName,#txtCustomerContNo,#txtCustomerAddress,#txtCustomerSalary").on('keydown' , function (event){

    if (event.key == "Tab"){
        event.preventDefault();
    }
});


function loadAllCustomerDetails(){

    // remove all data from the table
    $("#tblCustomer").empty();

    // get all customer records from the array
    for (var customer of Customer) {
        // Using String Literals to do the same thing as above
        var row = `<tr><td>${customer.id}</td><td>${customer.Name}</td><td>${customer.ConNo}</td><td>${customer.Address}</td><td>${customer.Salary}</td></tr>`;

        //then add it to the table body of customer table
        $("#tblCustomer").append(row);

    }

}


//  mehidi table eka click karama data print we
function EventBinding(){
    $("#tblCustomer>tr").click(function (){
        let id = $(this).children(":eq(0)").text();
        let Name = $(this).children(":eq(1)").text();
        let ConNo = $(this).children(":eq(2)").text();
        let Address = $(this).children(":eq(3)").text();
        let Salary = $(this).children(":eq(4)").text();

        //  tble eke textfild walata data add karanawa
        $("#txtCustomerID").val(id);
        $("#txtCustomerName").val(Name);
        $("#txtCustomerAddress").val(Address);
        $("#txtCustomerContNo").val(ConNo);
        $("#txtCustomerSalary").val(Salary);

    });

    //double click remove table colom
    $("#tblCustomer>tr").on('dblclick',function (){
        $(this).remove();
    });

}

$("#txtCustomerID").on('keyup',function (event){
    if (event.code == "Enter"){
        let typeid = $("#txtCustomerID").val();
        let customer = SearchCustomer(typeid);

        if (customer != null){
            $("#txtCustomerID").val(customer.id);
            $("#txtCustomerName").val(customer.Name);
            $("#txtCustomerAddress").val(customer.Address);
            $("#txtCustomerContNo").val(customer.ConNo);
            $("#txtCustomerSalary").val(customer.Salary);

        }else {
            alert("error");
        }

    }
})
//Search customer
function SearchCustomer(cusid){
    for (let customer  of Customer) {
        if(customer.id == cusid){
            return customer
        }
    }
return null;
}