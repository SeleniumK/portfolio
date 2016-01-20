page.base('/');
page('', pageController.projectIndex);
page('about', pageController.aboutIndex);

page({
  hashbang: true
});
