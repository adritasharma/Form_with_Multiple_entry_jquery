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

function cloneArrayItem(containerIdName, classToClone){
    $(`.${classToClone}:last`).clone().find("input").val("").end().appendTo(`#${containerIdName}`)
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


