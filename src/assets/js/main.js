/* Documents */
/* ------------------------------------------------------------------
[Scripts]
Project     :   
------------------------------------------------------------------- */
$(document).ready(function () {



    /* Sidenav Hover Function */

    $(function () {
        // whenever we hover over a menu item that has a submenu


        $('li.sidenav_list_item').on('mouseover', function () {

            var $menuItem = $(this),
                $submenuWrapper = $('> a .nav_text_hover', $menuItem);
            // grab the menu item's position relative to its positioned parent
            var menuItemPos = $menuItem.position();

            // place the submenu in the correct position relevant to the menu item
            $submenuWrapper.css({
                top: menuItemPos.top,
                left: menuItemPos.left
            });
        });
    });





    // $('[data-toggle="tooltip"]').tooltip();
    // bootstrap datepicker
    $('#date_of_birth').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#customer_birthday').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#registration_date').datepicker({
        uiLibrary: 'bootstrap4'
    });
    $('#fee_paid_date').datepicker({
        uiLibrary: 'bootstrap4'
    });

    /* Date Picker scroll issue fix */

    $('.generic_page').scroll(function () {
        if ($('[data-type="datepicker"]').is(":focus")) {
            $('body').find('.datepicker').css({
                'top': $('#date_of_birth').offset().top + 54, // Don't forget to add margins of target Exp.: +50
                'left': $('#date_of_birth').offset().left,
                'opacity': 1
            })
        }
    });

    $('.content_container').scroll(function () {
        if ($('[data-type="datepicker"]').is(":focus")) {
            $('body').find('.datepicker').css({
                'top': $('#date_of_birth').offset().top + 54, // Don't forget to add margins of target Exp.: +50
                'left': $('#date_of_birth').offset().left,
                'opacity': 1
            })
        }
    });

    /* Date Picker scroll issue fix ends */


    // table loader functionality
    setTimeout(function () {
        $('.table_loader').fadeOut();
    }, 1000);
    // toggle search results div
    $('#generic_customers').click(function () {
        $('.show_results').toggleClass("custom_results");
    });


    // show hide button inner html functionality
    $(".profile_show_btn").click(function () {
        $(this).text(function (i, v) {
            return v === 'Show Details' ? 'Hide Details' : 'Show Details'
        })
    });





    // multiple file upload functionality
    $("#multipleupload").uploadFile({
        url: "generic_fields.php",
        fileName: "myfile",
        allowedTypes: "jpg,png,pdf,doc,txt",
        dragDrop: true,
        showAbort: true,
        extraHTML: function () {
            var html = "<span id='close'>x<br/>";
            html += "</span>";
            return html;
        }
    });
    $(document).delegate("#close", "click", function () {
        $(this).parent().parent().remove();
    });

    /* Add minus class for group page */
    $('.plus_border').click(function () {
        if ($($(this).children()[0]).hasClass('in_minus')) {
            $($(this).children()[0]).removeClass('in_minus').addClass('in_plus')
        } else {
            $($(this).children()[0]).removeClass('in_plus').addClass('in_minus')
        }
    })

    // multi select options 
    $('.dropdown-mul-2').dropdown({
        searchable: true,
        searchNoData: '<li style="color:#f00">Sorry, No Results Found</li>',
        input: '<input type="text" maxLength="20" placeholder="Select By Role">',
        multipleMode: 'label',
        showDelete: true,
        readOnly: false
    });

    // toggle registered table tr color on click of buttons
    $('#all').click(function () {
        $('.btn_all').css('border-bottom', '5px solid #315b79');
        $('.btn_gold').css('border-bottom', '0');
        $('.btn_achiev').css('border-bottom', '0');
        $('.btn_silver').css('border-bottom', '0');
        $('.btn_planti').css('border-bottom', '0');
        $('.btn_bronz').css('border-bottom', '0');
        $('.btn_stand').css('border-bottom', '0');
        $('.color_change').addClass('all');
        $('.color_change').removeClass('gold');
        $('.color_change').removeClass('silver');
        $('.color_change').removeClass('platinum');
        $('.color_change').removeClass('bronze');
        $('.color_change').removeClass('achiev');
        $('.color_change').removeClass('green');
    });
    $('#gold').click(function () {
        $('.btn_gold').css('border-bottom', '5px solid rgb(165, 137, 1)');
        $('.btn_all').css('border-bottom', '0');
        $('.btn_achiev').css('border-bottom', '0');
        $('.btn_silver').css('border-bottom', '0');
        $('.btn_planti').css('border-bottom', '0');
        $('.btn_bronz').css('border-bottom', '0');
        $('.btn_stand').css('border-bottom', '0');
        $('.color_change').addClass('gold');
        $('.color_change').removeClass('all');
        $('.color_change').removeClass('silver');
        $('.color_change').removeClass('platinum');
        $('.color_change').removeClass('bronze');
        $('.color_change').removeClass('achiev');
        $('.color_change').removeClass('green');
    });
    $('#silver').click(function () {
        $('.btn_silver').css('border-bottom', '5px solid rgb(167, 162, 162)');
        $('.btn_all').css('border-bottom', '0');
        $('.btn_achiev').css('border-bottom', '0');
        $('.btn_gold').css('border-bottom', '0');
        $('.btn_planti').css('border-bottom', '0');
        $('.btn_bronz').css('border-bottom', '0');
        $('.btn_stand').css('border-bottom', '0');
        $('.color_change').addClass('silver');
        $('.color_change').removeClass('all');
        $('.color_change').removeClass('gold');
        $('.color_change').removeClass('platinum');
        $('.color_change').removeClass('bronze');
        $('.color_change').removeClass('achiev');
        $('.color_change').removeClass('green');
    });
    $('#platinum').click(function () {
        $('.btn_planti').css('border-bottom', '5px solid rgb(93, 80, 80)');
        $('.btn_all').css('border-bottom', '0');
        $('.btn_achiev').css('border-bottom', '0');
        $('.btn_silver').css('border-bottom', '0');
        $('.btn_gold').css('border-bottom', '0');
        $('.btn_bronz').css('border-bottom', '0');
        $('.btn_stand').css('border-bottom', '0');
        $('.color_change').addClass('platinum');
        $('.color_change').removeClass('all');
        $('.color_change').removeClass('gold');
        $('.color_change').removeClass('silver');
        $('.color_change').removeClass('bronze');
        $('.color_change').removeClass('achiev');
        $('.color_change').removeClass('green');
    });
    $('#bronze').click(function () {
        $('.btn_bronz').css('border-bottom', '5px solid rgb(169, 110, 36)');
        $('.btn_all').css('border-bottom', '0');
        $('.btn_achiev').css('border-bottom', '0');
        $('.btn_silver').css('border-bottom', '0');
        $('.btn_gold').css('border-bottom', '0');
        $('.btn_planti').css('border-bottom', '0');
        $('.btn_stand').css('border-bottom', '0');
        $('.color_change').addClass('bronze');
        $('.color_change').removeClass('all');
        $('.color_change').removeClass('gold');
        $('.color_change').removeClass('silver');
        $('.color_change').removeClass('platinum');
        $('.color_change').removeClass('achiev');
        $('.color_change').removeClass('green');
    });
    $('#achiever_club').click(function () {
        $('.btn_achiev').css('border-bottom', '5px solid rgb(46, 79, 173)');
        $('.btn_all').css('border-bottom', '0');
        $('.btn_silver').css('border-bottom', '0');
        $('.btn_gold').css('border-bottom', '0');
        $('.btn_planti').css('border-bottom', '0');
        $('.btn_bronz').css('border-bottom', '0');
        $('.btn_stand').css('border-bottom', '0');
        $('.color_change').addClass('achiev');
        $('.color_change').removeClass('all');
        $('.color_change').removeClass('gold');
        $('.color_change').removeClass('silver');
        $('.color_change').removeClass('bronze');
        $('.color_change').removeClass('platinum');
        $('.color_change').removeClass('green');
    });
    $('#standard').click(function () {
        $('.btn_stand').css('border-bottom', '5px solid rgb(69, 107, 62)');
        $('.btn_all').css('border-bottom', '0');
        $('.btn_silver').css('border-bottom', '0');
        $('.btn_gold').css('border-bottom', '0');
        $('.btn_achiev').css('border-bottom', '0');
        $('.color_change').removeClass('all');
        $('.color_change').addClass('green');
        $('.color_change').removeClass('gold');
        $('.color_change').removeClass('silver');
        $('.color_change').removeClass('platinum');
        $('.color_change').removeClass('bronze');
    });
    $('#customers_all').click(function () {
        $('.color_change').addClass('all_customers');
        $('.btn_all_customers').css('border-bottom', '5px solid #91b37e');
        $('.color_change').removeClass('blue');
        $('.color_change').removeClass('yellow');
        $('.btn_customers').css('border-bottom', '0');
        $('.btn_guests').css('border-bottom', '0');
    });
    $('#customers').click(function () {
        $('.color_change').addClass('blue');
        $('.color_change').removeClass('all_customers');
        $('.color_change').removeClass('yellow');
        $('.btn_all_customers').css('border-bottom', '0');
        $('.btn_customers').css('border-bottom', '5px solid #56a1da');
        $('.btn_guests').css('border-bottom', '0');
    });
    $('#guests').click(function () {
        $('.color_change').addClass('yellow');
        $('.color_change').removeClass('blue');
        $('.color_change').removeClass('all_customers');
        $('.btn_guests').css('border-bottom', '5px solid #e8d99a');
        $('.btn_customers').css('border-bottom', '0');
        $('.btn_all_customers').css('border-bottom', '0');

    });
    $('#all_leads').click(function () {
        $('.color_change').addClass('all_customers');
        $('.color_change').removeClass('callbacks');
        $('.color_change').removeClass('contact_us');
        $('.color_change').removeClass('rejected');
        $('.color_change').removeClass('accepted');
        $('.btn_all_customers').css('border-bottom', '5px solid #91b37e');
        $('.btn_callbacks').css('border-bottom', '0');
        $('.btn_contact_us').css('border-bottom', '0');
        $('.btn_accepted').css('border-bottom', '0');
        $('.btn_rejected').css('border-bottom', '0');

    });
    $('#callbacks').click(function () {
        $('.color_change').addClass('callbacks');
        $('.color_change').removeClass('contact_us');
        $('.color_change').removeClass('rejected');
        $('.color_change').removeClass('accepted');
        $('.btn_callbacks').css('border-bottom', '5px solid #ccc');
        $('.btn_all_customers').css('border-bottom', '0');
        $('.btn_contact_us').css('border-bottom', '0');
        $('.btn_accepted').css('border-bottom', '0');
        $('.btn_rejected').css('border-bottom', '0');

    });
    $('#contact').click(function () {
        $('.color_change').addClass('contact_us');
        $('.color_change').removeClass('callbacks');
        $('.color_change').removeClass('accepted');
        $('.color_change').removeClass('rejected');
        $('.btn_contact_us').css('border-bottom', '5px solid #a9d7de');
        $('.btn_all_customers').css('border-bottom', '0');
        $('.btn_callbacks').css('border-bottom', '0');
        $('.btn_accepted').css('border-bottom', '0');
        $('.btn_rejected').css('border-bottom', '0');
    });
    $('#accepted').click(function () {
        $('.color_change').addClass('accepted');
        $('.color_change').removeClass('callbacks');
        $('.color_change').removeClass('contact_us');
        $('.btn_accepted').css('border-bottom', '5px solid #c9e6b6');
        $('.btn_all_customers').css('border-bottom', '0');
        $('.btn_contact_us').css('border-bottom', '0');
        $('.btn_callbacks').css('border-bottom', '0');
        $('.color_change').removeClass('rejected');
        $('.btn_rejected').css('border-bottom', '0');
    });
    $('#rejected').click(function () {
        $('.color_change').addClass('rejected');
        $('.color_change').removeClass('accepted');
        $('.color_change').removeClass('callbacks');
        $('.color_change').removeClass('contact_us');
        $('.btn_rejected').css('border-bottom', '5px solid #cc817e');
        $('.btn_all_customers').css('border-bottom', '0');
        $('.btn_accepted').css('border-bottom', '0');
        $('.btn_callbacks').css('border-bottom', '0');
    });

    //custom address elipsis on js
    var addressData = $('.custom_address p').html() || "";
    var newaddress = '';

    if (addressData && addressData.length > 50) {
        newaddress = addressData.substring(0, 50) + "...";
    } else {
        newaddress = addressData
    }


    $('.custom_address p').html(newaddress)

    $('.custom_address').hover(function (over) {
        console.log(over.type)
        if (over.type === "mouseenter") {
            $('.custom_address p').html(addressData)
        } else {
            $('.custom_address p').html(newaddress)
        }
    })

});

$(".ham_icon, .side_nav a").click(function () {
    $(".side_nav").toggleClass("show_sidenav");
    $("body").toggleClass("body_show_sidenav");
});
$(".desk_ham_icon").click(function () {
    $(".side_nav").toggleClass("hide_sidenav");
    $("body").toggleClass("body_hide_sidenav");
});

$(function () {
    //get the doughnut chart canvas
    var ctx1 = $("#doughnut-chartcanvas-1");
    var ctx2 = $("#doughnut-chartcanvas-2");
    var ctx3 = $("#doughnut-chartcanvas-3");
    var ctx4 = $("#doughnut-chartcanvas-4");

    //doughnut chart data
    var data1 = {
        labels: ["70%", "30%"],
        datasets: [{
            label: "TeamA Score",
            data: [70, 30],
            backgroundColor: [
                "#ff5722",
                "#9ed80d"
            ],
            borderColor: [
                "#E39371",
                "#1D7A46"
            ],
            borderWidth: [0, 0]
        }]
    };

    //doughnut chart data
    var data2 = {
        labels: ["data 1", "data 2", "data 3", "data 4", "data 5"],
        datasets: [{
            label: "TeamB Score",
            data: [20, 35, 40, 60, 50],
            backgroundColor: [
                "#FAEBD7",
                "#DCDCDC",
                "#E9967A",
                "#F5DEB3",
                "#9ACD32"
            ],
            borderColor: [
                "#E9DAC6",
                "#CBCBCB",
                "#D88569",
                "#E4CDA2",
                "#89BC21"
            ],
            borderWidth: [0, 0, 0, 0, 0]
        }]
    };
    //doughnut chart data
    var data3 = {
        labels: ["data 1", "data 2", "data 3", "data 4", "data 5"],
        datasets: [{
            label: "TeamC Score",
            data: [20, 35, 40, 60, 50],
            backgroundColor: [
                "#FAEBD7",
                "#DCDCDC",
                "#E9967A",
                "#F5DEB3",
                "#9ACD32"
            ],
            borderColor: [
                "#E9DAC6",
                "#CBCBCB",
                "#D88569",
                "#E4CDA2",
                "#89BC21"
            ],
            borderWidth: [0, 0, 0, 0, 0]
        }]
    };
    var data4 = {
        labels: ["Incomplete", "Complete"],
        datasets: [{
            label: "TeamD Score",
            data: [90, 30],
            backgroundColor: [
                "#ff5722",
                "#9ed80d"
            ],
            borderColor: [
                "#E39371",
                "#1D7A46"
            ],
            borderWidth: [0, 0]
        }]
    };

    //options
    var options = {
        responsive: true,
        title: {
            display: false,
            position: "top",
            text: "Doughnut Chart",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: true,
            position: "left",
            labels: {
                boxWidth: 15,
                fontColor: "#333",
                fontSize: 16,
                generateLabels: function (chart) {
                    var data = chart.data;
                    if (data.labels.length && data.datasets.length) {
                        return data.labels.map(function (label, i) {
                            var meta = chart.getDatasetMeta(0);
                            var ds = data.datasets[0];
                            var arc = meta.data[i];
                            var custom = arc && arc.custom || {};
                            var getValueAtIndexOrDefault = theHelp.getValueAtIndexOrDefault;
                            var arcOpts = chart.options.elements.arc;
                            var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                            var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                            var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);
                            return {
                                // And finally : 
                                text: ds.data[i] + "% " + label,
                                fillStyle: fill,
                                strokeStyle: stroke,
                                lineWidth: bw,
                                hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                index: i
                            };
                        });
                    }
                    return [];
                }
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options
    });

    //create Chart class object
    var chart2 = new Chart(ctx2, {
        type: "doughnut",
        data: data2,
        options: options
    });
    //create Chart class object
    var chart3 = new Chart(ctx3, {
        type: "doughnut",
        data: data3,
        options: options
    });
    //create Chart class object
    var chart4 = new Chart(ctx4, {
        type: "doughnut",
        data: data4,
        options: options
    });
});

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultFontSize = 16;
var theHelp = Chart.helpers;

Chart.plugins.register({
    afterDatasetsDraw: function (chartInstance, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chartInstance.chart.ctx;
        chartInstance.data.datasets.forEach(function (dataset, i) {
            var meta = chartInstance.getDatasetMeta(i);
            //          if (!meta.hidden) {
            //              meta.data.forEach(function (element, index) {
            //                  // Draw the text in black, with the specified font
            //                  ctx.fillStyle = 'grey';
            //                  var fontSize = 16;
            //                  var fontStyle = 'normal';
            //                  var fontFamily = 'Helvetica Neue';
            //                  ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
            //                  // Just naively convert to string for now
            //                  var dataString = dataset.data[index].toString();
            //                  // Make sure alignment settings are correct
            //                  ctx.textAlign = 'center';
            //                  ctx.textBaseline = 'middle';
            //                  var padding = 5;
            //                  var position = element.tooltipPosition();
            //                  ctx.fillText(dataString + '%', position.x, position.y - (fontSize / 2) - padding);
            //              });
            //          }
        });
    }
});



//Arrow Change Sidenav

$("#rotateZero_arrow").click(function () {
    $(".customer_arrow").toggleClass("rotate_arrow_0");
})

$("#rotateFirst_arrow").click(function () {
    $(".setting_arrow").toggleClass("rotate_arrow_1");
})

$("#rotateSecond_arrow").click(function () {
    $(".reports_arrow").toggleClass("rotate_arrow_2");
})

$("#rotateThird_arrow").click(function () {
    $(".info_arrow").toggleClass("rotate_arrow_3");
})




/* Popup form validation */
function form_validation_popup() {
    var reason = document.getElementById('reason').value;
    if (reason == '') {
        document.getElementById('reason_error').innerHTML = 'Reason is required';
        document.getElementById('reason').style.borderColor = 'red';
        document.getElementById('reason').focus();
        return true;
    }
}

$('#reason').keypress(function () {
    $('#reason_error').css('display', 'none');
    $('#reason').css('border-color', '#008000');
});

// add customers form validation
function form_validation() {
    var fullname = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var email = document.getElementById('user_name').value;
    var second_email = document.getElementById('communication_email').value;
    var reEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var valid_email = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    var customer_phone = document.getElementById('customer_phone').value;
    var second_phone = document.getElementById('phone2').value;
    var select_list = document.getElementById('options').value;
    var billing_address = document.getElementById('billing_address').value;
    var communication_address = document.getElementById('communication_address').value;
    var location = document.getElementById('location').value;
    var customer_male = document.getElementById("profile_male").checked;
    var customer_female = document.getElementById("profile_female").checked;
    var branch = document.getElementById("registered_branch").value;
    var nationality = document.getElementById("nationality").value;
    var nri = document.getElementById("ri_nri").value;
    var occupation = document.getElementById("occupation").value;
    var designation = document.getElementById("designation").value;
    var birthday = document.getElementById('customer_birthday').value;
    var department = document.getElementById('department').value;
    var adhaar = document.getElementById('aadhaar').value;
    var pan = document.getElementById('pan_number').value;
    var countries = document.getElementById('country').value;
    var partner = document.getElementById('channel_partner').value;
    var spouse_name = document.getElementById('spouse_name').value;
    var education = document.getElementById('education').value;
    var nominee_name = document.getElementById('nominee_name').value;
    var nominee_phone = document.getElementById('nominee_phone').value;
    var status = document.getElementById('residential_status').value;
    var annual_income = document.getElementById('gross_annual_income').value;
    var regis_date = document.getElementById('registration_date').value;
    var regis_fee = document.getElementById('registration_fee').value;
    var fee_date = document.getElementById('fee_paid_date').value;
    var landline = document.getElementById('landline_number').value;
    var CP_location = document.getElementById('cp_location').value;
    var CP_rm = document.getElementById('cp_rm').value;
    var rm_email = document.getElementById('cp_rm_email_id').value;
    var validate_rm_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var rm_phone = document.getElementById('cp_rm_phone').value;
    if (fullname == '') {
        document.getElementById('name_error').innerHTML = 'Name is required';
        document.getElementById('name').style.borderColor = 'red';
        document.getElementById('name').focus();
        return false;
    } else if (fullname.length < 4) {
        document.getElementById('name_error').innerHTML = 'Name should not be less then 4 characters';
        document.getElementById('name').focus();
        return false;
    } else if (address == '') {
        document.getElementById('customer_address').innerHTML = 'Address is required';
        document.getElementById('address').style.borderColor = 'red';
        document.getElementById('address').focus();
        return false;
    } else if (address.length < 5) {
        document.getElementById('customer_address').innerHTML = 'Address should not be less then 5 characters';
        document.getElementById('address').style.borderColor = 'red';
        document.getElementById('address').focus();
        return false;
    } else if (email == '') {
        document.getElementById('customer_email').innerHTML = 'Email is required';
        document.getElementById('user_name').style.borderColor = 'red';
        document.getElementById('user_name').focus();
        return false;
    } else if (!email.match(reEmail)) {
        document.getElementById('customer_email').innerHTML = 'Invalid Email Address';
        document.getElementById('user_name').style.borderColor = 'red';
        document.getElementById('user_name').focus();
        return false;

    } else if (second_email == '') {
        document.getElementById('second_email').innerHTML = 'Secondery Email required';
        document.getElementById('communication_email').style.borderColor = 'red';
        document.getElementById('communication_email').focus();
        return false;
    } else if (!second_email.match(valid_email)) {
        document.getElementById('second_email').innerHTML = 'Invalid Email Address';
        document.getElementById('communication_email').style.borderColor = 'red';
        document.getElementById('communication_email').focus();
        return false;
    } else if (customer_phone == '') {
        document.getElementById('phone_error_msg').innerHTML = 'Phone Number is required';
        document.getElementById('customer_phone').style.borderColor = 'red';
        document.getElementById('customer_phone').focus();
        return false;
    } else if (customer_phone.length != 10) {
        document.getElementById('phone_error_msg').innerHTML = 'Phone Number length should not be less then 10 digits';
        document.getElementById('customer_phone').style.borderColor = 'red';
        document.getElementById('customer_phone').focus();
        return false;
    } else if (second_phone.length == '') {
        document.getElementById('second_phone').innerHTML = 'Phone Number is required';
        document.getElementById('phone2').style.borderColor = 'red';
        document.getElementById('phone2').focus();
        return false;
    } else if (second_phone.length != 10) {
        document.getElementById('second_phone').innerHTML = 'Phone Number length should not be less then 10 digits';
        document.getElementById('phone2').style.borderColor = 'red';
        document.getElementById('phone2').focus();
        return false;
    } else if (select_list == 'Select List Option') {
        document.getElementById('select_type').innerHTML = 'Please select an option';
        document.getElementById('options').style.borderColor = 'red';
        document.getElementById('options').focus();
        return false;
    } else if (billing_address == '') {
        document.getElementById('bill_add_error').innerHTML = 'Billing Address is Required';
        document.getElementById('billing_address').style.borderColor = 'red';
        document.getElementById('billing_address').focus();
        return false;
    } else if (billing_address.length < 5) {
        document.getElementById('bill_add_error').innerHTML = 'Billing Address should not be less then 5 characters';
        document.getElementById('billing_address').style.borderColor = 'red';
        document.getElementById('billing_address').focus();
        return false;
    } else if (communication_address == '') {
        document.getElementById('address_error').innerHTML = 'Communication Address is Required';
        document.getElementById('communication_address').style.borderColor = 'red';
        document.getElementById('communication_address').focus();
        return false;
    } else if (communication_address.length < 5) {
        document.getElementById('address_error').innerHTML = 'Communication Address should not be less then 5 characters';
        document.getElementById('communication_address').style.borderColor = 'red';
        document.getElementById('communication_address').focus();
        return false;
    } else if (location == '') {
        document.getElementById('location_error').innerHTML = 'Location is required';
        document.getElementById('location').style.borderColor = 'red';
        document.getElementById('location').focus();
        return false;
    } else if ((customer_male == '') && (customer_female == '')) {
        document.getElementById('gender_error').innerHTML = 'Please check atleast one option';
        document.getElementById('wrap_radio').style.borderColor = 'red';
        document.getElementById('wrap_radio').focus();
        return false;
    } else if (branch == '') {
        document.getElementById('branch_error').innerHTML = 'Branch name is required';
        document.getElementById('registered_branch').style.borderColor = 'red';
        document.getElementById('registered_branch').focus();
        return false;
    } else if (nationality == '') {
        document.getElementById('nationality_error').innerHTML = 'Nationality is required';
        document.getElementById('nationality').style.borderColor = 'red';
        document.getElementById('nationality').focus();
        return false;
    } else if (nri == '') {
        document.getElementById('nri_error').innerHTML = 'NRI name is required';
        document.getElementById('ri_nri').style.borderColor = 'red';
        document.getElementById('ri_nri').focus();
        return false;
    } else if (occupation == '') {
        document.getElementById('occupation_error').innerHTML = 'Occupation is required';
        document.getElementById('occupation').style.borderColor = 'red';
        document.getElementById('occupation').focus();
        return false;
    } else if (designation == '') {
        document.getElementById('designation_error').innerHTML = 'Designation is required';
        document.getElementById('designation').style.borderColor = 'red';
        document.getElementById('designation').focus();
        return false;
    } else if (birthday == '') {
        document.getElementById('birthday_error').innerHTML = 'Date of Birth is required';
        document.getElementById('customer_birthday').style.borderColor = 'red';
        document.getElementById('customer_birthday').focus();
        return false;
    } else if (department == '') {
        document.getElementById('department_error').innerHTML = 'Department Name is required';
        document.getElementById('department').style.borderColor = 'red';
        document.getElementById('department').focus();
        return false;
    } else if (adhaar == '') {
        document.getElementById('aadhaar_error').innerHTML = 'Aadhaar Number is required';
        document.getElementById('aadhaar').style.borderColor = 'red';
        document.getElementById('aadhaar').focus();
        return false;
    } else if (adhaar.length != 12) {
        document.getElementById('aadhaar_error').innerHTML = 'Aadhaar Number should not be less then 12 digits';
        document.getElementById('aadhaar').style.borderColor = 'red';
        document.getElementById('aadhaar').focus();
        return false;
    } else if (pan == '') {
        document.getElementById('pan_error').innerHTML = 'Pan Number is required';
        document.getElementById('pan_number').style.borderColor = 'red';
        document.getElementById('pan_number').focus();
        return false;
    } else if (pan.length != 10) {
        document.getElementById('pan_error').innerHTML = 'Pan Number should not be less then 10 digits';
        document.getElementById('pan_number').style.borderColor = 'red';
        document.getElementById('pan_number').focus();
        return false;
    } else if (countries == 'Select Country') {
        document.getElementById('country_error').innerHTML = 'Please select a country';
        document.getElementById('country').style.borderColor = 'red';
        document.getElementById('country').focus();
        return false;
    } else if (partner == 'Select Channel Partner') {
        document.getElementById('partner_error').innerHTML = 'Please Select an option from the dropdown';
        document.getElementById('channel_partner').style.borderColor = 'red';
        document.getElementById('channel_partner').focus();
        return false;
    } else if (spouse_name == '') {
        document.getElementById('spouse_name_error').innerHTML = 'Spouse Name is required';
        document.getElementById('spouse_name').style.borderColor = 'red';
        document.getElementById('spouse_name').focus();
        return false;
    } else if (spouse_name.length < 4) {
        document.getElementById('spouse_name_error').innerHTML = 'Spouse Name should not be less then 4 characters';
        document.getElementById('spouse_name').style.borderColor = 'red';
        document.getElementById('spouse_name').focus();
        return false;
    } else if (education == '') {
        document.getElementById('education_error').innerHTML = 'Education Qualification is required';
        document.getElementById('education').style.borderColor = 'red';
        document.getElementById('education').focus();
        return false;
    } else if (nominee_name == '') {
        document.getElementById('nominee_name_error').innerHTML = 'Nominee Name is required';
        document.getElementById('nominee_name').style.borderColor = 'red';
        document.getElementById('nominee_name').focus();
        return false;
    } else if (nominee_name.length < 4) {
        document.getElementById('nominee_name_error').innerHTML = 'Nominee Name should not be less then 4 characters';
        document.getElementById('nominee_name').style.borderColor = 'red';
        document.getElementById('nominee_name').focus();
        return false;
    } else if (nominee_phone == '') {
        document.getElementById('nominee_error').innerHTML = 'Nominee Phone Number is required';
        document.getElementById('nominee_phone').style.borderColor = 'red';
        document.getElementById('nominee_phone').focus();
        return false;
    } else if (nominee_phone.length != 10) {
        document.getElementById('nominee_error').innerHTML = 'Nominee Phone Number should not be less then 10 digits';
        document.getElementById('nominee_phone').style.borderColor = 'red';
        document.getElementById('nominee_phone').focus();
        return false;
    } else if (status == 'Select Status') {
        document.getElementById('status').innerHTML = 'Please Select a status';
        document.getElementById('residential_status').style.borderColor = 'red';
        document.getElementById('residential_status').focus();
        return false;
    } else if (annual_income == '') {
        document.getElementById('income_error').innerHTML = 'Annual Income is required';
        document.getElementById('gross_annual_income').style.borderColor = 'red';
        document.getElementById('gross_annual_income').focus();
        return false;
    } else if (regis_date == '') {
        document.getElementById('registration_error').innerHTML = 'Registration Date is required';
        document.getElementById('registration_date').style.borderColor = 'red';
        document.getElementById('registration_date').focus();
        return false;
    } else if (regis_fee == '') {
        document.getElementById('fee_error').innerHTML = 'Registration Fee is required';
        document.getElementById('registration_fee').style.borderColor = 'red';
        document.getElementById('registration_fee').focus();
        return false;
    } else if (fee_date == '') {
        document.getElementById('fee_pay_error').innerHTML = 'Fee Pay Date is required';
        document.getElementById('fee_paid_date').style.borderColor = 'red';
        document.getElementById('fee_paid_date').focus();
        return false;
    } else if (landline == '') {
        document.getElementById('landline_error').innerHTML = 'Landline Number is required';
        document.getElementById('landline_number').style.borderColor = 'red';
        document.getElementById('landline_number').focus();
        return false;
    } else if (landline.length != 7) {
        document.getElementById('landline_error').innerHTML = 'Landline Number should not be less then 7 digits';
        document.getElementById('landline_number').style.borderColor = 'red';
        document.getElementById('landline_number').focus();
        return false;
    } else if (CP_location == '') {
        document.getElementById('cp_location_error').innerHTML = 'CP Location is required';
        document.getElementById('cp_location').style.borderColor = 'red';
        document.getElementById('cp_location').focus();
        return false;
    } else if (CP_rm == '') {
        document.getElementById('cp_rm_error').innerHTML = 'CP RM is required';
        document.getElementById('cp_rm').style.borderColor = 'red';
        document.getElementById('cp_rm').focus();
        return false;
    } else if (rm_email == '') {
        document.getElementById('rm_email_error').innerHTML = 'RM Email is required';
        document.getElementById('cp_rm_email_id').style.borderColor = 'red';
        document.getElementById('cp_rm_email_id').focus();
        return false;
    } else if (!rm_email.match(validate_rm_email)) {
        document.getElementById('rm_email_error').innerHTML = 'Invalid Email';
        document.getElementById('cp_rm_email_id').style.borderColor = 'red';
        document.getElementById('cp_rm_email_id').focus();
        return false;
    } else if (rm_email == '') {
        document.getElementById('rm_email_error').innerHTML = 'RM Email is required';
        document.getElementById('cp_rm_email_id').style.borderColor = 'red';
        document.getElementById('cp_rm_email_id').focus();
        return false;
    } else if (rm_phone == '') {
        document.getElementById('cp_rm_phone').innerHTML = 'RM Phone number is required';
        document.getElementById('cp_rm_phone').style.borderColor = 'red';
        document.getElementById('cp_rm_phone').focus();
        return false;
    } else if (rm_phone.length != 10) {
        document.getElementById('cp_rm_phone_error').innerHTML = 'RM Phone number should not be less then 10 digits';
        document.getElementById('cp_rm_phone').style.borderColor = 'red';
        document.getElementById('cp_rm_phone').focus();
        return false;
    } else {
        return true;
    }
}

// hide error message on input focus
$('#address').keypress(function () {
    $('#name_error').css('display', 'none');
    $('#name').css('border-color', '#008000');
});
$('#user_name').keypress(function () {
    $('#customer_address').css('display', 'none');
    $('#address').css('border-color', '#008000');
});
$('#communication_email').keypress(function () {
    $('#customer_email').css('display', 'none');
    $('#user_name').css('border-color', '#008000');
});
$('#customer_phone').keypress(function () {
    $('#second_email').css('display', 'none');
    $('#communication_email').css('border-color', '#008000');
});
$('#phone2').keypress(function () {
    $('#phone_error_msg').css('display', 'none');
    $('#customer_phone').css('border-color', '#008000');
});
$('#options').click(function () {
    $('#second_phone').css('display', 'none');
    $('#phone2').css('border-color', '#008000');
});
$('#billing_address').keypress(function () {
    $('#select_type').css('display', 'none');
    $('#options').css('border-color', '#008000');
});
$('#communication_address').keypress(function () {
    $('#bill_add_error').css('display', 'none');
    $('#billing_address').css('border-color', '#008000');
});
$('#location').keypress(function () {
    $('#address_error').css('display', 'none');
    $('#communication_address').css('border-color', '#008000');
});
$('.radio').click(function () {
    $('#location_error').css('display', 'none');
    $('#location').css('border-color', '#008000');
});
$('#registered_branch').keypress(function () {
    $('#gender_error').css('display', 'none');
    $('#wrap_radio').css('border-color', '#008000');
});
$('#nationality').keypress(function () {
    $('#branch_error').css('display', 'none');
    $('#registered_branch').css('border-color', '#008000');
});
$('#ri_nri').keypress(function () {
    $('#nationality_error').css('display', 'none');
    $('#nationality').css('border-color', '#008000');
});
$('#occupation').keypress(function () {
    $('#nri_error').css('display', 'none');
    $('#ri_nri').css('border-color', '#008000');
});
$('#designation').keypress(function () {
    $('#occupation_error').css('display', 'none');
    $('#occupation').css('border-color', '#008000');
});
$('#customer_birthday').click(function () {
    $('#designation_error').css('display', 'none');
    $('#designation').css('border-color', '#008000');
});
$('#department').keypress(function () {
    $('#birthday_error').css('display', 'none');
    $('#customer_birthday').css('border-color', '#008000');
});
$('#aadhaar').keypress(function () {
    $('#department_error').css('display', 'none');
    $('#department').css('border-color', '#008000');
});
$('#pan_number').keypress(function () {
    $('#aadhaar_error').css('display', 'none');
    $('#aadhaar').css('border-color', '#008000');
});
$('#country').click(function () {
    $('#pan_error').css('display', 'none');
    $('#pan_number').css('border-color', '#008000');

});
$('#channel_partner').click(function () {
    $('#country_error').css('display', 'none');
    $('#country').css('border-color', '#008000');
});
// $('#spouse_name').keypress(function() {
//     $('#partner_error').css('display', 'none');
//     $('#name').css('border-color' , '#008000');
// });
$('#spouse_name').keypress(function () {
    $('#partner_error').css('display', 'none');
    $('#channel_partner').css('border-color', '#008000');
});
$('#education').keypress(function () {
    $('#spouse_name_error').css('display', 'none');
    $('#spouse_name').css('border-color', '#008000');
});
$('#nominee_name').keypress(function () {
    $('#education_error').css('display', 'none');
    $('#education').css('border-color', '#008000');
});
$('#nominee_phone').keypress(function () {
    $('#nominee_name_error').css('display', 'none');
    $('#nominee_name').css('border-color', '#008000');
});
$('#residential_status').click(function () {
    $('#nominee_error').css('display', 'none');
    $('#nominee_phone').css('border-color', '#008000');
});
$('#gross_annual_income').keypress(function () {
    $('#status').css('display', 'none');
    $('#residential_status').css('border-color', '#008000');
});
$('#registration_date').click(function () {
    $('#income_error').css('display', 'none');
    $('#gross_annual_income').css('border-color', '#008000');
});
$('#registration_fee').keypress(function () {
    $('#registration_error').css('display', 'none');
    $('#registration_date').css('border-color', '#008000');
});
$('#fee_paid_date').click(function () {
    $('#fee_error').css('display', 'none');
    $('#registration_fee').css('border-color', '#008000');
});
$('#landline_number').keypress(function () {
    $('#fee_pay_error').css('display', 'none');
    $('#fee_paid_date').css('border-color', '#008000');
});
$('#cp_location').keypress(function () {
    $('#landline_error').css('display', 'none');
    $('#landline_number').css('border-color', '#008000');
});
$('#cp_rm').keypress(function () {
    $('#cp_location_error').css('display', 'none');
    $('#cp_location').css('border-color', '#008000');
});
$('#cp_rm_email_id').keypress(function () {
    $('#cp_rm_error').css('display', 'none');
    $('#cp_rm').css('border-color', '#008000');
});
$('#cp_rm_phone').keypress(function () {
    $('#rm_email_error').css('display', 'none');
    $('#cp_rm_phone_error').css('display', 'none');
    $('#cp_rm_email_id').css('border-color', '#008000');
});



// generic form validation 

function generic_form_validation() {
    var generic_name = document.getElementById('customer_name').value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var options = document.getElementById('customer_type').value;
    var date_of_birth = document.getElementById('date_of_birth').value;
    var generic_phone = document.getElementById('generic_phone').value;
    var comment = document.getElementById('comment').value;
    var file_upload = document.getElementById('file_upload').value;
    if (generic_name == '') {
        document.getElementById('generic_name').innerHTML = 'Name is required';
        document.getElementById('customer_name').focus();
        return false;
    } else if (generic_name.length < 4) {
        document.getElementById('generic_name').innerHTML = 'Name should contain atleast 4 characters';
        document.getElementById('customer_name').focus();
        return false;
    } else if (options == 'Select Option') {
        document.getElementById('select_option').innerHTML = 'Please select an option';
        document.getElementById('customer_type').focus();
        return false;
    } else if ((male == '') && (female == '')) {
        document.getElementById('generic_radio').innerHTML = 'Please check atleast one option';
        return false;
    } else if (date_of_birth == '') {
        document.getElementById('generic_dob').innerHTML = 'Date of Birth is required';
        document.getElementById('date_of_birth').focus();
        return false;
    } else if (generic_phone == '') {
        document.getElementById('generic_phone_number').innerHTML = 'Phone number is required';
        document.getElementById('generic_phone').focus();
        return false;
    } else if (generic_phone.length != 10) {
        document.getElementById('generic_phone_number').innerHTML = 'Phone number should not be less then 10 digits';
        document.getElementById('generic_phone').focus();
        return false;
    } else if (comment == '') {
        document.getElementById('comment_error').innerHTML = 'Address is required';
        document.getElementById('comment').focus();
        return false;
    } else if (comment.length < 5) {
        document.getElementById('comment_error').innerHTML = 'Address should be atleast 5 characters long';
        document.getElementById('comment').focus();
        return false;
    } else if (file_upload == '') {
        document.getElementById('generic_file').innerHTML = 'Please Select a File';
        document.getElementById('file_upload').focus();
        return false;
    } else {
        return true;
    }

}

/* Signup Page Validation  */

function signup_form_validation() {
    // e.preventDefault()

    $('.signup_error').map((val, item) => {
        $(item).css('display', 'none');
    })
    $('.signup_input').map((val, item) => {
        $(item).css({
            "border-color": '#ced4da'
        });
    })

    var signup_name = document.getElementById('signup_name').value;
    var signup_email = document.getElementById('signup_email').value;
    var valid_email = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    var phoneno = /^\d{10}$/;
    var signup_mobile = document.getElementById('signup_mobile').value;
    var countries = document.getElementById('signup_country').value;
    var signup_refer = document.getElementById('signup_refer').value;
    var signup_pass = document.getElementById('signup_pass').value;
    var signup_repass = document.getElementById('signup_repass').value;


    var counter = 0

    if (signup_name.length == 0) {
        document.getElementById('signup_name_error').innerHTML = 'Name is required.';
        document.getElementById('signup_name').style.borderColor = 'red';
        document.getElementById('signup_name').focus();
        $('#signup_name_error').css('display', 'block');
        counter++
    }
    if (signup_name.length < 4) {
        document.getElementById('signup_name_error').innerHTML = 'Name should not be less then 4 characters.';
        document.getElementById('signup_name').style.borderColor = 'red';
        document.getElementById('signup_name').focus();
        $('#signup_name_error').css('display', 'block');
        counter++
    }
    if (signup_email == '') {
        document.getElementById('signup_email_error').innerHTML = 'Email is required.';
        document.getElementById('signup_email_error').style.borderColor = 'red';
        document.getElementById('signup_email_error').focus();
        $('#signup_email_error').css('display', 'block');
        counter++
    }
    if (valid_email.test(signup_email) === false) {
        document.getElementById('signup_email_error').innerHTML = 'Valid Email is required.';
        document.getElementById('signup_email_error').style.borderColor = 'red';
        document.getElementById('signup_email_error').focus();
        $('#signup_email_error').css('display', 'block');
        counter++
    }
    if (phoneno.test(signup_mobile) === false) {
        document.getElementById('signup_mobile_error').innerHTML = 'Valid Mobile Number is required.';
        document.getElementById('signup_mobile_error').style.borderColor = 'red';
        document.getElementById('signup_mobile_error').focus();
        $('#signup_mobile_error').css('display', 'block');
        counter++
    }
    if (countries == 'Select Country') {
        document.getElementById('signup_country_error').innerHTML = 'Please select a country.';
        document.getElementById('signup_country').style.borderColor = 'red';
        document.getElementById('signup_country').focus();
        $('#signup_country_error').css('display', 'block');
        counter++
    }
    if (signup_refer == 'Referred by') {
        document.getElementById('signup_refer_error').innerHTML = 'Channel Partner is required.';
        document.getElementById('signup_refer').style.borderColor = 'red';
        document.getElementById('signup_refer').focus();
        $('#signup_refer_error').css('display', 'block');
        counter++
    }
    if (signup_pass.length == 0) {
        document.getElementById('signup_pass_error').innerHTML = 'Password is required.';
        document.getElementById('signup_pass').style.borderColor = 'red';
        document.getElementById('signup_pass').focus();
        $('#signup_pass_error').css('display', 'block');
        counter++
    }
    if (signup_pass.length < 8 && signup_pass.length != 0) {
        document.getElementById('signup_pass_error').innerHTML = 'Password must be at least 8 characters long.';
        document.getElementById('signup_pass').style.borderColor = 'red';
        document.getElementById('signup_pass').focus();
        $('#signup_pass_error').css('display', 'block');
        counter++
    }
    if (signup_repass != signup_pass) {
        document.getElementById('signup_repass_error').innerHTML = 'Password must be at least 8 characters long.';
        document.getElementById('signup_repass').style.borderColor = 'red';
        document.getElementById('signup_repass').focus();
        $('#signup_repass_error').css('display', 'block');
        counter++
    }



    if (counter === 0) {
        return true;
    } else {
        return false
    }


}


/* Callback Validation  */

function callback_form_validation() {
    // e.preventDefault()

    $('.signup_error').map((val, item) => {
        $(item).css('display', 'none');
    })
    $('.signup_input').map((val, item) => {
        $(item).css({
            "border-color": '#ced4da'
        });
    })

    var callback_name = document.getElementById('callback_name').value;
    var callback_email = document.getElementById('callback_email').value;
    var valid_email_callback = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    var phoneno = /^\d{10}$/;
    var callback_mobile = document.getElementById('callback_mobile').value;
    var callback_refer = document.getElementById('callback_refer').value;


    var counter = 0

    if (callback_name.length == 0) {
        document.getElementById('callback_name_error').innerHTML = 'Name is required.';
        // document.getElementById('callback_name').style.borderColor = 'red';
        document.getElementById('callback_name').focus();
        $('#callback_name_error').css('display', 'block');
        counter++
    }
    if (callback_name.length < 4) {
        document.getElementById('callback_name_error').innerHTML = 'Name should not be less then 4 characters.';
        // document.getElementById('callback_name').style.borderColor = 'red';
        document.getElementById('callback_name').focus();
        $('#callback_name_error').css('display', 'block');
        counter++
    }
    if (callback_email == '') {
        document.getElementById('callback_email_error').innerHTML = 'Email is required.';
        // document.getElementById('callback_email_error').style.borderColor = 'red';
        document.getElementById('callback_email_error').focus();
        $('#callback_email_error').css('display', 'block');
        counter++
    }
    if (valid_email_callback.test(callback_email) === false) {
        document.getElementById('callback_email_error').innerHTML = 'Valid Email is required.';
        // document.getElementById('callback_email_error').style.borderColor = 'red';
        document.getElementById('callback_email_error').focus();
        $('#callback_email_error').css('display', 'block');
        counter++
    }
    if (phoneno.test(callback_mobile) === false) {
        document.getElementById('callback_mobile_error').innerHTML = 'Valid Mobile Number is required.';
        // document.getElementById('callback_mobile_error').style.borderColor = 'red';
        document.getElementById('callback_mobile_error').focus();
        $('#callback_mobile_error').css('display', 'block');
        counter++
    }
    if (callback_refer == 'Referred by') {
        document.getElementById('callback_refer_error').innerHTML = 'Channel Partner is required.';
        // document.getElementById('callback_refer').style.borderColor = 'red';
        document.getElementById('callback_refer').focus();
        $('#callback_refer_error').css('display', 'block');
        counter++
    }



    if (counter === 0) {
        return true;
    } else {
        return false
    }


}

// hide error message on callback page
$('#callback_name').keypress(function () {
    $('#callback_name_error').css('display', 'none');
    $('#callback_name').css('border-color', '#008000');
});
$('#callback_email').keypress(function () {
    $('#callback_email_error').css('display', 'none');
    $('#callback_email').css('border-color', '#008000');
});
$('#callback_mobile').keypress(function () {
    $('#callback_mobile_error').css('display', 'none');
    $('#callback_mobile').css('border-color', '#008000');
});
$('#callback_refer').keypress(function () {
    $('#callback_refer_error').css('display', 'none');
    $('#callback_refer').css('border-color', '#008000');
});








// sign in form validation
function signin() {
    var user = document.getElementById('login_user').value;
    var pass = document.getElementById('login_password').value;
    if (user == '') {
        document.getElementById('user_error').innerHTML = 'Username is required';
        document.getElementById('login_user').focus();
        document.getElementById('login_user').style.borderColor = 'red';
        return false;
    } else if (user.length < 4) {
        document.getElementById('user_error').innerHTML = 'Username should be atleast 4 characters long';
        document.getElementById('login_user').focus();
        document.getElementById('login_user').style.borderColor = 'red';
        return false;

    } else if (pass.length == '') {
        document.getElementById('password_error').innerHTML = 'Password is required';
        document.getElementById('login_password').focus();
        document.getElementById('login_password').style.borderColor = 'red';
        return false;

    } else if (pass.length < 8) {
        document.getElementById('password_error').innerHTML = 'Password should contain minimun 8 characters';
        document.getElementById('login_password').focus();
        document.getElementById('login_password').style.borderColor = 'red';
        return false;

    } else {
        return true;
    }

}
// hide error message on sign in form
$('#login_password').keypress(function () {
    $('#user_error').css('display', 'none');
    $('#login_user').css('border-color', '#008000');

});


// hide error message on signup page
$('#signup_name').keypress(function () {
    $('#signup_name_error').css('display', 'none');
    $('#signup_name').css('border-color', '#008000');
});
$('#signup_email').keypress(function () {
    $('#signup_email_error').css('display', 'none');
    $('#signup_email').css('border-color', '#008000');
});
$('#signup_mobile').keypress(function () {
    $('#signup_mobile_error').css('display', 'none');
    $('#signup_mobile').css('border-color', '#008000');
});
$('#signup_country').keypress(function () {
    $('#signup_country_error').css('display', 'none');
    $('#signup_country').css('border-color', '#008000');
});
$('#signup_refer').keypress(function () {
    $('#signup_refer_error').css('display', 'none');
    $('#signup_refer').css('border-color', '#008000');
});
$('#signup_pass').keypress(function () {
    $('#signup_pass_error').css('display', 'none');
    $('#signup_pass').css('border-color', '#008000');
});
$('#signup_repass').keypress(function () {
    $('#signup_repass_error').css('display', 'none');
    $('#signup_repass').css('border-color', '#008000');
});




// hide error messages on click of input fields
$('#customer_type').click(function () {
    $('#generic_name').css('display', 'none');
});
$('.radio').click(function () {
    $('#select_option').css('display', 'none');
});
$('#date_of_birth').click(function () {
    $('#generic_radio').css('display', 'none');

});
$('#generic_phone').click(function () {
    $('#generic_dob').css('display', 'none');
});
$('#file_upload').click(function () {
    $('#generic_phone_number').css('display', 'none');
    $('#generic_file').css('display', 'none');
});

/* Change Password Validation */

function changepassword() {
    var currentpassword = document.getElementById('currentpassword').value;
    var newpassword = document.getElementById('newpassword').value;
    var confirmnewpassword = document.getElementById('confirmnewpassword').value;
    // debugger
    if (currentpassword == '') {
        document.getElementById('currentpassword_error').innerHTML = 'Current password is required.';
        document.getElementById('currentpassword').focus();
        document.getElementById('currentpassword').style.borderColor = 'red';
        $('#currentpassword_error').css('display', 'block');
        return false;
    } else if (newpassword.length < 8) {
        document.getElementById('newpassword_error').innerHTML = 'Password must be at least 8 characters long.';
        document.getElementById('newpassword').style.borderColor = 'red';
        document.getElementById('newpassword').focus();
        $('#newpassword_error').css('display', 'block');
        return false;
    } else if (confirmnewpassword != newpassword) {
        document.getElementById('confirmnewpassword_error').innerHTML = 'Passwords mismatch.';
        document.getElementById('confirmnewpassword').focus();
        document.getElementById('confirmnewpassword').style.borderColor = 'red';
        $('#confirmnewpassword_error').css('display', 'block');
        return false;

    } else {
        return true;
    }

}
// hide error message on sign in form
$('#currentpassword').keypress(function () {
    $('#currentpassword_error').css('display', 'none');
    $('#currentpassword').css('border-color', '#008000');
});

$('#newpassword').keypress(function () {
    $('#newpassword_error').css('display', 'none');
    $('#newpassword').css('border-color', '#008000');
});

$('#confirmnewpassword').keypress(function () {
    $('#confirmnewpassword_error').css('display', 'none');
    $('#confirmnewpassword').css('border-color', '#008000');
});




/* Chat menu toogle */

$(".chatbtn, .close_icon ").click(function () {
    $(".chat_container").toggleClass("show_chat");
    $(".details_container").toggleClass("shrink_details");
});

/* Help Icon Toogle */

$(".help-themes-icon").click(function () {
    $(".help-themes-icon").toggleClass("help-active");
    $(".help-themes-body").toggleClass("help-active");
    $(".help-themes-icon").toggleClass("help-themes-icon-active");

})


// $('#pagemenuSettings').on('click', function () {
//     if($('#pageSubmenu').hasClass('show') === false) {
//         $('#side_nav_settings').addClass('side_nav_hover_setting_nested')
//         $('#pagemenuSettings').addClass('setting_onclick')
//     }else {
//         $('#side_nav_settings').removeClass('side_nav_hover_setting_nested')
//         $('#pagemenuSettings').removeClass('setting_onclick')
//     }
// })



/* Side Nav Collapse */

$(".nav_collapse0").click(function () {
    $(".side_hover0").toggleClass("show_block");
})

$(".nav_collapse").click(function () {
    $(".side_hover").toggleClass("show_block");
})
$(".nav_collapse1").click(function () {
    $(".side_hover1").toggleClass("show_block");
})
$(".nav_collapse2").click(function () {
    $(".side_hover2").toggleClass("show_block");
})



/* Table loader */

$(document).ready(function () {
    setTimeout(() => {
        $('#loadingTable').hide();
        $('#unloadingTable').show();
    }, 3000);
});




/* Resizeable Table */

//var tables = document.getElementsByClassName('flexiCol');
var tables = document.getElementsByTagName('table');
for (var i = 0; i < tables.length; i++) {
    resizableGrid(tables[i]);
}

function resizableGrid(table) {
    var row = table.getElementsByTagName('tr')[0],
        cols = row ? row.children : undefined;
    if (!cols) return;

    table.style.overflow = 'hidden';

    var tableHeight = table.offsetHeight;

    for (var i = 0; i < cols.length; i++) {
        var div = createDiv(tableHeight);
        cols[i].appendChild(div);
        cols[i].style.position = 'relative';
        setListeners(div);
    }

    function setListeners(div) {
        var pageX, curCol, nxtCol, curColWidth, nxtColWidth;

        div.addEventListener('mousedown', function (e) {
            curCol = e.target.parentElement;
            nxtCol = curCol.nextElementSibling;
            pageX = e.pageX;

            var padding = paddingDiff(curCol);

            curColWidth = curCol.offsetWidth - padding;
            if (nxtCol)
                nxtColWidth = nxtCol.offsetWidth - padding;
        });

        div.addEventListener('mouseover', function (e) {
            e.target.style.borderRight = '2px solid #0000ff';
        })

        div.addEventListener('mouseout', function (e) {
            e.target.style.borderRight = '';
        })

        document.addEventListener('mousemove', function (e) {
            if (curCol) {
                var diffX = e.pageX - pageX;

                if (nxtCol)
                    nxtCol.style.width = (nxtColWidth - (diffX)) + 'px';

                curCol.style.width = (curColWidth + diffX) + 'px';
            }
        });

        document.addEventListener('mouseup', function (e) {
            curCol = undefined;
            nxtCol = undefined;
            pageX = undefined;
            nxtColWidth = undefined;
            curColWidth = undefined
        });
    }

    function createDiv(height) {
        var div = document.createElement('div');
        div.style.top = 0;
        div.style.right = 0;
        div.style.width = '5px';
        div.style.position = 'absolute';
        div.style.cursor = 'col-resize';
        div.style.userSelect = 'none';
        div.style.height = height + 'px';
        return div;
    }

    function paddingDiff(col) {

        if (getStyleVal(col, 'box-sizing') == 'border-box') {
            return 0;
        }

        var padLeft = getStyleVal(col, 'padding-left');
        var padRight = getStyleVal(col, 'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));

    }

    function getStyleVal(elm, css) {
        return (window.getComputedStyle(elm, null).getPropertyValue(css))
    }
};


/* Table heading fix */

if (/Edge/.test(navigator.userAgent)) {
    // $('.tableFixHead').css({top: -10})  
} else {

    var $th = $('.tableFixHead').find('thead th')
    // $th.css('transform', 'translateY(' + - 2 + 'px)');
    $('.tableFixHead').on('scroll', function () {
        var scrollValue = 0
        if (this.scrollTop) {
            scrollValue = this.scrollTop - 2
        } else {
            scrollValue = this.scrollTop
        }
        $th.css('transform', 'translateY(' + scrollValue + 'px)');
    });


    var $thtop = $('.tableFixHead_top').find('thead th')
    $('.tableFixHead_top').on('scroll', function () {
        var scrollValue = 0
        if (this.scrollTop) {
            scrollValue = this.scrollTop - 2
        } else {
            scrollValue = this.scrollTop
        }
        $thtop.css('transform', 'translateY(' + scrollValue + 'px)');
    });

    var $thbottom = $('.tableFixHead_bottom').find('thead th')
    $('.tableFixHead_bottom').on('scroll', function () {
        var scrollValue = 0
        if (this.scrollTop) {
            scrollValue = this.scrollTop - 2
        } else {
            scrollValue = this.scrollTop
        }
        $thbottom.css('transform', 'translateY(' + scrollValue + 'px)');
    });

}

/* Toogle Checkbox */

// function selectAll(className){
//     var items=document.getElementsByClassName(className);
//     for(var i=0; i<items.length; i++){
//         if(items[i].type=='checkbox')
//             items[i].checked=true;
//     }
// }

// function UnSelectAll(className){
//     var items=document.getElementsByClassName(className);
//     for(var i=0; i<items.length; i++){
//         if(items[i].type=='checkbox')
//             items[i].checked=false;
//     }
// }			

// function togglerFunction(elem, className) {
//     if(elem.checked) {
//         selectAll(className);
//     }else {
//         UnSelectAll(className);
//     }
// }

/* Toogle Checkbox ends*/




// enable/disable checkboxes functionality
// $(".regd_checked:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".regd_customers").prop('disabled', false);
//         $(".regd_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".regd_customers").prop('disabled', true);
//         $(".regd_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }

// });
// $(".customer_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".rm_disabled").prop('disabled', false);
//         $(".customer_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".rm_disabled").prop('disabled', true);
//         $(".customer_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".user_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".user_disabled").prop('disabled', false);
//         $(".user_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".user_disabled").prop('disabled', true);
//         $(".user_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".property_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".property_disabled").prop('disabled', false);
//         $(".property_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".property_disabled").prop('disabled', true);
//         $(".property_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".service_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".service_disabled").prop('disabled', false);
//         $(".service_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".service_disabled").prop('disabled', true);
//         $(".service_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".report_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".report_disabled").prop('disabled', false);
//         $(".report_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".report_disabled").prop('disabled', true);
//         $(".report_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".group_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".group_disabled").prop('disabled', false);
//         $(".group_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".group_disabled").prop('disabled', true);
//         $(".group_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".role_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".role_disabled").prop('disabled', false);
//         $(".role_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".role_disabled").prop('disabled', true);
//         $(".role_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".category_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".category_disabled").prop('disabled', false);
//         $(".category_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".category_disabled").prop('disabled', true);
//         $(".category_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".tax_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".tax_disabled").prop('disabled', false);
//         $(".tax_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".tax_disabled").prop('disabled', true);
//         $(".tax_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".term_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".term_disabled").prop('disabled', false);
//         $(".term_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".term_disabled").prop('disabled', true);
//         $(".term_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".invoice_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".invoice_disabled").prop('disabled', false);
//         $(".invoice_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".invoice_disabled").prop('disabled', true);
//         $(".invoice_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".vendor_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".vendor_disabled").prop('disabled', false);
//         $(".vendor_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".vendor_disabled").prop('disabled', true);
//         $(".vendor_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".lead_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".lead_disabled").prop('disabled', false);
//         $(".lead_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".lead_disabled").prop('disabled', true);
//         $(".lead_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".group_2_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".group_2_disabled").prop('disabled', false);
//         $(".group2_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".group_2_disabled").prop('disabled', true);
//         $(".group2_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".role_2_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".role_2_disabled").prop('disabled', false);
//         $(".role2_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".role_2_disabled").prop('disabled', true);
//         $(".role2_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".category_2_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".category_2_disabled").prop('disabled', false);
//         $(".category2_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".category_2_disabled").prop('disabled', true);
//         $(".category2_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// $(".tax_2_toggle:checkbox").on("change", function() {
//     if ($(this).prop("checked") == true) {
//         $(".tax_2_disabled").prop('disabled', false);
//         $(".tax2_checkbox").css({
//             'cursor': 'pointer',
//             'color': '#000'
//         });
//     } else if ($(this).prop("checked") == false) {
//         $(".tax_2_disabled").prop('disabled', true);
//         $(".tax2_checkbox").css({
//             'cursor': 'not-allowed',
//             'color': '#8c8989'
//         });
//     }
// });
// by default checkboxes will be disabled
// $(".disabled_check:checkbox").prop('disabled', true);

/* All Scripts ends Here */