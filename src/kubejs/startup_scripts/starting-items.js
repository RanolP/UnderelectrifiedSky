onForgeEvent(
  'dev.ftb.mods.ftbteamislands.FTBTeamIslandsEvents$IslandJoined',
  (event) => {
    const player = event.player.asKJS();
    player.give(
      Item.of('everlastingabilities:ability_bottle', {
        'everlastingabilities:abilityStoreStack': [],
      })
    );
    player.give(global.guidebook);
  }
);
