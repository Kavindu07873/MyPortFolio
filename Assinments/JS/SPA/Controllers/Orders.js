
//Customer details
function loadCustomersIDOption() {
    $("#Cusselectid").empty();
    for (let cus of Customer) {
        $("#Cusselectid").append(`<option>${cus.id}</option>`);
    }
    loadDataCus();
}


function loadDataCus(){

    //feild walata data load kirima
    $("#Cusselectid>option").click(function (){
        alert("mkd la");

        let Name =    $(this).children(":eq(1)").text();
        //put data o text field
        $("#CusShowName").val(Name);
        console.log($("#CusShowName").val(Name))

    });

}



//product details
function loadItemIDOption() {
    $("#ItemCode").empty();
    for (let itm of Items) {
        $("#ItemCode").append(`<option>${itm.id}</option>`);
    }

}