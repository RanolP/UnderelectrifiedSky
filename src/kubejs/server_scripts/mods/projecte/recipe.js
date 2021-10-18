onEvent('recipes', (event) => {
  [/projecte:.*_alchemical_bag/, /projecte:conversions\/dye_bag_.*/].forEach(
    (item) => {
      event.remove({ id: item });
    }
  );
  event.remove({ id: 'projecte:philosophers_stone' });
  event.remove({ id: 'projecte:philosophers_stone_alt' });
  event.recipes.createMechanicalCrafting(
    'projecte:philosophers_stone',
    [
      ' RRLRR ',
      'RCRERCR',
      'RRUYURR',
      'LBYHYBL',
      'RRUYURR',
      'RCRERCR',
      ' RRLRR ',
    ],
    {
      R: 'extendedcrafting:redstone_ingot_block',
      L: 'extendedcrafting:luminessence_block',
      B: 'extendedcrafting:black_iron_block',
      E: 'extendedcrafting:ender_star_block',
      H: 'minecraft:heart_of_the_sea',
      C: 'create:blaze_cake',
      Y: 'extendedcrafting:crystaltine_block',
      U: 'upgradednetherite:ultimate_upgraded_netherite_ingot',
    }
  );
});
