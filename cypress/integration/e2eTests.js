describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5000'); // eslint-disable-line
    cy.contains('ivysaur'); // eslint-disable-line
    cy.contains("Pokémon and Pokémon character names are trademarks of Nintendo.");// eslint-disable-line
  })
  it('Kakuna pokemon page can be opened', function () {
    cy.visit('http://localhost:5000'); // eslint-disable-line
    cy.contains('kakuna').click(); // eslint-disable-line
    cy.contains("shed skin");// eslint-disable-line
  })
})
