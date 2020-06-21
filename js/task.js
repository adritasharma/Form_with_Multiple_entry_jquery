$(document).ready(function () {

    let formRules = {
        name: {
            required: true,
            'two-words': true
        },
        experience: {
            required: true
        },
        'technology[]': {
            required: true
        },
        'expertise[]': {
            required: true
        }
    }

    let validationMsgs = {
        name: {
            required: 'Please mention your name!',
            'two-words': 'Please add firstname and lastname'
        },
        experience: {
            required: 'We want your experience',
            // email: 'Invalid email'
        },
        'technology[]': {
            required: 'We want your technology',
        },
        'expertise[]': {
            required: 'We want your expertise',
        }
    }
    handleFormValidation(formRules, validationMsgs);

   // handleFormValidation('candidateForm', 'candidateFormSubmit');

















    $('#addSkillBtn').click(function () {
        cloneArrayItem('skillsContainer', 'skill-item');
        $('.remove-skill').attr('disabled', false);
    });


    $(document).on('click', ".remove-skill", function () {
        handleFormArrayDelete(this, "skill-item", "remove-skill");
    });

    $("form").submit(function (e) {
        e.preventDefault();
        var values = formatFormData("form", true, "skill-item", "skills");
        console.log(values)
        $('#result').empty();
        $('#result').append(JSON.stringify(values));
    });

});



