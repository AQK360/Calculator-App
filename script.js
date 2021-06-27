class Claculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear() 
 
}
clear() {
  this.currentOperand = ''
  this.previousOperand = ''
  this.operation = undefined


}
delete () {
    this.currentOperand =  this.currentOperand.toString().slice(0, -1)

}

 appendNumber(number) {
     if(number === '.' && this.currentOperand.includes('.')) return
     this.currentOperand= this.currentOperand.toString() + number.toString()



 }

 chooseOperation(operation) {
     if(this.currentOperand === '') return
     if(this.previousOperand !== '') {
         this.compute()
     }
     this.operation = operation
     this.previousOperand = this.currentOperand
     this.currentOperand = ' '
     

 }
compute () {
    let computation
    const prev =parseFloat(this.previousOperand)
    const curr = parseFloat(this.currentOperand)
    if(isNaN(prev) || isNaN(curr)) return
    switch(this.operation) {
        case '+':
            computation = prev + curr
            break
         case '-':
             computation = prev - curr
             break
         case '*':
            computation = prev * curr
             break
         case '÷':
             computation = prev / curr
             break
         default:
             return
    }
    this.currentOperand = computation
    this.operation =  undefined
    this.previousOperand = ''

}

 


updateDisplay () {
    this.currentOperandTextElement.innerText =  this.currentOperand
    if(this.operation != null) {
    this.previousOperandTextElement.innerText = `${ (this.previousOperand)} ${this.operation}`

}}

}     

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-delete]')
const allClearButtons = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
 const claculator = new Claculator(previousOperandTextElement, currentOperandTextElement

 )
 numberButtons.forEach(button => {
     button.addEventListener('click', ()  => {
     
        claculator.appendNumber(button.innerText)
        claculator.updateDisplay()
     
 } )
})

operationButtons.forEach(button => {
    button.addEventListener('click', ()  => {
    
       claculator.chooseOperation(button.innerText)
       claculator.updateDisplay()
    
} )
})

equalsButtons.addEventListener('click', ()  => {
    claculator.compute()
    claculator.updateDisplay()

}
)
allClearButtons.addEventListener('click', ()  => {
    claculator.clear()
    claculator.updateDisplay()
})
deleteButtons.addEventListener('click', ()  => {
    claculator.delete()
    claculator.updateDisplay()
})