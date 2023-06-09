import { save, load } from "./04-storage.js";

// импорт библиотеки лодаш
import throttle from "lodash.throttle";

const formElement = document.querySelector(".feedback-form");

formElement.addEventListener(`input`, throttle(handleInput, 500));
formElement.addEventListener(`submit`, handleSubmit);

const STORAGE_KEY = "feedback-form-state";

// функция заполнения формы
function handleInput(event) {

  const email = formElement.email.value;
  const message = formElement.message.value;
  
  // добавляем объект в хранилище
  localStorage.setItem(STORAGE_KEY, 
  JSON.stringify(createStorageObject(email, message)));
}

// функция отправки формы
function handleSubmit(event) {
  event.preventDefault();

  const email = formElement.email.value;
  const message = formElement.message.value;
    
    // проверка полей
    if (email === "" || message === "") {
      return alert(`Все поля должны быть заполнены`);
    }
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);

    // выводим объект в консоль
    console.log(createStorageObject(email, message));
}

// забираем объект из хранилища 
const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

// устанавливаем данные в форму при перезагрузке и проверяем наличие объекта
if (dataStorage) {
  formElement.email.value = dataStorage.email;
  formElement.message.value = dataStorage.message;
};

// функция для создания объекта
function createStorageObject (email, message){
  return {
    email: `${email}`,
    message: `${message}`,
  };
};
