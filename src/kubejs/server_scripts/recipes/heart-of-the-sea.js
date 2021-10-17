onEvent('recipes', (event) => {
  event.recipes.createMechanicalCrafting(
    'minecraft:heart_of_the_sea',
    [' DDD ', 'DWSWD', 'DSBSD', 'DWSWD', ' DDD '],
    {
      D: 'minecraft:diamond_block',
      S: 'minecraft:sea_lantern',
      W: 'exnihilosequentia:bucket_sea_water',
      B: 'minecraft:blue_ice',
    }
  );
});
