onEvent('jei.hide.items', (event) => {
  ['sophisticatedbackpacks:battery_upgrade'].forEach((item) => {
    event.hide(item);
  });
});
