let todoList =[
    {
    item:'Make Projects',
    dueDate: '14/02/2025'
    },
    

];


displayItems();

function addtodo() {

    localStorage.setItem('todoList', JSON.stringify(todoList));
    
    let inputElement = document.querySelector
    ('#todo-input');
    let dateElement = document.querySelector
    ('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item:todoItem, dueDate:
    todoDate}    
    );
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    localStorage.getItem(todoList);
    let displayContainer = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++){
         
        let{item, dueDate} = todoList[i];
        newHtml +=  
        `
        
         <span>${item}</span>
         <span>${dueDate}</span>
         <button class='btn-delete' 
         onclick="todoList.splice(${i}, 1);
         displayItems();">Delete</button>
        
        `
        ;
    }
    
    displayContainer.innerHTML = newHtml;
}
