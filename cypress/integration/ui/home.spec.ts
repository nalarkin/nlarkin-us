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

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has project cards', () => {
    cy.contains('passionate');
    cy.contains(/inventory application/i);
    cy.contains(/new york times clone/i);
    cy.contains(/story generator/i);
    cy.contains(/course registration bot/i);

    cy.getBySel('contact-button');
    cy.getBySel('resume-button');

    cy.getBySel('inventory');
  });

  it('side navigation appears then hides when click away', () => {
    sideNavIsNotVisible();

    cy.getBySel('side-nav-toggle').click();

    sideNavIsVisible();

    cy.root().click(300, 300);

    sideNavIsNotVisible();
  });

  it.only('navigates to other pages', () => {
    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-inventory').click();
    cy.url({ timeout: 15000 }).should('include', '/inventory');
    cy.contains(/tech stack/i);

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-nyt').click();
    cy.url({ timeout: 15000 }).should('include', '/nyt');
    cy.contains(/tech stack/i);

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-story-gen').click();
    cy.url({ timeout: 15000 }).should('include', '/story-gen');
    cy.contains(/tech stack/i);

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-registration-bot').click();
    cy.url({ timeout: 15000 }).should('include', '/course-bot');
    cy.contains(/tech stack/i);

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-academic-advisor').click();
    cy.url({ timeout: 15000 }).should('include', '/academic-advisor');
    cy.contains(/tech stack/i);

    cy.getBySel('side-nav-toggle').click();
    cy.getBySel('side-nav-home').click();
    cy.url({ timeout: 15000 }).should('eq', `${Cypress.env('site_url')}/`);

    cy.getBySel('contact-button');
    cy.getBySel('resume-button');
  });
});

export {};
