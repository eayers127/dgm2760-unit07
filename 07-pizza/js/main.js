let message

const pizza = {
    crust: 'thin',
    size: 'large',
    topping: 'olive',
    buildPizza: ()=>{
        message =`Making a ${pizza.size} pizza on a ${pizza.crust} crust with ${pizza.topping}s and cheese`
        document.querySelector('#feedback').textContent = message
    },
    shoppingList: ()=> {
        let flour = 1
        if (pizza.crust === 'thick') flour *= 2
        if(pizza.size === 'large') flour *= 2
        message = `You will need to purchase ${flour} cups of flour and 1 lb of ${pizza.topping} to make your pizza.`
        document.querySelector('#feedback').textContent = message

    }
}

document.querySelector('#thin').addEventListener('click', ()=> pizza.crust = 'thin')
document.querySelector('#thick').addEventListener('click', ()=> pizza.crust = 'thick')


document.querySelector('#olive').addEventListener('click', ()=> pizza.topping = 'olive')
document.querySelector('#pepper').addEventListener('click', ()=> pizza.topping = 'pepper')

document.querySelector('#small').addEventListener('click', ()=> pizza.size = 'small')
document.querySelector('#large').addEventListener('click', ()=> pizza.size = 'large')



document.querySelector("#build").addEventListener('click', pizza.buildPizza)
document.querySelector('#shopping').addEventListener('click', pizza.shoppingList)


