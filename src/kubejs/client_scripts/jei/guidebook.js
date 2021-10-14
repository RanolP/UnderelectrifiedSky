onEvent('recipes', (event) => {
  ['exnihilosequentia:ens_ingot_copper_blast'].forEach((item) => {
    event.hide(item);
  });
});
