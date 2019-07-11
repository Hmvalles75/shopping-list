$(function() {
    $('.shopping-list').on('click', '.shopping-item-delete', event => {
      event.target.closest('li').remove();
     });
    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
      let toggle = $(event.target.closest('li')).children('.shopping-item');
     console.log(toggle);
     toggle.toggleClass('shopping-item__checked');
    });
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const food = $(this).find('input[name= "shopping-list-entry').val();
        console.log(food);
        $('.shopping-list').append(`<li>
            <span class="shopping-item">${food}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span></button>
            <button class="shopping-item-delete">
            <span class="button-label">delete</span> </button> </div> </li>`);
    });
});

