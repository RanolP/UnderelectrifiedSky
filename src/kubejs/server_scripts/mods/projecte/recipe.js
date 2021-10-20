onEvent('recipes', (event) => {
  [/projecte:.*_alchemical_bag/, /projecte:conversions\/dye_bag_.*/].forEach(
    (item) => {
      event.remove({ id: item });
    }
  );

  event.remove({ output: 'projecte:philosophers_stone' });
  event.recipes.createMechanicalCrafting(
    'projecte:philosophers_stone',
    [
      ' RRLRR ',
      'RCRERCR',
      'RRUYURR',
      'LBYHYBL',
      'RRUYURR',
      'RCRERCR',
      ' RRLRR ',
    ],
    {
      R: 'extendedcrafting:redstone_ingot_block',
      L: 'extendedcrafting:luminessence_block',
      B: 'extendedcrafting:black_iron_block',
      E: 'extendedcrafting:ender_star_block',
      H: 'minecraft:heart_of_the_sea',
      C: 'create:blaze_cake',
      Y: 'extendedcrafting:crystaltine_block',
      U: 'upgradednetherite:ultimate_upgraded_netherite_ingot',
    }
  );

  event.recipes
    .createSequencedAssembly(
      [
        Item.of('projecte:low_covalence_dust').withChance(64.0),
        Item.of('minecraft:charcoal').withChance(36.0),
      ],
      'minecraft:charcoal',
      [
        event.recipes.createDeploying('kubejs:incomplete_low_covalance_dust', [
          'kubejs:incomplete_low_covalance_dust',
          'excompressum:compressed_cobblestone',
        ]),
      ]
    )
    .transitionalItem('kubejs:incomplete_low_covalance_dust')
    .loops(32);
  event.remove({ id: 'projecte:low_covalence_dust' });

  event.recipes
    .createSequencedAssembly(
      [
        Item.of('projecte:medium_covalence_dust').withChance(64.0),
        Item.of('create:refined_radiance').withChance(36.0),
      ],
      'create:refined_radiance',
      [
        event.recipes.createDeploying(
          'kubejs:incomplete_medium_covalance_dust',
          [
            'kubejs:incomplete_medium_covalance_dust',
            'minecraft:redstone_block',
          ]
        ),
      ]
    )
    .transitionalItem('kubejs:incomplete_medium_covalance_dust')
    .loops(32);
  event.remove({ id: 'projecte:medium_covalence_dust' });

  event.recipes
    .createSequencedAssembly(
      [
        Item.of('projecte:high_covalence_dust').withChance(64.0),
        Item.of('extendedcrafting:black_iron_ingot').withChance(36.0),
      ],
      'extendedcrafting:black_iron_ingot',
      [
        event.recipes.createDeploying('kubejs:incomplete_high_covalance_dust', [
          'kubejs:incomplete_high_covalance_dust',
          'minecraft:diamond_block',
        ]),
      ]
    )
    .transitionalItem('kubejs:incomplete_high_covalance_dust')
    .loops(32);
  event.remove({ id: 'projecte:high_covalence_dust' });

  console.info(Item.of('projecte:low_covalance_dust'));

  event.remove({ id: 'projecte:alchemical_chest' });
  event.recipes.createMechanicalCrafting(
    'projecte:alchemical_chest',
    [
      ' LSSML ',
      'LSSMSSL',
      'MSHHHSS',
      'SMHOHMS',
      'SSHHHSM',
      'LSSMSSL',
      ' LMSSL ',
    ],
    {
      S: 'extendedcrafting:black_iron_slate',
      O: 'ironchest:obsidian_chest',
      H: 'projecte:high_covalence_dust',
      M: 'projecte:medium_covalence_dust',
      L: 'projecte:low_covalence_dust',
    }
  );

  event.remove({ id: 'projecte:condenser_mk1' });
  event.recipes.createMechanicalCrafting(
    'projecte:condenser_mk1',
    [
      'DBECEBD',
      'BCUMUCB',
      'EUHRHUE',
      'CLRARLC',
      'EUHRHUE',
      'BCUMUCB',
      'DBECEBD',
    ],
    {
      D: 'projecte:dark_matter',
      R: 'projecte:red_matter',
      C: 'upgradednetherite:corrupt_upgraded_netherite_ingot',
      U: 'upgradednetherite:ultimate_upgraded_netherite_ingot',
      E: 'extendedcrafting:enhanced_ender_ingot_block',
      B: 'extendedcrafting:black_iron_block',
      L: 'projecte:low_covalence_dust',
      M: 'projecte:medium_covalence_dust',
      H: 'projecte:high_covalence_dust',
      A: 'projecte:alchemical_chest',
    }
  );

  event.recipes
    .createSequencedAssembly(
      [
        Item.of('projecte:dark_matter').withChance(64.0),
        Item.of(
          'upgradednetherite:ultimate_upgraded_netherite_ingot'
        ).withChance(36.0),
      ],
      'upgradednetherite:ultimate_upgraded_netherite_ingot',
      [
        event.recipes.createDeploying('kubejs:incomplete_dark_matter', [
          'kubejs:incomplete_dark_matter',
          'projecte:aeternalis_fuel_block',
        ]),
        event.recipes.createDeploying('kubejs:incomplete_dark_matter', [
          'kubejs:incomplete_dark_matter',
          'extendedcrafting:crystaltine_block',
        ]),
        event.recipes.createDeploying('kubejs:incomplete_red_matter', [
          'kubejs:incomplete_red_matter',
          'extendedcrafting:ender_ingot_block',
        ]),
        event.recipes.createPressing('kubejs:incomplete_dark_matter', [
          'kubejs:incomplete_dark_matter',
        ]),
      ]
    )
    .transitionalItem('kubejs:incomplete_dark_matter')
    .loops(64);
  event.remove({ id: 'projecte:dark_matter' });

  event.recipes
    .createSequencedAssembly(
      [
        Item.of('projecte:red_matter').withChance(64.0),
        Item.of('projecte:dark_matter').withChance(36.0),
      ],
      'projecte:dark_matter',
      [
        event.recipes.createDeploying('kubejs:incomplete_red_matter', [
          'kubejs:incomplete_red_matter',
          'projecte:aeternalis_fuel_block',
        ]),
        event.recipes.createDeploying('kubejs:incomplete_red_matter', [
          'kubejs:incomplete_red_matter',
          'extendedcrafting:redstone_ingot_block',
        ]),
        event.recipes.createDeploying('kubejs:incomplete_red_matter', [
          'kubejs:incomplete_red_matter',
          'extendedcrafting:enhanced_ender_ingot_block',
        ]),
        event.recipes.createPressing('kubejs:incomplete_red_matter', [
          'kubejs:incomplete_red_matter',
        ]),
      ]
    )
    .transitionalItem('kubejs:incomplete_red_matter')
    .loops(64);
  event.remove({ id: 'projecte:red_matter' });
  event.remove({ id: 'projecte:red_matter_alt' });

  event.remove({ id: 'projecte:transmutation_table' });
  event.recipes.createMechanicalCrafting(
    'projecte:transmutation_table',
    [
      'DDRDDDD',
      'DDNRNDD',
      'DNNRNNR',
      'DRRPRRD',
      'RNNRNND',
      'DDNRNDD',
      'DDDDRDD',
    ],
    {
      D: 'projecte:dark_matter_block',
      R: 'projecte:red_matter',
      P: 'projecte:philosophers_stone',
      N: 'extendedcrafting:nether_star_block',
    }
  );
});
