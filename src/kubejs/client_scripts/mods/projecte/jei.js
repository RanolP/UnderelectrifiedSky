onEvent('jei.hide.items', (event) => {
  [/projecte:.*_alchemical_bag/, /projecte:conversions\/dye_bag_.*/].forEach(
    (item) => {
      event.hide(item);
    }
  );
});
