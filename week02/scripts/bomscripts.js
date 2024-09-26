const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function () {

    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
            input.value = '';

        });

        li.append(deleteButton);
        list.append(li);

        input.value = '';
    } else {
        // I didn't see if we needed an alert, but I wanted to practice one either way. 
        alert('Your chapter is blank.');
        input.focus();
    }
});