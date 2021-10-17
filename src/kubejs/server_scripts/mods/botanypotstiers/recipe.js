onEvent('recipes', (event) => {
  [
    '',
    'black',
    'blue',
    'brown',
    'cyan',
    'gray',
    'green',
    'light_blue',
    'light_gray',
    'lime',
    'magenta',
    'orange',
    'pink',
    'purple',
    'red',
    'white',
    'yellow',
  ].forEach((color) => {
    const normal =
      'botanypots:' + [color, 'botany_pot'].filter(Boolean).join('_');
    const elite =
      'botanypotstiers:' +
      ['elite', color, 'botany_pot'].filter(Boolean).join('_');
    const ultra =
      'botanypotstiers:' +
      ['ultra', color, 'botany_pot'].filter(Boolean).join('_');
    const creative =
      'botanypotstiers:' +
      ['creative', color, 'botany_pot'].filter(Boolean).join('_');
    const eliteHopper =
      'botanypotstiers:' +
      ['elite_hopper', color, 'botany_pot'].filter(Boolean).join('_');
    const ultraHopper =
      'botanypotstiers:' +
      ['ultra_hopper', color, 'botany_pot'].filter(Boolean).join('_');
    const creativeHopper =
      'botanypotstiers:' +
      ['creative_hopper', color, 'botany_pot'].filter(Boolean).join('_');
    const terracotta =
      'minecraft:' + [color, 'terracotta'].filter(Boolean).join('_');

    event.shaped(eliteHopper, ['TET', 'TPT', 'ITI'], {
      P: 'botanypots:hopper_botany_pot',
      I: 'minecraft:iron_block',
      E: 'minecraft:ender_pearl',
      T: terracotta,
    });

    event.shaped(ultraHopper, ['TNT', 'TPT', 'DTD'], {
      P: eliteHopper,
      D: 'minecraft:diamond_block',
      N: 'minecraft:nether_star',
      T: terracotta,
    });

    event.shaped(creativeHopper, ['TGT', 'TPT', 'NTN'], {
      P: ultraHopper,
      N: 'minecraft:netherite_block',
      G: 'minecraft:enchanted_golden_apple',
      T: terracotta,
    });

    if (color) {
      event.shaped(elite, ['TET', 'TPT', 'ITI'], {
        P: normal,
        I: 'minecraft:iron_block',
        E: 'minecraft:ender_pearl',
        T: terracotta,
      });
      event.shaped(ultra, ['TNT', 'TPT', 'DTD'], {
        P: elite,
        D: 'minecraft:diamond_block',
        N: 'minecraft:nether_star',
        T: terracotta,
      });

      event.shaped(creative, ['TGT', 'TPT', 'NTN'], {
        P: ultra,
        N: 'minecraft:netherite_block',
        G: 'minecraft:enchanted_golden_apple',
        T: terracotta,
      });
    }
  });
});
