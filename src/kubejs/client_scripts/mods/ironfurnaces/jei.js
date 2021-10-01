onEvent('jei.hide.items', (event) => {
  ['ironfurnaces:heater', 'ironfurnaces:item_heater'].forEach((item) => {
    event.hide(item);
  });
});
