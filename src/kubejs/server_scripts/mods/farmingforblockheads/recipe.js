onEvent('recipes', (event) => {
  [
    'farmingforblockheads:yellow_fertilizer',
    'farmingforblockheads:fertilized_farmland_stable',
    'farmingforblockheads:fertilized_farmland_healthy_stable',
    'farmingforblockheads:fertilized_farmland_rich_stable',
  ].forEach((item) => {
    event.remove({ id: item });
  });
});
