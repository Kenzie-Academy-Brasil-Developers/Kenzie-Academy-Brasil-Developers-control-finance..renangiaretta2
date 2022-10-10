const valueRegisterButton = document.getElementById('btnRegistry')

valueRegisterButton.addEventListener('click', function(){

    const selectBody = document.querySelector('body')
    const modalCasing = document.createElement('div')
    const modalContainer = document.createElement('div')
    const modalDivPlace = document.createElement('div')
    const modalTitle = document.createElement('span')
    const modalClose = document.createElement('button')
    const modalDivera = document.createElement('div')
    const modalText = document.createElement('p')
    const modalInputs = document.createElement('div')
    const modalInsertValueText = document.createElement('span')
    const modalImputValue = document.createElement('input')
    const modalValueTypeContainer = document.createElement('div')
    const modalValueTypeText = document.createElement('span')
    const modalValueTypeButtons = document.createElement('div')
    const modalEntryMoneyButton = document.createElement('button')
    const modalOutMoneyButton = document.createElement('button')
    const modalFinalButtons = document.createElement('div')
    const modalCancelButton = document.createElement('button')
    const modal = document.createElement('button')
  
    modalImputValue.type = "number"
    modalImputValue.required = true
    modalImputValue.id = "inputAddValue"
  
    modalCasing.classList = 'modalWrapper flex__row justify__center align__center full_w full_h'
    modalContainer.classList = 'modal flex__column'
    modalDivPlace.classList = 'flex__row justify__between align__center'
    modalTitle.classList = 'title2-bold' 
    modalClose.classList = 'modal_close-button'
    modalDivera.classList = 'text1-bold'
    modalText.classList = ''
    modalInputs.classList = 'modal_inputs flex__column'
    modalInsertValueText.classList = 'text2-medium'
    modalImputValue.classList = 'modal_inputs-input full_w'
    modalValueTypeContainer.classList = 'flex__column desktop_modal'
    modalValueTypeText.classList = 'text2-medium mb-2'
    modalValueTypeButtons.classList = 'moda_value_type_container full_w flex__column desktop_modal'
    modalEntryMoneyButton.classList = 'moda_value_type_container-button full_w text3-medium desktop_modal_divOne-button-1'
    modalOutMoneyButton.classList = 'moda_value_type_container-button full_w text3-medium desktop_modal_divOne-button-2'
    modalFinalButtons.classList = 'modal_final_buttons_container full_w flex__row justify__between desktop_modal_divTwo'
    modalCancelButton.classList = 'modal_final_buttons_container__btn-1 text3-medium desktop_modal_buttons-2'
    modal.classList = 'modal_final_buttons_container__btn-2 text3-medium desktop_modal_buttons-2'

    modalCasing.id = 'wrapper'
  
    modalImputValue.placeholder = "R$"
    modalTitle.innerText = 'Registro de valor'
    modalClose.innerText = 'X'
    modalText.innerText = 'Digite o valor e em seguida aperte no botão referente ao tipo do valor'
    modalInsertValueText.innerText = 'Valor'
    modalValueTypeText.innerText = 'Tipo de valor'
    modalEntryMoneyButton.innerText = 'Entrada'
    modalOutMoneyButton.innerText = 'Saída'
    modalCancelButton.innerText = 'Cancelar'
    modal.innerText = 'Inserir valor'
  
    modalEntryMoneyButton.addEventListener('click', function(){
        if(modalOutMoneyButton.innerText == "Saída!"){
            modalOutMoneyButton.innerText = "Saída"
            modalEntryMoneyButton.innerText = 'Entrada!'
        }else{
            modalEntryMoneyButton.innerText = 'Entrada!'
        }
    })

    modalOutMoneyButton.addEventListener('click', function(){
        if(modalEntryMoneyButton.innerText == "Entrada!"){
            modalEntryMoneyButton.innerText = "Entrada"
            modalOutMoneyButton.innerText = 'Saída!'
        }else{
            modalOutMoneyButton.innerText = 'Saída!'
        }
    })

    let counterIDs = 0
    let registerNewValues = () => {
  
    let wrapper = document.getElementById('wrapper')
    let counterUpdated = counterIDs++
    listValues.innerHTML = ''
    if(modalEntryMoneyButton.innerText == "Entrada!"){
    let newObject = {
        id:counterUpdated,
        value: +modalImputValue.value,
        categoryID: 0,
    }
        insertedValues.push(newObject)
    }else if(modalOutMoneyButton.innerText = 'Saída!'){
        let newObject = {
            id:counterUpdated,
            value: +modalImputValue.value,
            categoryID: 1,
        }
            insertedValues.push(newObject)
    }
    
    valuesSum(insertedValues)
    renderList(insertedValues)
    wrapper.remove()
    }
  
    modal.addEventListener('click', registerNewValues)
  
  
    modalClose.addEventListener('click', function(){
        let wrapper = document.getElementById('wrapper')
        return wrapper.remove()
    })
  
    modalCancelButton.addEventListener('click', function(){
        let wrapper = document.getElementById('wrapper')
        return wrapper.remove()
    })
  
    modalValueTypeButtons.append(modalEntryMoneyButton, modalOutMoneyButton)
    modalFinalButtons.append(modalCancelButton, modal)
    modalValueTypeContainer.append(modalValueTypeText, modalValueTypeButtons, modalFinalButtons)
    modalInputs.append(modalInsertValueText, modalImputValue)
    modalDivera.append(modalText)
    modalDivPlace.append(modalTitle, modalClose)
    modalContainer.append(modalDivPlace, modalDivera, modalInputs, modalValueTypeContainer)
    modalCasing.append(modalContainer)
  
    selectBody.append(modalCasing)
})