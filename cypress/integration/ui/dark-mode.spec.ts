/**
 * Note: it appears that "cypress" theme in the Google Chrome test runner has a dark-mode preference in browser settings
 * @TODO: Write the code so it determines the theme at launch, and toggles between themes based off the first detected theme
 */

export const expectLightModeEnabled = () => {
  cy.getBySel('light-theme').should('be.visible');
  cy.getBySel('dark-theme').should('not.exist');
};

export const expectDarkModeEnabled = () => {
  cy.getBySel('dark-theme').should('be.visible');
  cy.getBySel('light-theme').should('not.exist');
};

describe('Dark mode', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it.skip('initially is dependent on users system settings ', () => {
    //
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(true).to.be.true;
  });

  it('allows user to switch modes', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    expect(localStorage.getItem('theme')).to.be.null;

    // toggle to light mode
    cy.getBySel('theme-toggle')
      .click()
      .should(() => {
        expect(localStorage.getItem('theme')).to.be.eq('light');
      });

    expectLightModeEnabled();

    // theme persists on reload
    cy.reload();
    expectLightModeEnabled();

    // toggle to light mode
    cy.getBySel('theme-toggle')
      .click()
      .should(() => {
        expect(localStorage.getItem('theme')).to.be.eq('dark');
      });

    expectDarkModeEnabled();

    // theme persists on reload
    cy.reload();
    expectDarkModeEnabled();
  });

  it('theme persists during navigation between pages', () => {
    //
    cy.getBySel('theme-toggle')
      .click()
      .should(() => {
        expect(localStorage.getItem('theme')).to.be.eq('light');
      });

    expectLightModeEnabled();

    cy.getBySel('contact-button').click();

    cy.contains(/phone/i);
    expectLightModeEnabled();

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-inventory').click();

    cy.url().should('include', '/inventory');
    cy.contains(/tech stack/i);
    expectLightModeEnabled();

    cy.getBySel('theme-toggle')
      .click()
      .should(() => {
        expect(localStorage.getItem('theme')).to.be.eq('dark');
      });

    expectDarkModeEnabled();

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-nyt').click();

    cy.url().should('include', '/nyt');
    cy.contains(/tech stack/i);
    expectDarkModeEnabled();

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-registration-bot').click();

    cy.url().should('include', '/course-bot');
    cy.contains(/tech stack/i);
    expectDarkModeEnabled();
  });
});
