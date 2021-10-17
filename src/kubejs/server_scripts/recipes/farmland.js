onEvent('recipes', (event) => {
  event.custom({
    type: 'bookshelf:crafting_shapeless_with_damage',
    damageAmount: 1,
    ignoreUnbreaking: false,
    ingredients: [
      {
        item: 'minecraft:dirt',
      },
      {
        type: 'bookshelf:any_hoe',
      },
    ],
    result: {
      item: 'minecraft:farmland',
    },
  });
  event.custom({
    type: 'bookshelf:crafting_shapeless_with_damage',
    damageAmount: 1,
    ignoreUnbreaking: false,
    ingredients: [
      {
        item: 'minecraft:dirt',
      },
      {
        item: 'farmingforblockheads:green_fertilizer',
      },
      {
        type: 'bookshelf:any_hoe',
      },
    ],
    result: {
      item: 'farmingforblockheads:fertilized_farmland_rich',
    },
  });
  event.custom({
    type: 'bookshelf:crafting_shapeless_with_damage',
    damageAmount: 1,
    ignoreUnbreaking: false,
    ingredients: [
      {
        item: 'minecraft:dirt',
      },
      {
        item: 'farmingforblockheads:red_fertilizer',
      },
      {
        type: 'bookshelf:any_hoe',
      },
    ],
    result: {
      item: 'farmingforblockheads:fertilized_farmland_healthy',
    },
  });
  event.shapeless('farmingforblockheads:fertilized_farmland_rich', [
    'minecraft:farmland',
    'farmingforblockheads:green_fertilizer',
  ]);
  event.shapeless('farmingforblockheads:fertilized_farmland_healthy', [
    'minecraft:farmland',
    'farmingforblockheads:red_fertilizer',
  ]);
});
