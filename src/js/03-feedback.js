const formElem = document.querySelector(".feedback-form");


formElem.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

      if (email.value === "" || password.value === "") {
        return alert(`Все поля должны быть заполнены`);
      }
      
      localStorage.setItem("videoplayer-current-time", data.seconds);
    
    //   console.log(`email: ${email.value}, Password: ${password.value}`);
      

}
