onEvent('recipes', (event) => {
  [
    'ironfurnaces:heater',
    'ironfurnaces:item_heater',
    'ironfurnaces:silver_furnace',
    'ironfurnaces:upgrade_silver',
    'ironfurnaces:upgrade_silver2',
    'ironfurnaces:upgrade_gold2',
  ].forEach((item) => {
    event.remove({ output: item });
    event.remove({ input: item });
  });
});
