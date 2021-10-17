onEvent('jei.hide.items', (event) => {
  [
    'farmingforblockheads:yellow_fertilizer',
    'farmingforblockheads:fertilized_farmland_stable',
    'farmingforblockheads:fertilized_farmland_healthy_stable',
    'farmingforblockheads:fertilized_farmland_rich_stable',
  ].forEach((item) => {
    event.hide(item);
  });
});
