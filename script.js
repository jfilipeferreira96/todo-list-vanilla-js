const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

/*Adicionar todos*/
const generateTemplate = (todo) => {

    const htmlFrases = ` 
        <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${todo}</span>
            <span><i class="fas fa-check check"></i>
            <i class="far fa-trash-alt delete"></i></span>
        </li> `;

    list.innerHTML += htmlFrases;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.addInput.value.trim();
    console.log(todo);

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

/*Apagar todos*/
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove(); //remove o LI
    }
});

/*Sublinhar todos*/
list.addEventListener('click', e => {
    const getSpan = e.target.parentElement.parentElement.querySelector('span');

    if (getSpan.classList.value !== 'checkPropriedades') {
        getSpan.classList.add('checkPropriedades')
    }else{
        getSpan.classList.remove('checkPropriedades');
    }
   
});

/*Pesquisa*/
const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(list.children) //inverso, caso seja apagado algum termo filtrado
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};

//keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});