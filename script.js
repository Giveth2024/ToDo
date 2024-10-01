button = document.getElementById("submit");
let counter = 0;

button.onclick = function() 
{
    input_value = document.getElementById("text_input").value;

    if(input_value.trim() == "" )
    {
        window.alert("Enter a value.");
    }
    else
    {
        item = document.getElementById("item");
    
        console.log(input_value)
    
        // lets create a div element
        let new_div = document.createElement("div");
    
        counter++;
    
        //Give it a counter.
        new_div.className = `div${counter}`;
    
        // lets create a checkbox and a paragraph Element
        let new_check = document.createElement("input");
    
        // give it an id.
        new_check.id = `input${counter}`;
    
        // let it be checkbox and set name to box
        new_check.type = "checkbox";
        new_check.name = "box";
    
        // Create the label element as well
        let label_element = document.createElement("label");
    
        //let it have the same id as that of the checkbox
        label_element.htmlFor = new_check.id;
    
        //assgin the value of the input to the label element
        label_element.textContent = input_value;
    
        //create a delete button that will delete the task
        delete_button = document.createElement("button");
    
        //give it an id and a class
        delete_button.id = `button${counter}`;
        delete_button.className = "delete_button_class"
    
        //give it text
        delete_button.textContent = "Delete";
    
        
        // let the elements be inside the div element
        new_div.appendChild(new_check);
        new_div.appendChild(label_element);
        new_div.appendChild(delete_button);
        
        //present the new div to the html document.
        document.body.appendChild(new_div);
        
        // remove the element.
        delete_button.onclick = function() {
            document.body.removeChild(new_div)        
        }
        
        // print the div Element to the console
        console.log(new_div);

    }


}

