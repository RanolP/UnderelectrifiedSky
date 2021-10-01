onEvent('recipes', (event) => {
  event.shapeless(Item.of('minecraft:clay_ball', 4), ['minecraft:clay']);
  event.shapeless(Item.of('minecraft:flint'), [
    '#forge:gravel',
    '#forge:gravel',
    '#forge:gravel',
  ]);

  event.shaped(Item.of('minecraft:chest', 4), ['LLL', 'L L', 'LLL'], {
    L: '#minecraft:logs',
  });

  event.shaped(Item.of('minecraft:stick', 16), ['L', 'L'], {
    L: '#minecraft:logs',
  });
});
