onEvent('recipes', (event) => {
  [
    'exnihilosequentia:ingot_copper',
    'exnihilosequentia:ens_ingot_copper_blast',
    'exnihilosequentia:ens_ingot_copper',
    'exnihilosequentia:ingot_zinc',
    'exnihilosequentia:ens_ingot_zinc_blast',
    'exnihilosequentia:ens_ingot_zinc',
  ].forEach((item) => {
    event.remove({ id: item });
  });
  event.replaceInput('#forge:ingots/copper', 'create:copper_ingot');
  event.replaceInput('#forge:ingots/zinc', 'create:zinc_ingot');
});
