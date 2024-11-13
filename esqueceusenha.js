document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const email = document.getElementById('email').value;
    alert(`Instruções para recuperação de senha enviadas para: ${email}`);
});

document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const email = document.getElementById('email').value;
    if (email) {
        alert(`Instruções de redefinição de senha foram enviadas para ${email}.`);
        document.getElementById('reset-password-form').reset(); // Limpa o formulário
    } else {
        alert('Por favor, insira um e-mail válido.');
    }
});