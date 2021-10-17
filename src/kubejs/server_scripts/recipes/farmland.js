onEvent('recipes', (event) => {
  event.shaped('minecraft:farmland', ['D'], {
    D: 'minecraft:dirt',
  });
  event.shaped('farmingforblockheads:fertilized_farmland_rich', ['D', 'F'], {
    D: 'minecraft:dirt',
    F: 'farmingforblockheads:green_fertilizer',
  });
  event.shaped('farmingforblockheads:fertilized_farmland_healthy', ['D', 'F'], {
    D: 'minecraft:dirt',
    F: 'farmingforblockheads:red_fertilizer',
  });
  event.shaped('farmingforblockheads:fertilized_farmland_rich', ['D', 'F'], {
    D: 'minecraft:farmland',
    F: 'farmingforblockheads:green_fertilizer',
  });
  event.shaped('farmingforblockheads:fertilized_farmland_healthy', ['D', 'F'], {
    D: 'minecraft:farmland',
    F: 'farmingforblockheads:red_fertilizer',
  });
});
