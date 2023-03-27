const modal = document.querySelector("#modal");
const abrirModal = document.querySelector("#abrir-modal");
const cerrarModal = document.querySelector("#cerrar-modal");
const enviarModal = document.querySelector("#enviar-modal");

const addPost = document.querySelector("#add-post");
const addPostModal = document.querySelector("#add-post-modal");
const closePostModal = document.querySelector("#cerrar-modal-post");
const enviarPostModal = document.querySelector("#enviar-modal-post");

const input = document.getElementsByTagName("input");

const addPostRespo = document.querySelector("#add-post-respo");

const limpiar = (target) => {
    if (target.value !== "") {
        target.value = "";
    }
}

abrirModal.addEventListener("click", () => {
    modal.showModal();
})

cerrarModal.addEventListener("click", () => {
    modal.close();
})

enviarModal.addEventListener("click", () => {
    modal.close();
})

addPost.addEventListener("click", () => {
    addPostModal.showModal();
})

closePostModal.addEventListener("click", () => {
    addPostModal.close()
})

enviarPostModal.addEventListener("click", () => {
    addPostModal.close()
})

addPostRespo.addEventListener("click", () => {
    addPostModal.showModal()
})