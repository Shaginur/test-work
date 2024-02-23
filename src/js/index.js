const nameUser = document.querySelector('#name') // ИМЯ
const firstSurname = document.querySelector('#firstSurname') //ФАМИЛИЯ
const dateBirth = document.querySelector('#dateBirth') // ДАТА РОЖДЕНИЯ

const phone = document.querySelector('#phone') //ТЕЛЕФОН

const gender = document.querySelectorAll('input[name="gender"]') // ПОЛ
const status = document.querySelector('#status') // СТАТУС КЛИЕНТА
const doctor = document.querySelector('#doctor') // ЛЕЧЕЩИЙ ВРАЧ
const siti = document.querySelector('#siti') // город
const userDocumment = document.querySelector('#userDocumment')
const dateDocument = document.querySelector('#dateDocument')

const registr = document.querySelector('#registration') // кнопка регистрации

registr.addEventListener('click', () => {
  // validationName(nameUser)
  // firstSurnameValidation(firstSurname)
  // validationDateBirth(dateBirth)
  // phoneValidation(phone)
  // genderValidation(gender)
  // statusValidation(status)
  // doctorValidation(doctor)
  // sitiValidation(siti)
  // documentValidation(userDocumment)
  dateDocumentValidation(dateDocument)
})

function validationName(nameUser) {
  const regex = /[a-z]+/i
  const rezult = regex.test(nameUser.value)
  if (rezult) {
    nameUser.value = ''
  } else {
    nameUser.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
}

function firstSurnameValidation(firstSurname) {
  const regex = /[a-z]+/i
  const rezult = regex.test(firstSurname.value)
  if (rezult) {
    firstSurname.value = ''
  } else {
    firstSurname.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
}

function validationDateBirth(dateBirth) {
  const regex = /[0-9]/
  const rezult = regex.test(dateBirth.value)
  if (rezult) {
    dateBirth.value = ''
  } else {
    dateBirth.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
}

function phoneValidation(phone) {
  const regex = /7[0-9]{10}/
  const rezult = regex.test(phone.value)
  if (rezult) {
    phone.value = ''
  } else {
    phone.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
}

function genderValidation(gender) {
  const rezult = []
  for (const g of gender) {
    if (g.checked) {
      const placeholder = g.placeholder
      rezult.push(placeholder)
      g.checked = false
      return rezult
    }
  }
  document.querySelector('#genders').style.border = '2px solid #fa8072'
  alert('ошибка!! поля обезательного для заполнения')
}

function statusValidation(status) {
  if (status.value == '') {
    status.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
  status.value = ''
}

function doctorValidation(doctor) {
  if (doctor.value == '') {
    doctor.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
  doctor.value = ''
}

function sitiValidation(siti) {
  if (siti.value == '') {
    siti.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
  siti.value = ''
}

function documentValidation(userDocumment) {
  if (userDocumment.value == '') {
    userDocumment.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
  userDocumment.value = ''
}

function dateDocumentValidation(dateDocument) {
  if (dateDocument.value == '') {
    dateDocument.style.border = '2px solid #fa8072'
    alert('ошибка!! поля обезательного для заполнения')
  }
  dateDocument.value = ''
}
