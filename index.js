//find out what is in the "add section"

$(function() {
    $('#js-shopping-list-form').submit(event => {

        //stop the default form submission  action
        event.preventDefault();

        //store what is being added
        const newItem = $(this).find('input[name="shopping-list-entry"').val();
        
        //clear the input field//
        $('input[name="shopping-list-entry"').val('');

        //append to the shopping list @ bottom
        $('.shopping-list').append(`
        <li>
            <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
        </li>`);

    })
}
);