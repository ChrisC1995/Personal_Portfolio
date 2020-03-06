$(function () {
    $("#calculate").on("click", calculateTipVariables);
    $("#tipResult").hide();
    $("#resetButton").hide();
    $("#resetButton").on("click", function () {
        location.reload();
    });
});

function calculateTipVariables() {
    var billAmount = $("#billText").val();
    var service = $("#serviceSelect").val();
    var split = $("#billSplit").val();

    if (billAmount == "" || service == null) {
        alert("Input All Fields!")
    }
    else {
        console.log(billAmount);
        console.log(service);
        console.log(split);
        calculateTip(billAmount, service, split);
    }
}

function calculateTip(billAmount, service, split) {
    var result = (+billAmount * +service / +split).toFixed(2);
    console.log(result);
    $("#totalTip").append("$" + result);
    if (split > 1) {
        var totalResult = ((+billAmount / +split) + +result).toFixed(2);
        $("#totalBillAmount").append("$" + totalResult);
    }
    else {
        var totalSoloResult = (+billAmount + +result).toFixed(2);
        $("#totalBillAmount").append("$" + totalSoloResult);
    }
    $("#tipResult").fadeIn();
    $("#resetButton").fadeIn();
    $("#calculate").fadeOut();
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }
}