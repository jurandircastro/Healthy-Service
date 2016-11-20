import { HealthyServicePage } from './app.po';

describe('healthy-service App', function() {
  let page: HealthyServicePage;

  beforeEach(() => {
    page = new HealthyServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
