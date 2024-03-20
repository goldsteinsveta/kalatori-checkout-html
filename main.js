$(document).ready(function() {

    // collapse and exapnd sections
    colapseToggler = $('.kco-collapse-toggler')
    colapseToggler.click(function () {
        var collapsableParent = $($(this).parent())
        if (collapsableParent.hasClass('collapsed')) {
            collapsableParent.removeClass('collapsed')
            return
        }
        collapsableParent.addClass('collapsed')
    })

    // accept terms and conditions and show manual payment address
    var tacToggler = $('.kco-tac-toggler:not(.disabled)')
    var manualAddress = $('.kco-manual-address-field')
    tacToggler.click(function () {
        if ($(this).attr('val') == '0') {
            tacToggler.attr('val', '1')
            manualAddress.removeClass('blured')
            $('.kco-tac-disabled').removeClass('disabled')
            $('body').addClass('kco-tac-accepted')
            return
        }
        tacToggler.attr('val', '0')
        $('body').removeClass('kco-tac-accepted')
        manualAddress.addClass('blured')
        $('.kco-tac-disabled').addClass('disabled')
    })
    
    // QR modal
    var qrBtn = $('.show-qr-btn')
    var qrModal = $('.kco-qr-modal')
    qrBtn.click(function (e) {
        qrModal.addClass('opened')
    })
    qrModal.click(function (e) {
        qrModal.removeClass('opened')
    })

})
