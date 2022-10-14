$("#PerchaseOrder").click(function (){

    $("#tbl2").css('display','block')
    $("#tbl1").css('display','none');

    let  Date = $("#Date").val();
    let  Orderid = $("#OrderId").val();
    let  CusId = $("#Cusselectid").val();
    let  TotalPrice = $("#TotalPriceAll").val();
    let  Cash = $("#Cash").val();
    let  Balance = $("#Balance").val();

    var OrderDetailsObject = {
        Date : Date,
        Orderid : Orderid,
        cusid : CusId,
        total : TotalPrice,
        Money : Cash,
        tip : Balance
    }


OrderDetails.push(OrderDetailsObject);
loadAllOrderdetails()
    alert("Do you want to add data to the Order Details Table")
    Autogenaraeorderid();
})

function loadAllOrderdetails(){
    $("#tblOrderDetails").empty()
    for (var orderdeails of OrderDetails) {
        var ods = `<tr><td>${orderdeails.Date}</td><td>${orderdeails.Orderid}</td><td>${orderdeails.cusid}</td><td>${orderdeails.total}</td><td>${orderdeails.Money}</td><td>${orderdeails.tip}</td></tr>`;
        $("#tblOrderDetails").append(ods);

    }
}