const sideNavDataTestNames = [
  'home',
  'inventory',
  'nyt',
  'story-gen',
  'registration-bot',
  'academic-advisor',
].map((name) => `side-nav-${name}`);

const sideNavVisibility = (isVisible: boolean) => {
  const testStatement = `${isVisible ? '' : 'not.'}be.visible`;
  sideNavDataTestNames.forEach((name) => {
    cy.getBySel(name).should(testStatement);
  });
};

const sideNavIsVisible = () => {
  sideNavVisibility(true);
};
const sideNavIsNotVisible = () => {
  sideNavVisibility(false);
};

const expectProjectPage = (slug: string) => {
  // large delay for slow development compile speeds
  cy.url({ timeout: 20000 }).should('include', slug);
  cy.contains(/tech stack/i);
};

const expectHomePage = () => {
  cy.url({ timeout: 15000 }).should('eq', `${Cypress.env('site_url')}/`);
  cy.getBySel('contact-button');
  cy.getBySel('resume-button');
};

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has project cards', () => {
    cy.contains('passionate');
    cy.getBySel('nyt').scrollIntoView();

    cy.getBySel('nyt');
    cy.getBySel('card-footer-nyt')
      .contains(/github/i)
      .should('have.attr', 'href')
      .and('eq', 'https://github.com/nalarkin/nlarkin-us');

    cy.getBySel('card-footer-nyt')
      .contains(/view site/i)
      .should('have.attr', 'href')
      .and('eq', 'https://www.nlarkin.us/news');

    cy.getBySel('inventory');
    cy.getBySel('card-footer-inventory')
      .contains(/github/i)
      .should('have.attr', 'href')
      .and('eq', 'https://github.com/nalarkin/prisma-morse');

    cy.getBySel('story-gen');
    cy.getBySel('card-footer-story-gen')
      .contains(/github/i)
      .should('have.attr', 'href')
      .and('eq', 'https://github.com/nalarkin/story-generator');

    cy.getBySel('registration-bot');
    cy.getBySel('card-footer-registration-bot')
      .contains(/youtube/i)
      .should('have.attr', 'href')
      .and('eq', 'https://youtu.be/ymE4Cj72WnM');

    cy.getBySel('contact-button');
    cy.getBySel('resume-button');

    cy.getBySel('inventory');
  });

  it('has side navigation that appears when clicked, and hides when click away', () => {
    sideNavIsNotVisible();

    cy.getBySel('side-nav-toggle').click();

    sideNavIsVisible();

    cy.root().click(300, 300);

    sideNavIsNotVisible();
  });

  it('can navigate to other pages using the side navigation', () => {
    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-inventory').click();
    expectProjectPage('/inventory');

    // cy.getBySel('side-nav-toggle').click();
    cy.getBySel('nav-home-link').click();
    expectHomePage();

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-nyt').click();
    expectProjectPage('/nyt');

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-story-gen').click();
    expectProjectPage('/story-gen');

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-registration-bot').click();
    expectProjectPage('/course-bot');

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-academic-advisor').click();

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-home').click();
    expectHomePage();
  });

  it('can navigate to other pages using the project cards', () => {
    cy.getBySel('nyt').click();
    expectProjectPage('/nyt');

    cy.go('back');

    cy.getBySel('inventory').click();
    expectProjectPage('/inventory');

    cy.go('back');

    cy.getBySel('story-gen').click();
    expectProjectPage('/story-gen');

    cy.go('back');

    cy.getBySel('registration-bot').click();
    expectProjectPage('/course-bot');
  });
});

export {};
