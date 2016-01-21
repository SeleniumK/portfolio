page.base('/');

page('', index);
page('about', about);

function index(){
  pageController.index(Project);
};

function about(){
  pageController.index(Repo);
};

page({
  hashbang: true
});
