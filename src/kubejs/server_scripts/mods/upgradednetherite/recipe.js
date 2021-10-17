onEvent('recipes', (event) => {
  [
    'upgradednetherite:gold_upgraded_netherite_ingot',
    'upgradednetherite:fire_upgraded_netherite_ingot',
    'upgradednetherite:ender_upgraded_netherite_ingot',
    'upgradednetherite:water_upgraded_netherite_ingot',
    'upgradednetherite:wither_upgraded_netherite_ingot',
    'upgradednetherite:poison_upgraded_netherite_ingot',
    'upgradednetherite:phantom_upgraded_netherite_ingot',
    'upgradednetherite:feather_upgraded_netherite_ingot',
    'upgradednetherite:ultimate_upgraded_netherite_ingot',
    'upgradednetherite:corrupt_upgraded_netherite_ingot',
  ].forEach((item) => {
    event.remove({ id: item });
  });

  event.recipes
    .createMixing('4x upgradednetherite:gold_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x minecraft:gold_block',
      '12x minecraft:golden_carrot',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:fire_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x excompressum:compressed_netherrack',
      '12x minecraft:blaze_rod',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:ender_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x extendedcrafting:ender_ingot_block',
      '12x upgradednetherite:ender_upgraded_netherite_pearl',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:water_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x minecraft:sea_lantern',
      '12x minecraft:heart_of_the_sea',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:wither_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x minecraft:wither_skeleton_skull',
      '12x wstweaks:fragment',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:poison_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x extendedcrafting:black_iron_block',
      '12x minecraft:fermented_spider_eye',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:phantom_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x create:refined_radiance_casing',
      '12x minecraft:phantom_membrane',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:feather_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x #minecraft:wool',
      '12x minecraft:feather',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:ultimate_upgraded_netherite_ingot', [
      '4x upgradednetherite:gold_upgraded_netherite_ingot',
      '4x upgradednetherite:fire_upgraded_netherite_ingot',
      '4x upgradednetherite:ender_upgraded_netherite_ingot',
      '4x upgradednetherite:water_upgraded_netherite_ingot',
      '4x upgradednetherite:wither_upgraded_netherite_ingot',
      '4x upgradednetherite:poison_upgraded_netherite_ingot',
      '4x upgradednetherite:phantom_upgraded_netherite_ingot',
      '4x upgradednetherite:feather_upgraded_netherite_ingot',
      '4x extendedcrafting:enhanced_ender_ingot_block',
    ])
    .superheated();
  event.recipes
    .createMixing('4x upgradednetherite:corrupt_upgraded_netherite_ingot', [
      '4x minecraft:netherite_block',
      '4x upgradednetherite:enchanted_netherite_apple',
      '1x minecraft:nether_star',
      '12x create:shadow_steel_casing',
      '12x minecraft:dragon_breath',
      Fluid.of('exnihilosequentia:witchwater', 1000),
    ])
    .superheated();
});
