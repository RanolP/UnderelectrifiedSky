onEvent('jei.hide.items', (event) => {
  [
    'exnihilosequentia:ingot_copper',
    'exnihilosequentia:ens_ingot_copper_blast',
    'exnihilosequentia:ens_ingot_copper',
    'exnihilosequentia:ingot_zinc',
    'exnihilosequentia:ens_ingot_zinc_blast',
    'exnihilosequentia:ens_ingot_zinc',
  ].forEach((item) => {
    event.hide(item);
  });
});
