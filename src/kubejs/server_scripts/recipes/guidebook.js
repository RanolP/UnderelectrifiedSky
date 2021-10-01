onEvent('recipes', (event) => {
  [
    'akashictome:tome',
    'patchouli:guide_book',
    'ars_nouveau:worn_notebook',
    'theoneprobe:probenote',
    'ftbquests:book',
    'solcarrot:food_book',
  ].forEach((item) => {
    event.remove({ output: item });
  });

  event.shapeless(global.guidebook, ['minecraft:stick']);
});
