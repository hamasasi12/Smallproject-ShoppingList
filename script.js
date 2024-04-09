const listItem = document.querySelector("#list-item")
const input = document.querySelector("#item")
const searchButton = document.querySelector(".search-button")

searchButton.addEventListener("click",() => {
  const addValue = input.value
  
  if (addValue.trim() !=='') {
    input.value = null
  }
  console.log("input :",addValue)
  input.value = "";

  const addLi = document.createElement("li")
  const button = document.createElement("button")
  const span = document.createElement("span")

  addLi.appendChild(span)
  span.textContent = addValue
  addLi.appendChild(button)
  button.textContent = "delete"
  listItem.appendChild(addLi)

  button.addEventListener("click", () => {
    listItem.removeChild(addLi)
  })
})


