const listValues = document.createElement('ul')
listValues.id = 'ulFull'
const filterAllButton = document.getElementById('filterAll')
const filterEntryMoneyButton = document.getElementById('filterEntrada')
const filterOutMoneyButton = document.getElementById('filterSaida')
const valuesCategory = ["Entrada", "Saída"];

let insertedValues = [];

let renderList = (valuesList) => {
  let main = document.getElementById('app')

  if (valuesList.length == 0){
      listValues.innerHTML = ''
      listValues.classList = 'full_w'
      let emptyListContainer = document.createElement('div')
      let emptyListText1 = document.createElement('span')
      let emptyListText2 = document.createElement('span')

      emptyListText1.innerText = 'Nenhum valor registrado'
      emptyListText2.innerText = 'Registrar novo valor'

      emptyListContainer.classList = 'empty_list full_w flex__column justify__around align__center gap-6 backgroundColor-1'
      emptyListText1.classList = 'text2-bold'
      emptyListText2.classList = 'text2-medium'

      emptyListContainer.append(emptyListText1, emptyListText2)
      listValues.append(emptyListContainer)
      main.append(listValues)
  }
  else{   
          listValues.innerHTML = ''
          listValues.classList = 'full_w flex__column gap-5'

          valuesList.forEach(listItem => {
              let listItems = document.createElement('li')
              let listItemsValues = document.createElement('span')
              let listItemsContainer = document.createElement('div')
              let listItemsDivCategory = document.createElement('span')
              let listItemsRemoveButton = document.createElement('button')
              let listItemsRemoveButtonImg = document.createElement('img')

              listItems.classList =  'list_section__li flex__row justify__between align__center backgroundColor-3 full_w'
              listItemsValues.classList = 'text2-medium'
              listItemsContainer.classList = 'list_section__li__div flex__row justify__between align__center gap-4'
              listItemsDivCategory.classList = 'list_section__li__div-span backgroundColor-2 text2-regular'
              listItemsRemoveButton.classList = 'button__trash'
              listItemsRemoveButtonImg.classList = "button_trash_img"

              listItemsValues.innerText = `R$ ${listItem.value}`
              if(listItem.categoryID == 0){
                listItemsDivCategory.innerText = valuesCategory[0]
              }else if(listItem.categoryID == 1){
                listItemsDivCategory.innerText = valuesCategory[1]
              }
              listItemsRemoveButtonImg.src = '/assets/trash.png'

              listItemsRemoveButton.addEventListener('click', function(){
                  listValues.innerHTML = ''
                  let findIndex = valuesList.indexOf(listItem)
                  if(valuesList == insertedValues){
                    insertedValues.splice(findIndex, 1)  
                    valuesSum(insertedValues)
                    renderList(valuesList) 
                  }else{
                    insertedValues.splice(findIndex, 1)
                    valuesList.splice(findIndex, 1)
                    valuesSum(valuesList)
                    renderList(valuesList) 
                  }                                                      
              })
              
              listItemsRemoveButton.append(listItemsRemoveButtonImg)
              listItemsContainer.append(listItemsDivCategory, listItemsRemoveButton)
              listItems.append(listItemsValues, listItemsContainer)
              listValues.append(listItems)
          });

      return main.append(listValues)
  }
}

renderList(insertedValues)

let valuesSum = (listOfValues) => {
    const showSum = document.getElementById('sectionSum')
    const value = document.createElement('span')
    const totalValue = document.createElement('span')

          totalValue.classList = 'text2-medium'
          value.classList = 'text2-medium'
          totalValue.innerText = "Valor total:"
      if(listOfValues.length == 0){
        value.innerText = `R$ ${0},00`
      }else{
        let valuesMapping = listOfValues.map((listItem) => listItem.value)
        let sum =  valuesMapping.reduce((previousValue, actualValue) => previousValue + actualValue, 0)
        value.innerText = `R$${sum}`
      }
    showSum.innerHTML='' 
    showSum.append(totalValue,value)
}

valuesSum(insertedValues)

filterAllButton.addEventListener('click', function(){
    listValues.innerHTML = ''
    valuesSum(insertedValues)
    renderList(insertedValues)
})


filterEntryMoneyButton.addEventListener('click', function(){
  let filteringEntryMoney = insertedValues.filter(listItem => listItem.categoryID == 0)
  listValues.innerHTML = ''
  valuesSum(filteringEntryMoney)
  renderList(filteringEntryMoney)
})

filterOutMoneyButton.addEventListener('click', function(){
  let filteringOutMoney = insertedValues.filter(listItem => listItem.categoryID == 1)
  listValues.innerHTML = ''
  valuesSum(filteringOutMoney)
  renderList(filteringOutMoney)
})