onEvent('recipes', (event) => {
  event.replaceInput(
    { output: 'storagenetwork:kabel' },
    'minecraft:stone_slab',
    'create:iron_sheet'
  );
  event.replaceInput(
    { output: 'storagenetwork:kabel' },
    'minecraft:iron_ingot',
    'create:andesite_alloy'
  );

  event.replaceInput(
    { output: 'storagenetwork:master' },
    'minecraft:quartz_block',
    'create:brass_casing'
  );

  event.replaceInput(
    { output: 'storagenetwork:inventory' },
    'minecraft:iron_nugget',
    'create:iron_sheet'
  );
  event.replaceInput(
    { output: 'storagenetwork:inventory' },
    'minecraft:dropper',
    'create:goggles'
  );

  event.replaceInput(
    { output: 'storagenetwork:inventory' },
    'minecraft:gold_ingot',
    'create:gold_sheet'
  );

  // TODO: patch recipes
  // storagenetwork:storage_kabel
  // storagenetwork:import_kabel
  // storagenetwork:import_filter_kabel
  // storagenetwork:filter_kabel
  // storagenetwork:export_kabel
  // storagenetwork:exchange
  // storagenetwork:collector
  // storagenetwork:stack_upgrade
  // storagenetwork:speed_upgrade
  // storagenetwork:inventory_remote
  // storagenetwork:crafting_remote
  // storagenetwork:picker_remote
  // storagenetwork:collector_remote
  // storagenetwork:builder_remote
});
