onEvent('recipes', (event) => {
  ['sophisticatedbackpacks:battery_upgrade'].forEach((item) => {
    event.remove({ id: item });
  });
});
