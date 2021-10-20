onEvent('item.registry', (event) => {
  event
    .create('incomplete_low_covalance_dust')
    .type('create:sequenced_assembly')
    .texture('minecraft:item/gunpowder')
    .displayName('Incomplete Low Covalance Dust');
  event
    .create('incomplete_medium_covalance_dust')
    .type('create:sequenced_assembly')
    .texture('minecraft:item/gunpowder')
    .displayName('Incomplete Medium Covalance Dust');
  event
    .create('incomplete_high_covalance_dust')
    .type('create:sequenced_assembly')
    .texture('minecraft:item/gunpowder')
    .displayName('Incomplete High Covalance Dust');
  event
    .create('incomplete_dark_matter')
    .type('create:sequenced_assembly')
    .texture('minecraft:item/firework_star')
    .displayName('Incomplete Dark Matter');
  event
    .create('incomplete_red_matter')
    .type('create:sequenced_assembly')
    .texture('minecraft:item/firework_star')
    .displayName('Incomplete Red Matter');
});
