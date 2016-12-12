import { MeanPortfolioPage } from './app.po';

describe('mean-portfolio App', function() {
  let page: MeanPortfolioPage;

  beforeEach(() => {
    page = new MeanPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
