
function cloneArrayItem(containerIdName, classToClone) {
    $(`.${classToClone}:last`).clone().find("input").val("").end().appendTo(`#${containerIdName}`)
}



function formatFormData(formSelector, containsFormArray, repeatContainerClass, formArrayPropertyName) {
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

        $(this).find(':input').each(function (e) {
            console.log(this.type)
            if (this.type != "button") {
                let name = this.name.replace("[]", "");;
                item[name] = this.value
            }
        });
        formArray.push(item);
    });

    return formArray;

}

function handleFormArrayDelete(that, repeatClassName, deleteButtonClassName) {
    var itemCount = $(`.${repeatClassName}`).length;
    console.log(itemCount);
    if (itemCount > 1) {
        (that).closest(`.${repeatClassName}`).remove();
    }
    if (itemCount == 2) {
        $(`.${deleteButtonClassName}`).attr('disabled', true);
    }
}

