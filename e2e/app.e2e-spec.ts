import { IpconfigPage } from './app.po';

describe('ipconfig App', () => {
  let page: IpconfigPage;

  beforeEach(() => {
    page = new IpconfigPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
