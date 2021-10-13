onEvent('jei.hide.items', (event) => {
  [
    'ironchest:dirt_chest',
    'ironchest:copper_to_silver_chest_upgrade',
    'ironchest:silver_to_gold_chest_upgrade',
    'ironchest:silver_chest',
  ].forEach((item) => {
    event.hide(item);
  });
});
