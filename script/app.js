let result = JSON.parse(localStorage.getItem('result')) || [];

function add(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;
    if (name && surname && !isNaN(age)) {
        result.push({ name, surname, age });
        localStorage.setItem('result', JSON.stringify(result));
        displayResult();
    } else {
        alert('Barcha maydonlarni to\'ldiring!');
    }
    

    renderAddForm();
}
function displayResult() {
    let table = document.getElementById('table');
    table.innerHTML = '';
    result.forEach((item, index) => {
        let tr = document.createElement('tr');
        let tdNumber = document.createElement('td');
        let tdName = document.createElement('td');
        let tdSurname = document.createElement('td');
        let tdAge = document.createElement('td');
        let tdDelete = document.createElement('td');
        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        btnDelete.addEventListener('click', () => {
            result.splice(index, 1);
            localStorage.setItem('result', JSON.stringify(result));
            displayResult();
            renderAddForm();
        });
        tdNumber.textContent = index + 1+'. ';
        tdName.textContent = item.name;
        tdSurname.textContent = item.surname;
        tdAge.textContent = item.age+' yosh';
        tdDelete.appendChild(btnDelete);
        tr.appendChild(tdNumber);
        tr.appendChild(tdSurname);
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdDelete);
        table.appendChild(tr);
    });
}
displayResult();
function renderAddForm() {
    document.getElementById('name').value = '';
    document.getElementById('surname').value = '';
    document.getElementById('age').value = '';
    document.getElementById('name').focus();
}

document.getElementById('add').addEventListener('click', add);



