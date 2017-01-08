import { NgCli24Page } from './app.po';

describe('ng-cli24 App', function() {
  let page: NgCli24Page;

  beforeEach(() => {
    page = new NgCli24Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
