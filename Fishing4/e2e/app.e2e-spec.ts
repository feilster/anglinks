import { Fishing4Page } from './app.po';

describe('fishing4 App', () => {
  let page: Fishing4Page;

  beforeEach(() => {
    page = new Fishing4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
