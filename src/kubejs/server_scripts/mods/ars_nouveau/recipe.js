onEvent('recipes', (event) => {
  [
    'ars_nouveau:apprentice_hood',
    'ars_nouveau:apprentice_robes',
    'ars_nouveau:apprentice_leggings',
    'ars_nouveau:apprentice_boots',
    'ars_nouveau:archmage_hood',
    'ars_nouveau:archmage_robes',
    'ars_nouveau:archmage_leggings',
    'ars_nouveau:archmage_boots',
  ].forEach((item) => {
    event.remove({ output: item });
  });

  event.shaped('ars_nouveau:apprentice_hood', ['MMM', 'MAM'], {
    A: 'ars_nouveau:novice_hood',
    M: 'ars_nouveau:blaze_fiber',
  });
  event.shaped('ars_nouveau:apprentice_robes', ['MAM', 'MMM', 'MMM'], {
    A: 'ars_nouveau:novice_robes',
    M: 'ars_nouveau:blaze_fiber',
  });
  event.shaped('ars_nouveau:apprentice_leggings', ['MMM', 'MAM', 'M M'], {
    A: 'ars_nouveau:novice_leggings',
    M: 'ars_nouveau:blaze_fiber',
  });
  event.shaped('ars_nouveau:apprentice_boots', ['M M', 'MAM'], {
    A: 'ars_nouveau:novice_boots',
    M: 'ars_nouveau:blaze_fiber',
  });

  event.shaped('ars_nouveau:archmage_hood', ['MMM', 'MAM'], {
    A: 'ars_nouveau:apprentice_hood',
    M: 'ars_nouveau:end_fiber',
  });
  event.shaped('ars_nouveau:archmage_robes', ['MAM', 'MMM', 'MMM'], {
    A: 'ars_nouveau:apprentice_robes',
    M: 'ars_nouveau:end_fiber',
  });
  event.shaped('ars_nouveau:archmage_leggings', ['MMM', 'MAM', 'M M'], {
    A: 'ars_nouveau:apprentice_leggings',
    M: 'ars_nouveau:end_fiber',
  });
  event.shaped('ars_nouveau:archmage_boots', ['M M', 'MAM'], {
    A: 'ars_nouveau:apprentice_boots',
    M: 'ars_nouveau:end_fiber',
  });
});
