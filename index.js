$(function() {
 $('.shopping-list').on('click', '.shopping-item-delete', event => {
    event.target.closest('li').remove();
 });
 $('.shopping-list').on('click', '.shopping-item-toggle', event => {
     let toggle = $(event.target.closest('li')).children('.shopping-item');
    console.log(toggle);
    toggle.toggleClass('shopping-item__checked');
 });

});

