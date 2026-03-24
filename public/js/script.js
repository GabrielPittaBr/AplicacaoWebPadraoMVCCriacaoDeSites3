document.addEventListener("DOMContentLoaded", () => {

    const formContato = document.querySelector("form");

    if (formContato && window.location.pathname === "/contato") {
        formContato.addEventListener("submit", (e) => {
            e.preventDefault();

            alert("Mensagem enviada com sucesso!");

            formContato.reset();
        });
    }

});

function confirmarExclusao(nome) {
    return confirm(`Excluir o produto "${nome}"?`);
}