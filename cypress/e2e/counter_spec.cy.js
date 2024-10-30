describe('Suite de Tests de la Page', () => {
  beforeEach(() => {
    // Visite la page avant chaque test
    cy.visit('/')
  })

  // Tests du compteur
  describe('Fonctionnalité du Compteur', () => {
    it('devrait afficher une valeur initiale de 0', () => {
      cy.get('#counter').should('have.text', 'count is 0')
    })

    it('devrait incrémenter le compteur lors du clic', () => {
      cy.get('#counter').click()
      cy.get('#counter').should('have.text', 'count is 1')
      
      // Test de plusieurs clics
      cy.get('#counter').click().click().click()
      cy.get('#counter').should('have.text', 'count is 4')
    })
  })

  // Tests des images et logos
  describe('Images et Logos', () => {
    it('devrait afficher correctement le logo Vite', () => {
      cy.get('img[alt="Vite logo"]')
        .should('be.visible')
        .and('have.attr', 'src')
        .and('include', 'vite.svg')
    })

    it('devrait afficher correctement le logo JavaScript', () => {
      cy.get('img[alt="JavaScript logo"]')
        .should('be.visible')
        .and('have.attr', 'src')
        .and('include', 'javascript.svg')
    })

    it('devrait avoir un lien fonctionnel pour le logo Vite', () => {
      cy.get('a[href="https://vite.dev"]')
        .should('have.attr', 'target', '_blank')
    })

    it('devrait avoir un lien fonctionnel vers la documentation JavaScript', () => {
      cy.get('a[href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"]')
        .should('have.attr', 'target', '_blank')
    })
  })

  // Tests de l'interface utilisateur
  describe('Éléments de l\'Interface', () => {
    it('devrait afficher le bon titre', () => {
      cy.get('h1').should('have.text', 'Hello Vite!')
    })

    it('devrait afficher le texte d\'aide', () => {
      cy.get('.read-the-docs')
        .should('be.visible')
        .should('contain', 'Click on the Vite logo to learn more')
    })

    it('devrait avoir les bonnes classes CSS', () => {
      cy.get('.logo').should('have.length', 2)
      cy.get('.vanilla').should('have.length', 1)
      cy.get('.card').should('be.visible')
    })
  })

  // Tests de performance
  describe('Performance et Cas Limites', () => {
    it('devrait gérer les clics rapides', () => {
      // Test de clics rapides
      for(let i = 0; i < 10; i++) {
        cy.get('#counter').click()
      }
      cy.get('#counter').should('have.text', 'count is 10')
    })

    it('devrait réinitialiser le compteur après rechargement de la page', () => {
      cy.get('#counter').click().click()
      cy.get('#counter').should('have.text', 'count is 2')
      
      cy.reload()
      // Le compteur devrait être réinitialisé après rechargement
      cy.get('#counter').should('have.text', 'count is 0')
    })
  })
}) 