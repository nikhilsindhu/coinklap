"use strict"

$(document).ready(function() {

    var modelBackdrop = $(".modal-backdrop")
    var modalContant= $(".modal-contant")
    var modal = $(".modal")
    var body = $('body')
    var sendCrypto = $('#sendCrypto')
    var receiveCrypto = $('#receiveCrypto')
    var exchangeOrder = $('#exchangeOrder')
    var buyCrypto = $('#buyCrypto')
    var postOrder = $('#postOrder')
    var postOrderAdvance = $('#postOrderAdvance')

    var toggleChatButton = $('#toggleChatBody')
    var chatBody = $('.chat-body')


    // executes when HTML-Document is loaded and DOM is ready

    var hamburger = document.querySelector("#hamburger")
    $('#hamburger').on("click", function(){
        $('#navbarCollapse').toggleClass('nav-active')
    })

    // ======== Toggle Chat Body ========


    if(chatBody){

        toggleChatButton.on("click", function(){

            chatBody.toggleClass("toggle-chat");
            $('#toggleChatBody i').toggleClass('rotate-icon')
        })
    }

    $("#priceDaySortingBtn").on("click",function(){

        $("#priceDaySortOptions").toggle();
    })

    if(modelBackdrop){
        
        $("#confirmExchange").on("click", function(){
            body.addClass("modal-open")
            modelBackdrop.toggleClass("m-fadeIn")
            modelBackdrop.toggleClass("m-fadeOut")
            modalContant.css('animation','slide-in .3s linear')
            exchangeOrder.addClass("modal-visible")
        })

        $(".receiveCryptoBtn").on("click", function(){
            body.addClass("modal-open")
            modelBackdrop.toggleClass("m-fadeIn")
            modelBackdrop.toggleClass("m-fadeOut")
            modalContant.css('animation','slide-in .3s linear')
            receiveCrypto.addClass("modal-visible")
        })

        $(".sendCryptoBtn").on("click", function(){
            body.addClass("modal-open")
            modelBackdrop.toggleClass("m-fadeIn")
            modelBackdrop.toggleClass("m-fadeOut")
            modalContant.css('animation','slide-in .3s linear')
            sendCrypto.addClass("modal-visible")
        })

        $("#buyCryptoBtn").on("click", function(){
            body.addClass("modal-open")
            modelBackdrop.toggleClass("m-fadeIn")
            modelBackdrop.toggleClass("m-fadeOut")
            modalContant.css('animation','slide-in .3s linear')
            buyCrypto.addClass("modal-visible")
        })

        $("#postOrderBtn").on("click", function(){
            body.addClass("modal-open")
            modelBackdrop.toggleClass("m-fadeIn")
            modelBackdrop.toggleClass("m-fadeOut")
            modalContant.css('animation','slide-in .3s linear')
            postOrder.addClass("modal-visible")
        })
    
        $(".closeModalBtn").on("click", function(){
            modalContant.css('animation','slide-out .3s linear')
            setTimeout(function(){
                modal.removeClass("modal-visible")
                modelBackdrop.toggleClass("m-fadeIn")
                modelBackdrop.toggleClass("m-fadeOut")
                body.removeClass("modal-open")
            },150)
        })

        $("#postOrderAdvanceBtn").on("click", function(){
            modalContant.css('animation','slide-out .3s linear')

            setTimeout(function(){
                modal.removeClass("modal-visible")
                modelBackdrop.toggleClass("m-fadeIn")
                modelBackdrop.toggleClass("m-fadeOut")
                body.removeClass("modal-open")

                body.addClass("modal-open")
                modelBackdrop.toggleClass("m-fadeIn")
                modelBackdrop.toggleClass("m-fadeOut")
                modalContant.css('animation','slide-in .3s linear')
                postOrderAdvance.addClass("modal-visible")
            },150)
        })

        // =========== Order Advance Section Toggle

        $("#orderAdvanceOptionToggle").on("click", function(){
            modal.toggleClass("advance-modal-minify")

            var toggleText = $("#orderAdvanceOptionToggle").html()

            if(toggleText.includes("right")){
                $("#orderAdvanceOptionToggle").html('Hide advanced options <i class="fas fa-long-arrow-alt-left"></i>');
            }

            if(toggleText.includes("left")){
                $("#orderAdvanceOptionToggle").html('Advanced options <i class="fas fa-long-arrow-alt-right"></i>');
            }

        })
    }
})