

$(function() {
    //add items to the list
    $('#js-shopping-list-form').submit(event => {

        //stop the default form submission  action
        event.preventDefault();

        //store what is being added
        const newItem = $(this).find('input[name="shopping-list-entry"').val();
        
        //clear the input field//
        $('input[name="shopping-list-entry"').val('');

        //append to the shopping list @ bottom
        $('ul.shopping-list').append(`
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
    //check off items
    $('ul').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('div').siblings('span.shopping-item').toggleClass('shopping-item__checked');
    });

    //delete created items
    $('ul').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
});