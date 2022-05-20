$(".modal").hide();
$("#back").hide();
$("#exit").click(function() {
    SessionTimeOut();
    $("#exit-modal").show();
    clearInterval(timeout);
});


// page Numbering System
pageNo = 1;
$("#back").click(function() {
    PrevPageNo()
});

$("#exit-btn").click(function() { window.close() });

// Counter for Session Timeout
var counter = 0;
var timeout = setInterval(SessionTimeOut, 1000);
// Next Coder can use node.js to disconnect the user.
function SessionTimeOut() {
    counter++;
    if (counter == 120) {
        x = "Your session has timed out. Please rescan the QR Code."
        y = "Session Timeout"
        console.log("session timeout");
        $("#exit-modal").show();
        clearInterval(timeout);
    } else {
        x = "Thanks for trying out! We hope you enjoyed the experience!"
        y = "Disconnected"
    }
    $("#exit-content").html(x);
    $("#exit-header").html(y);
    // console.log(counter);
    document.body.addEventListener('scroll', function() { counter = 0; });
    document.body.addEventListener('click', function() { counter = 0; });






}


function NextPageNo() { // Page Number goes UPPP
    hideAllPages();
    if (pageNo == 1) {
        pageNo++;
        $("#selected").show();
        $(".nav-head").html(`SIRS Customisation Control`);
        $("#exit").show();

    } else {
        console.log(customID)
        switch (customID) {
            case "custom":
                pageNo = 3;
                $("#custom").show();
                $(".nav-head").html(`Customise ${itemName}`)
                break;
            case "save":
                pageNo = 4;
                $("#save").show();
                $(".nav-head").html(`Save Customised ${itemName}`)
                break;
            case "timeline":
                pageNo = 5;
                $("#timeline").show();
                $(".nav-head").html(`The Making of ${itemName}`)
                $("#item-timeline").scrollLeft(0);
                break;
            case "explode":
                pageNo = 6;
                $("#explode").show();
                $(".nav-head").html(`${itemName}'s Explosion View`)
                break;
        }
        $("#back").show();
        $("#exit").hide();
    }
    console.log("page Num: " + pageNo)
}

function PrevPageNo() { // Page Number goes DOWNNN !bugged
    if (pageNo == 5 || pageNo == 6) { pageNo = 2; } else { pageNo--; }
    switch (pageNo) {
        case 1:
            $("#home").show();
            $("#exit").show();
            $("#back").hide()
            break;
        case 2:
            $("#selected").show();
            $(".nav-head").html(`${itemName} menu`)
            break;
        case 3:
            $("#custom").show();
            break;

    }
    console.log(pageNo)
}

function hideAllPages() {
    $("section").hide();
}


// when user exit the remote from LED Screen.
$("#exit").click(function() {
    console.log("exit session")
        // some Node.js codes - yea... quite unfortunate that requires Node.js
})



infoPage = false;
$("#info").click(function() {
    // open info
    infoPage = !infoPage
    let x;
    switch (pageNo) {
        case 1:
            x = "Thanks for trying this demo.<br>Build by NYP IxD Students."
            break;
        case 2:
            x = `"Click on one of the interactions listed below."`
            break;
        case 3:
            x = ``
            break;

    }

    $("#info-content").html(x);
    $("#info-page").show();
})


// close info from the "close" btn
$("#info-page .btn").click(function() {
    closeInfo();
})

function closeInfo() {
    $("#info-page").hide();
    infoPage = false
    $("#info").css({ "color": "#B691B4" });
}

/***
 * HOME PAGE
 */
var itemID;
var itemAssets = [
    { img: "shirt", name: "Cotton T Shirt" },
    { img: "shoe", name: "Running Shoe X" },
    { img: "cap", name: "Nice Cap" },
    { img: "bag", name: "Red Bag" }
]

$(".items-select").click(function() {
    NextPageNo();
    // $("#home").hide();
    $("#exit").hide();
    itemID = this.id;

    let i;
    switch (itemID) {
        case "tShirt":
            i = 0;
            break;
        case "sportWear":
            i = 1;
            break;
        case "runningCap":
            i = 2;
            break;
        case "redBag":
            i = 3;
            break;
    }

    console.log(itemID)
    console.log(i)
    itemImage = itemAssets[i].img
    itemName = itemAssets[i].name
    $(".item-selected-img").css({ "background": `url("../assets/${itemImage}.svg")`, "background-size": "cover" })
    $(".item-selected-name").html(`${itemName}`)
    $(".nav-head").html(`${itemName} menu`)
    $("#back").css({ "display": "block" });
})

/***
 * SELECTED ITEM PAGE
 */
var customID;
$(".custom-opt").click(function() {
    customID = this.id
    console.log(this.id);
    customID = customID.replace("link-", "")
    NextPageNo();
})

/***
 * TIMELINE
 */

/***
 * EXPLOSION
 */

/***
 * CUSTOMISATION */
$("#custom.done").click(function() {});

$("#saveQr").click(function() {
    $("#cfm-page").show();
    console.log("CLOSE");
})

$(".menu-btn").click(function() {
    $("#cfm-page").hide();
    pageNo = 2;
    PrevPageNo();

})

$(`input[name="clothingColors"]`).on("click", function() {
    shirtColor = $(this).val();
    shirtColor = shirtColor.replace("color-", "")
})

$(".timeline-cp").click(function() {
    let elem = document.querySelector('#t1');
    let rect = elem.getBoundingClientRect();
    console.log("x: " + rect.x);
});