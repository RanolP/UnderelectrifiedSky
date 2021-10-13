onEvent('jei.hide.items', (event) => {
  [
    'ironfurnaces:heater',
    'ironfurnaces:item_heater',
    'ironfurnaces:silver_furnace',
    'ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_silver2',
    'ironfurnaces:upgrade_gold2',
    'ironfurnaces:rainbow_coal',
  ].forEach((item) => {
    event.hide(item);
  });
});
