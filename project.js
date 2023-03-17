var form = document.getElementById('addForm');

var itemList = document.getElementById('items');

var category = document.querySelector('#category');



// Form submit event

form.addEventListener('submit', addItem);



// Category submit event

category.addEventListener('submit', addItem);



// Delete event

itemList.addEventListener('click', removeItem);



// Add item

function addItem(e){

  e.preventDefault();



  // Get input value

  var newItem1 = document.getElementById('item1').value;

  var newItem2 = document.getElementById('item2').value;

  var newItem3 = category.value;



  // Create new li element

  var li = document.createElement('li');

  // Add class

  li.className = 'list-group-item';

  // Add text node with input value

  li.appendChild(document.createTextNode(newItem1));

  li.appendChild(document.createTextNode(" " + newItem2));

  li.appendChild(document.createTextNode(" " + newItem3 + " "));



  // Create del button element

  var deleteBtn = document.createElement('button');



  // Add classes to del button

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';



  // Append text node

  deleteBtn.appendChild(document.createTextNode('Delete Expense'));



  // Append button to li

  li.appendChild(deleteBtn);



  // Append li to list

  itemList.appendChild(li);

}



// Remove item

function removeItem(e){

//   console.log(e.target.classList);

  if(e.target.classList.contains('delete'))     // Jab koi cross pe click karega tabhi yeh kaam karega aisa

  {

    if(confirm('Are You Sure?'))

    {

      var li = e.target.parentElement; // Yahan par humko parent li chaiye jispe click kar rahe hai uska

      itemList.removeChild(li); // Yahan par jispe hum click karenge uska child remove kar denge

    }

  }

}