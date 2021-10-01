onEvent('recipes', (event) => {
  ['ironfurnaces:heater', 'ironfurnaces:item_heater'].forEach((item) => {
    event.remove({ output: item });
  });
});
