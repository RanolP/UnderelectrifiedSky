onEvent('recipes', (event) => {
  event.replaceInput(
    { output: 'cobblefordays:tier_2' },
    /minecraft:.+_bucket/,
    'create:andesite_alloy'
  );
  event.replaceInput(
    { output: 'cobblefordays:tier_2' },
    'minecraft:glass',
    'cobblefordays:tier_1'
  );
  event.shaped('cobblefordays:tier_2', ['AAA', 'WCL', 'AAA'], {
    A: 'create:andesite_casing',
    C: 'create:large_cogwheel',
    W: 'minecraft:water_bucket',
    L: 'minecraft:lava_bucket',
  });

  event.replaceInput(
    { output: 'cobblefordays:tier_3' },
    'minecraft:iron_ingot',
    'create:iron_sheet'
  );
  event.replaceInput(
    { output: 'cobblefordays:tier_3' },
    /minecraft:.+_bucket/,
    'create:copper_sheet'
  );
  event.replaceInput(
    { output: 'cobblefordays:tier_3' },
    'minecraft:glass',
    'cobblefordays:tier_2'
  );

  event.shaped('cobblefordays:tier_3', ['IZI', 'WCL', 'IZI'], {
    I: 'create:iron_sheet',
    Z: 'create:zinc_block',
    C: 'create:chute',
    W: 'minecraft:ice',
    L: 'minecraft:blaze_powder',
  });

  event.replaceInput(
    { output: 'cobblefordays:tier_4' },
    'minecraft:gold_ingot',
    'create:golden_sheet'
  );
  event.replaceInput(
    { output: 'cobblefordays:tier_4' },
    /minecraft:.+_bucket/,
    'create:iron_sheet'
  );
  event.replaceInput(
    { output: 'cobblefordays:tier_4' },
    'minecraft:glass',
    'cobblefordays:tier_3'
  );

  event.shaped('cobblefordays:tier_4', ['BHB', 'WCL', 'BHB'], {
    B: 'create:brass_sheet',
    H: 'create:brass_hand',
    C: 'create:smart_chute',
    W: 'minecraft:packed_ice',
    L: 'minecraft:blaze_rod',
  });

  event.replaceInput(
    { output: 'cobblefordays:tier_5' },
    /minecraft:.+_bucket/,
    'create:rose_quartz'
  );
  event.replaceInput(
    { output: 'cobblefordays:tier_5' },
    'minecraft:glass',
    'cobblefordays:tier_4'
  );

  event.shaped('cobblefordays:tier_5', ['BHB', 'WCL', 'BHB'], {
    B: 'minecraft:diamond_block',
    H: 'create:polished_rose_quartz',
    C: 'create:mechanical_arm',
    W: 'minecraft:blue_ice',
    L: 'create:blaze_cake',
  });

  event.shapeless('2x cobblefordays:tier_5', [
    'cobblefordays:tier_5',
    'minecraft:diamond_block',
  ]);
});
