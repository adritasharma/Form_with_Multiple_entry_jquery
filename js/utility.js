/**
   * Handles show/hide functionality of each item.
   *
   * @param {string} changeIcon
   *   true/false to indicate if any icon should be changed.
   * @param {string} iconClass1
   *   the first icon to be toggled.
   * @param {string} iconClass2
   *   the second icon to be toggled.
   *
*/
function handleAccordion(changeIcon, iconClass1, iconClass2) {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            if (changeIcon) {
                $("i.panel-icon", this).toggleClass(`${iconClass1} ${iconClass2}`);
            }
            $(".panel", this).toggle();
        });

    }
}

/**
   * Creates Navbar HTML based on json Data
   *
*/
function createNavbar() {

    var navData = [
        {
            text: "Home",
            link: "#home",
            icon: "fa fa-home",
            showDropDown: false
        },
        {
            text: "Invoices & Payments",
            icon: "fa fa-file-o",
            showDropDown: true,
            dropdowns: [
                {
                    text: "Invoice",
                    link: "#",
                    icon: ""
                },
                {
                    text: "Payment",
                    link: "#",
                    icon: ""
                }
            ]
        },
        {
            text: "Contracts",
            icon: "fa fa-bookmark-o",
            showDropDown: true,
            dropdowns: [
                {
                    text: "View Contracts",
                    link: "#",
                    icon: ""
                },
                {
                    text: "Manage Documents",
                    link: "#",
                    icon: ""
                }
            ]
        },
        {
            text: "Applications",
            link: "#application",
            icon: "fa fa-file-text-o",
            showDropDown: false
        }
    ]
    var navContent = ``;

    $.each(navData, function (index, nav) {
        if (!nav.showDropDown) {
            navContent += `<a href="${nav.link}"><i class="${nav.icon}"></i> ${nav.text}</a>`
        } else {
            navContent += ` 
            <div class="dropdown">
                <button class="dropbtn"><i class="${nav.icon}"></i> ${nav.text}
                    <i class="fa fa-angle-down"></i>
                </button>
                <div class="dropdown-content">`

            $.each(nav.dropdowns, function (index, dropdown) {
                navContent += `<a href="${dropdown.link}"><i class="${dropdown.icon}"></i> ${dropdown.text}</a>`
            })
            navContent += `</div>
            </div>`
        }
    });
    return navContent;
}


function formatFormData(formSelector, containsFormArray,repeatContainerClass, formArrayPropertyName) {
    var values = {};
    $.each($(formSelector).serializeArray(), function (i, field) {
        if (containsFormArray) {
            if (!field.name.includes("[]")) {
                values[field.name] = field.value;
            }

        } else {
            values[field.name] = field.value;
        }
    });
    values[formArrayPropertyName] = formatFormArrayData(repeatContainerClass);
    return values;
}

function formatFormArrayData(repeatContainerClass) {
    let formArray = [];

    $(`.${repeatContainerClass}`).each(function (e) {
        let item = {}
        $(this).find("input").each(function (e) {
            if (this.type != "button") {
                let name = this.name.replace("[]", "");;
                item[name] = this.value
            }
        });
        formArray.push(item);
    });

    return formArray;

}


/**
   * Makes AJAX request to get data from API. For demo, I have returned raw json data,
   * ideally it should be returned in callBack Function
   *
   * @param {string} url
   *   endpoint to fetch data.
   * @param {string} successCallback
   *   callBack function to be returned on success
   *
*/
function GetAjax(url, successCallback) {
    // $.ajax({
    //     type: 'GET',
    //     dataType: 'json',
    //     async: false,
    //     success: successCallback,
    //     error: function (xhr, textStatus, errorThrown) {
    //         console.log('error');
    //     }
    // });
    var data = [
        {
            "ContractNo": "123-1",
            "ProductType": "Equipment Lease",
            "CommencementDate": "11/18/2020",
            "Term": 8,
            "MaturityDate": "03/14/2021",
            "Amount": "175582.15 USD",
            "Status": true,
            "PaymentFrequency": "Monthly",
            "PrincipalBalance": "121,511.48 USD",
            "InterestBalance": "151,910.18 USD",
            "TotalBalance": "106,910.18 USD",
            "PaymentsRemaining": "12"
        }, {
            "ContractNo": "123-2",
            "ProductType": "Equipment Loan",
            "CommencementDate": "16/09/2021",
            "Term": 7,
            "MaturityDate": "03/11/2021",
            "Amount": "123582.15 USD",
            "Status": true,
            "PaymentFrequency": "Monthly",
            "PrincipalBalance": "121,511.48 USD",
            "InterestBalance": "151,910.18 USD",
            "TotalBalance": "106,910.18 USD",
            "PaymentsRemaining": "12"
        }, {
            "ContractNo": "123-3",
            "ProductType": "Equipment Lease",
            "CommencementDate": "12/18/2020",
            "Term": 7,
            "MaturityDate": "03/14/2021",
            "Amount": "175582.15 USD",
            "Status": false,
            "PaymentFrequency": "Monthly",
            "PrincipalBalance": "95,511.48 USD",
            "InterestBalance": "151,910.18 USD",
            "TotalBalance": "106,910.18 USD",
            "PaymentsRemaining": "13"
        }]

    return data;

}