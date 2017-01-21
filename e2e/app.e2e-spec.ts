import { Angular2JokeCliPage } from './app.po';

describe('angular2-joke-cli App', function() {
  let page: Angular2JokeCliPage;

  beforeEach(() => {
    page = new Angular2JokeCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
