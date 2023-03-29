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

const modifyPost = document.getElementsByClassName("modify-post");
const deletePost = document.getElementsByClassName("delete-post");


/* const modifyPost = document.querySelectorAll("modify-post");
const deletePost = document.querySelectorAll("delete-post"); */

const post = document.querySelector(".post");

const limpiar = (target) => {
    if (target.value !== "") {
        target.value = "";
    }
}

console.log(modifyPost);
console.log(deletePost);

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

modifyPost["0"].addEventListener("click", () => {
    addPostModal.showModal()
})

deletePost["0"].addEventListener("click", () => {
    post.classList.add("borrar");
})

modifyPost["1"].addEventListener("click", () => {
    addPostModal.showModal()
})

deletePost["1"].addEventListener("click", () => {
    post.classList.add("borrar");
})

modifyPost["2"].addEventListener("click", () => {
    addPostModal.showModal()
})

deletePost["2"].addEventListener("click", () => {
    post.classList.add("borrar");
})