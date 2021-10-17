onEvent('recipes', (event) => {
  event.recipes.createMechanicalCrafting(
    'minecraft:totem_of_undying',
    [' BGB ', ' EBE ', 'GBABG', 'HBCBH', ' GBG '],
    {
      A: 'minecraft:golden_apple',
      G: 'minecraft:gold_block',
      H: 'create:brass_hand',
      B: 'create:brass_block',
      C: 'ars_nouveau:mythical_clay',
      E: 'minecraft:emerald_block',
    }
  );
});
