onEvent('recipes', (event) => {
  [
    'create:crushed_platinum_ore',
    'create:crushed_silver_ore',
    'create:crushed_tin_ore',
    'create:crushed_lead_ore',
    'create:crushed_aluminum_ore',
    'create:crushed_uranium_ore',
    'create:crushed_nickel_ore',
  ].forEach((item) => {
    event.remove({ id: item });
  });
});
