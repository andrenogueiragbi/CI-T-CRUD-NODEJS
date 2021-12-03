'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')

}


async function getActivity() {
    const response = await fetch('https://app-cit.herokuapp.com/Activity', {
        headers: { 'Content-Type': 'application/json' },
        method: "GET"
    });

    try {
        return await response.json()
    } catch (e) {
        console.error(e)
    }

}


async function postActivity(tarefa) {
    const response = await fetch('https://app-cit.herokuapp.com/activity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: tarefa.name,
            type: tarefa.type
        })
    })

    try {
        return await response.json()
    } catch (e) {
        console.error(e)
    }

}


async function deleteActivity(number) {
    const response = await fetch('https://app-cit.herokuapp.com/activity/' + number, {
        method: 'DELETE',
    })

    try {
        return await response.json()
    } catch (e) {
        console.error(e)
    }
}


async function putActivity(tarefa) {
    const response = await fetch('https://app-cit.herokuapp.com/activity/' + tarefa.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "name": tarefa.name,
            "status": tarefa.status
        })
    })

    try {
        document.getElementById('nome').dataset.index = 'new'
        return await response.json()
    } catch (e) {
        console.error(e)
    }

}


const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
}



const salveTarefa = async () => {

    if (isValidFields()) {
        const index = document.getElementById('nome').dataset.index
        const tarefa = {
            id: index,
            name: document.getElementById('nome').value,
            status: false
        }


        if (index == "new") {
            console.log(tarefa);
            await postActivity(tarefa)
            clearFields()
            listaTarefa()
            closeModal()

        } else {
            await putActivity(tarefa)
            closeModal()
            listaTarefa()


        }
    }

}

const createRow = (tarefa) => {
    var cor = ""

    if (tarefa.status) {
        cor = 'style="background-color: coral;"'
    } else {
        cor = ""
    }

    let newRow = document.createElement('tr')


    newRow.innerHTML = `
   
    <td><input class="messageCheckbox" type="checkbox"  ></td>
    <td ${cor}>${tarefa.name}</td>
    <td >
        <button type="button" class="button green" id="edit-${tarefa.id}-${tarefa.name}-${tarefa.status}">Editar</button>
        <button type="button" class="button red" id="delete-${tarefa.id}-${tarefa.name}-${tarefa.status}">Excluir</button>
        <button type="button" class="button black" id="final-${tarefa.id}-${tarefa.name}-${tarefa.status}">Finalizar</button>
    </td>
    `


    document.querySelector('#tableTarefa>tbody').appendChild(newRow)

}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableTarefa>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}


const listaTarefa = async () => {
    const data = await getActivity()
    clearTable()
    data.data.forEach(createRow)
}

const editTarefa = (id, name, status) => {
    document.getElementById('nome').value = name
    document.getElementById('nome').dataset.index = id
    openModal()

}

const deleteTarefa = (id) => {
    deleteActivity(id)
    listaTarefa()
}




const editDelete = async (event) => {
    if (event.target.type == 'button') {

        const [action, id, name, status] = event.target.id.split('-')
        if (action == 'edit') {
            editTarefa(id, name, status)
        } else if (action == 'delete') {
            const response = confirm(`Deseja realmente apagar Tarefa: ${name}`)
            if (response) {
                await deleteTarefa(id)
                listaTarefa()
            }
        } else {
            const [action, id, name] = event.target.id.split('-')
            const response = confirm(`Deseja realmente concluir a Tarefa: ${name}`)

            const tarefa = {
                id: id,
                name: name,
                status: true

            }
            await putActivity(tarefa)
            listaTarefa()

        }
    }

}

const marcarAll = () => {
    console.log('marcar todos')

}

const finalizarAll = () => {
    console.log('finalizar todos')

}

function toggle(source) {
    console.log('marcar tudo...')
    console.log(checkboxes)

    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    console.log(">>>>>>>>>",checkboxes)
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;

    }

}


listaTarefa()



document.getElementById('cadastrarTarefa')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', salveTarefa)

document.querySelector('#tableTarefa>tbody')
    .addEventListener('click', editDelete)

document.getElementById('finalizarTodos')
    .addEventListener('click', finalizarAll)