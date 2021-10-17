onEvent('recipes', (event) => {
  event.shapeless('4x minecraft:clay_ball', ['minecraft:clay']);
  event.shapeless('minecraft:flint', [
    '#forge:gravel',
    '#forge:gravel',
    '#forge:gravel',
  ]);

  event.shaped('4x minecraft:chest', ['LLL', 'L L', 'LLL'], {
    L: '#minecraft:logs',
  });

  event.shaped('16x minecraft:stick', ['L', 'L'], {
    L: '#minecraft:logs',
  });
});
