import Base from "./basePage";

const productSelect = '#item_4_title_link'
const productCar = '#item_4_title_link'
const addCar = '.btn_primary.btn_inventory'
const viewContains = '.shopping_cart_badge'
const checkingCar = '#shopping_cart_container'
const checkingCart = '.btn_action.checkout_button'
const firstName = '#first-name'
const lastName = '#last-name'
const codePostal = '#postal-code'
const continueProcess = '.btn_primary.cart_button'
const clickFinish = '[href="./checkout-complete.html"]'
const finishPageValidate = '.complete-header'
const listProduct = '.inventory_list'
const clickAddCar = '.btn_primary.btn_inventory'
const viewProduct = '.shopping_cart_badge'
const removeProduct = '.btn_secondary.btn_inventory'
const productAdd =  '#shopping_cart_container'
const visibleProduct = '[id="item_4_title_link"]'
const displayName = '[id="item_4_title_link"] > .inventory_item_name'
const viewPreco = '.inventory_item_price'
const viewDescription = '.inventory_item_desc'


export default class Main {

    screenPageMain() {
        Base.screenPage()
    }
    selectProduct() {
        Base.clickElement(productSelect)
    }
    addProductCar() {
        Base.clickElement(productCar)
        Base.clickElement(addCar)
    }
    viewIfContainsOne() {
        Base.viewIfContains(viewContains, '1')
    }
    checkoutCart() {
        Base.clickElement(checkingCar)
        Base.clickElement(checkingCart)
    }
    submitFirstName(firstname) {
        Base.typeValuee(firstName, firstname)

    }
    submitLastName(lastname) {
        Base.typeValuee(lastName, lastname)
    }
    submitCodePostal(postalcode) {
        Base.typeValuee(codePostal, postalcode)
        Base.clickElement(continueProcess)
    }
    visiblelistProduct() {
        Base.verifyElementExist(listProduct)
    }
    addShoppingCart() {
        Base.clickElement(clickAddCar)
        Base.viewIfContains(viewProduct, '1')
    }
    removeProductCar() {
        Base.clickElement(removeProduct)
    }
    visibleProductCar() {
        Base.clickElement(productAdd)
        Base.verifyElementExist(visibleProduct)
    }
    mustDisplayProduct(nome) {
        Base.typeValueee(displayName, nome)
    }
    mustDisplayPreco(preco) {
        Base.typeValueee(viewPreco, preco)
    }
    mustDisplayDescription(descricao) {
        Base.typeValueee(viewDescription, descricao)
    }

    clickFinishProduct() {
        Base.clickElement(clickFinish)
        Base.viewIfContains(finishPageValidate, 'THANK YOU FOR YOUR ORDER')
    }


}