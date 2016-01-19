page.base('/');
page('', projectView.index);
page('about', aboutController.index);

page({
  hashbang: true
});
