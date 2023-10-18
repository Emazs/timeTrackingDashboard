import { fetchData } from "./FetchData.js"
import { updateContentDaily, updateContentMonthly, updateContentWeekly } from "./GetElements.js"

let menus = document.querySelectorAll('.menu');

fetchData().then(data => {
    menus.forEach( menu => {
        menu.addEventListener("click", (event) => {
            event.target.textContent == "Daily" && updateContentDaily(data)
            event.target.textContent == "Weekly" && updateContentWeekly(data)
            event.target.textContent == "Monthly" && updateContentMonthly(data)
        })
    })
    
})