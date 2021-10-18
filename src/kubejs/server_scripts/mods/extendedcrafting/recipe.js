onEvent('recipes', (event) => {
  event.remove({ id: 'extendedcrafting:black_iron_ingot' });
  event.shaped('extendedcrafting:black_iron_ingot', ['CSC', 'STS', 'CSC'], {
    C: 'minecraft:coal_block',
    S: 'create:dark_scoria',
    T: 'create:shadow_steel',
  });

  event.remove({ id: 'extendedcrafting:redstone_ingot' });
  event.shaped('extendedcrafting:redstone_ingot', ['BRB', 'TIP', 'BCB'], {
    B: 'minecraft:redstone_block',
    R: 'minecraft:redstone',
    T: 'minecraft:redstone_torch',
    I: 'create:refined_radiance',
    P: 'minecraft:repeater',
    C: 'minecraft:comparator',
  });

  event.remove({ id: 'extendedcrafting:ender_ingot' });
  event.shaped('extendedcrafting:ender_ingot', ['ENE', 'SIR', 'ENE'], {
    E: 'minecraft:ender_eye',
    N: 'upgradednetherite:ender_upgraded_netherite_pearl',
    S: 'create:shadow_steel',
    I: 'minecraft:iron_block',
    R: 'create:refined_radiance',
  });

  event.remove({ id: 'extendedcrafting:ender_crafter' });
  event.recipes.createMechanicalCrafting(
    'extendedcrafting:ender_crafter',
    [
      'MEEEEEM',
      'EEEEEEE',
      'BBCUCBB',
      'BBUCUBB',
      'BBCUCBB',
      'BBBBBBB',
      'BBBBBBB',
    ],
    {
      E: 'minecraft:ender_eye',
      M: 'minecraft:emerald_block',
      B: 'extendedcrafting:ender_ingot_block',
      U: 'extendedcrafting:ultimate_table',
      C: 'create:mechanical_crafter',
    }
  );

  event.remove({ id: 'extendedcrafting:ender_alternator' });
  event.recipes.createMechanicalCrafting(
    'extendedcrafting:ender_alternator',
    [' MEM ', '  R  ', 'B R B', 'BBCBB', 'BBBBB'],
    {
      E: 'minecraft:ender_eye',
      M: 'minecraft:emerald_block',
      B: 'extendedcrafting:ender_ingot_block',
      R: 'minecraft:end_rod',
      C: 'minecraft:clock',
    }
  );

  event.replaceInput(
    { output: 'extendedcrafting:enhanced_ender_ingot' },
    'extendedcrafting:ender_ingot',
    'extendedcrafting:ender_ingot_block'
  );
});
