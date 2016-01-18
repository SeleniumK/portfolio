page.base('/');
page('/', index);
page('/about', about);

page();

function index(){
  projectView.index();
}

function about(){
  aboutPage.index();
}
