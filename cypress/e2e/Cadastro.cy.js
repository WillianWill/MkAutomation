
describe('Teste E2E', () => {

    it('Realizar cadastro corretamente', () => {
      cy.visit("http://nextlab.mksolutions.com.br:4000/register")

      cy.get(':nth-child(4) > :nth-child(2) > input').type("willian.bonfim1988@gmail.com{enter}")
      cy.get('.sc-gLDmcm > :nth-child(1) > :nth-child(2) > input').type("Willian Bonfim Da Silva{enter}")
      cy.get('.sc-hIagIn > .sc-ksdxgE > :nth-child(2) > input').type("11 11111 1111")
      cy.get('.sc-jnrVZQ > input').type("#checkbox").click()
      cy.get('.sc-jnrVZQ > input').uncheck()
      cy.get('.sc-cTAIfT').click()
      cy.get('.sc-ewSTlh').click()
      cy.get('.sc-jnrVZQ > input').check()
      cy.get('.sc-dwsnSq').click()
    })

    it('Realizar validacao da conta corretamente', () => {
      cy.get(':nth-child(1) > input').type("6")
      cy.get(':nth-child(2) > input').type("9")
      cy.get(':nth-child(3) > input').type("0")
      cy.get(':nth-child(4) > input').type("5")
      cy.get(':nth-child(5) > input').type("9")
      cy.get(':nth-child(6) > input').type("2")
      cy.get('.jmdoSl').click()

    })

    it('Realizar cadastro da empresa', () => {
      cy.get(".sc-PZsNp cYaSFx").type("checkbox").click()
      cy.get(".sc-ctqQKy jcfYmN").click()
      cy.get("sc-evcjhq eaYgRT").click()
      cy.get("companyName").type("99.815.871/0001-20").click()
      cy.get("sc-ksdxgE kALKsO").type("11 111111111")
      cy.get("zipCode").type("12134157").click()
      cy.get("number").type("00").click()
      cy.get("complement").type("aaa")
      cy.get("district").type("MK")
      cy.get("sc-dwsnSq jmdoSl").click()
    })

    it('Realizar envio de documentos', () => {
      cy.get(".sc-czvZiG lbons").eq(0).click()
      cy.get(".sc-czvZiG lbons").eq(1).click()
      cy.get(".sc-czvZiG lbons").eq(2).click()
      cy.get("sc-dwsnSq jmdoSl").click()
    })
    
 })