$(document).ready(function () {

    handleFormValidation('candidateForm','candidateFormSubmit')

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



