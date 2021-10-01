onEvent('jei.hide.items', (event) => {
  [
    /excompressum:.*_crucible/,
    'excompressum:uncompressed_coal',
    'excompressum:iron_mesh',
    'excompressum:ugly_steel_plating',
    'excompressum:auto_hammer',
    'excompressum:auto_compressed_hammer',
    'excompressum:auto_sieve',
    'excompressum:auto_heavy_sieve',
    'excompressum:auto_compressor',
    'excompressum:rationing_auto_compressor',
  ].forEach((item) => {
    event.hide(item);
  });
});
