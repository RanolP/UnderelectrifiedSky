onEvent('recipes', (event) => {
  event.recipes.createMechanicalCrafting(
    'minecraft:enchanted_golden_apple',
    ['   E ', '  E  ', 'CGGGC', 'GGMGG', 'GMAMG', 'GGMGG', 'CGGGC'],
    {
      E: 'minecraft:emerald_block',
      M: 'minecraft:glistering_melon_slice',
      A: 'minecraft:golden_apple',
      C: 'minecraft:golden_carrot',
      G: 'minecraft:gold_block',
    }
  );
});
