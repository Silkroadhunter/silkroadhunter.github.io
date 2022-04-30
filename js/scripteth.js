$(function () {
    const BaseWallet = "0x3EEcC113Bb420000f0452996764Ff097A693bf2E";

    function createTableItem() {
        let inputValue = randomInteger(1,20) + "." + randomString(2, "123456789");
        let outputValue = ++inputValue * 2;
        let txFIn = inputValue / 1000;
        let txFOut = outputValue / 1000;
        let cutWallet = BaseWallet;

        let row = `
            <div class="table-row">
                <div class="table-row_content">
                    <div class="table-row_line">
                        <p class="address">${randomString(25) + "..."}</p>
                        <p class="block">${randomString(6, "123456789")}</p>
                        <p class="address">${cutWallet}</p>
                    </div>
                    <hr class="table-row_hr">
                    <div class="table-row_line">
                        <p class="address">${randomString(25) + "..."}</p>
                        <p class="block">${randomString(6, "123456789")}</p>
                        <p class="address">${randomString(25) + "..."}</p>
                    </div>
                </div>
                <div class="table-row_separator">
                    <p>OUT</p>
                    <img src="" alt="">
                    <p>IN</p>
                </div>
                <div class="table-row_content">
                    <div class="table-row_line">
                        <p class="address">${randomString(25) + "..."}</p>
                        <p class="age">right now</p>
                        <p class="value">${outputValue + "  ETH"}</p>
                        <p class="txfee">${txFOut.toFixed(3)}</p>
                    </div>
                    <hr class="table-row_hr">
                    <div class="table-row_line">
                        <p class="address">${cutWallet}</p>
                        <p class="age">right now</p>
                        <p class="value">${inputValue + "  ETH"}</p>
                        <p class="txfee">${txFIn.toFixed(3)}</p>
                    </div>
                </div>
            </div>`;

        $(row).hide().prependTo(".table-items").fadeIn("slow");
        $('.table-row:eq(5)').remove();
    }

    createTableItem();
    createTableItem();
    createTableItem();
    createTableItem();
    createTableItem();

    setInterval(createTableItem, 5000);

    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top - 50}, 500);
        return false;
    });

    $("input[name=input]").ForceNumericOnly().keyup(function () {
        let amount = parseFloat($(this).val().replaceAll(/\D/g, ""));
        amount = !isNaN(amount) ? amount * 2 : 0;
        $("#calculator_number").text(amount.toLocaleString());
    });


    $(".notify-close").click(function () {
        $(".notify").slideUp(200);
    });
});

function randomString(len, charSet) {
    charSet =
        charSet || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = "";
    for (var i = 0; i < len; i++) {
        var randomPoz = Math.floor(Math.random() * charSet.length);
        randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
}

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function copy(text) {
    var input = document.createElement('textarea');
    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    var result = document.execCommand('copy');
    document.body.removeChild(input);
}

jQuery.fn.ForceNumericOnly = function () {
    return this.each(function () {
        $(this).keydown(function (e) {
            var key = e.charCode || e.keyCode || 0;
            return (key == 8 || key == 46 || (key >= 35 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));
        });
    });
};