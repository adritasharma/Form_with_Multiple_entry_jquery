$(document).ready(function () {

    // Getting Navbar Html Dynamically from utility.js
    var navData = createNavbar();

    $(".navbar").append(navData);

    $("form").submit(function (e) {
        e.preventDefault();
        var values = formatFormData("form", true, "skill-item", "skills");
        console.log(values)

    });

    $('#addSkillBtn').click(function () {
        cloneArrayItem('skillsContainer', 'skill-item');
    });


    $(document).on('click', ".remove-skill", function () {
        var skillCount = $('.skill-item').length;
        console.log(skillCount);
        if (skillCount > 1) {
            (this).closest(".skill-item").remove();
        }
        if (skillCount == 2) {
            $('.remove-skill').attr('disabled', true);
        }
    });

});



