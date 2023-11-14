
const storedData = localStorage.getItem('shoppingList');
const shoppingList = JSON.parse(storedData);
const pagination = document.querySelector('.pagination-container');
const paginationPages = document.querySelector('.pagination-pages')


const itemsPerPage = 3; 
let currentPage = 1;


function checkShoppingList ()
{
    if (shoppingList.length === 0) {
        pagination.classList.add('is-hidden');
    }
}
checkShoppingList();


// function updatePaginationButtons() {

//     paginationPages.innerHTML = '';
//     const totalPages = Math.ceil(shoppingList.length / itemsPerPage);

//     for (let i = 1; i <= totalPages; i++) {
//       const markup = `<button class="pagination-pages-btn"><span class="pagination-pages-numbers">${i}</span></button>`
//       paginationPages.insertAdjacentHTML('afterbegin',markup)
//       button.addEventListener('click', function() {
//         currentPage = i;
//         createShopping  ();
//         updatePaginationButtons();
//       });

//       paginationPages.appendChild(button);
//     }
// }

// function goToPrevPage() {
//   if (currentPage > 1) {
//     currentPage--;
//     displayItems();
//   }
// }

// function goToNextPage() {
//   const maxPage = Math.ceil(shoppingList.length / itemsPerPage);
//   if (currentPage < maxPage) {
//     currentPage++;
//     displayItems();
//   }
// }


// document.querySelector('.pagination-btn-left').addEventListener('click', goToPrevPage);
// document.querySelector('.pagination-btn-right').addEventListener('click', goToNextPage);

// updatePaginationButtons()




// function displayPagination() {
//    if (shoppingList.length === 0) {
//     pagination.classList.add('is-hidden')
//    }
//     paginationPages.innerHTML = ''; 

    // const totalPages = Math.ceil(shoppingList.length / itemsPerPage);

//     for (let i = 1; i <= totalPages; i++) {
//         const pageItem = document.createElement('button');
//         pageItem.className = 'pagination-pages-btn';
//         pageItem.textContent = i;
//         pageItem.addEventListener('click', () => {
//             createShopping(i);
//         });
//         paginationPages.appendChild(pageItem);
//     }
// }

// displayPagination()

// function createBtn ()
// {
//     return
// }