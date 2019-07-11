$(function() {
 $('.shopping-list').on('click', '.shopping-item-delete', event => {
    event.target.closest('li').remove();
 });
 $('.shopping-list').on('click', '.shopping-item-toggle', event => {
     console.log(event.target.closest('span'));
    event.target.closest('.shopping-item').toggleClass('.shopping-item__checked');
});
});

