$(function(){
    showPopup();

    $("#j_popup").find(".popup-txt").focus(function(){
        if (this.value == this.defaultValue) {
            this.value = " ";
        }
    }).blur(function() {
        if (this.value == " ") {
            this.value = this.defaultValue;
        }
    });
    $("#booking-submit").click(function(){
        $("#j_mask").hide();
        $("#j_popup").hide();
        window.location = window.location.href;
    });
});

/*立即预订遮罩*/
function showPopup(){
    var $mask = $("#j_mask"),
        $popUp = $("#j_popup");
    $(".booking-btn").click(function(event) {
        $mask.show();
        $popUp.show();
    });
    $mask.click(function(){
        $mask.hide();
        $popUp.hide();
    });
    $popUp.find('.close').click(function(){
        $mask.hide();
        $popUp.hide();
    });
}