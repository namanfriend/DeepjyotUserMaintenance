import { DipJyotUserMaintenancePage } from './app.po';

describe('dip-jyot-user-maintenance App', () => {
  let page: DipJyotUserMaintenancePage;

  beforeEach(() => {
    page = new DipJyotUserMaintenancePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
