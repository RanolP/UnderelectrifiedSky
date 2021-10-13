onEvent('item.toss', (event) => {
  switch (event.item.id) {
    case 'patchouli:guide_book':
    case 'ars_nouveau:worn_notebook':
    case 'theoneprobe:probenote':
    case 'ftbquests:book':
    case 'solcarrot:food_book':
    case 'akashictome:tome':
      break;
    default:
      return;
  }

  event.player.tell('You should not drop the guide books.');
  event.player.give(event.itemEntity.item);
  event.itemEntity.kill();
  event.player.sendInventoryUpdate();
});
