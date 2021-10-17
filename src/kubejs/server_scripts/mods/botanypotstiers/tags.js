onEvent('item.tags', (event) => {
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

    event.add('botanypotstiers:botany_pot/elite', elite);
    event.add('botanypotstiers:botany_pot/elite_hopper', eliteHopper);
    event.add('botanypotstiers:botany_pot/ultra', ultra);
    event.add('botanypotstiers:botany_pot/ultra_hopper', ultraHopper);
    event.add('botanypotstiers:botany_pot/creative', creative);
    event.add('botanypotstiers:botany_pot/creative_hopper', creativeHopper);
  });
});
