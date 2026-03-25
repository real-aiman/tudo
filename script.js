$(document).ready(function() {
    $('#add-btn').on('click', function() {
        var task = $('#task-input').val();
        if(task !== "") {
            var item = `<li>
                            <div class="task-text"><input type="checkbox"> ${task}</div>
                            <span class="delete-x">&times;</span>
                        </li>`;
            $('#task-list').append(item);
            $('#task-input').val('');
        }
    });
    $(document).on('click', '.delete-x', function() {
        $(this).parent().remove();
    });
    $(document).on('change', 'input[type="checkbox"]', function() {
        $(this).closest('li').toggleClass('selected-task');
    });
});