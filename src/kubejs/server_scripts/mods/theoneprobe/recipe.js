onEvent('recipes', (event) => {
  [
    'theoneprobe:probe',
    'theoneprobe:creativeprobe',
    'theoneprobe:diamond_helmet_probe',
    'theoneprobe:gold_helmet_probe',
    'theoneprobe:iron_helmet_probe',
  ].forEach((item) => {
    event.remove({ output: item });
  });
});
