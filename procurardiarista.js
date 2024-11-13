document.querySelectorAll('.comodidades-form').forEach(form => {
    const inputs = form.querySelectorAll('input[type="number"]');
    const contratarButton = form.parentElement.querySelector('.contratar-btn');

    inputs.forEach(input => {
        input.addEventListener('input', function() {
            let totalPrice = 0;
            inputs.forEach(input => {
                const quantity = parseInt(input.value) || 0; // Pega o valor ou zero se vazio
                const price = parseInt(input.dataset.preco); // Preço do item
                totalPrice += quantity * price; // Calcula o total
            });
            contratarButton.textContent = `Contratar - R$${totalPrice.toFixed(2).replace('.', ',')}`; // Atualiza o botão
        });
    });
});




const regionSelect = document.getElementById('regionSelect');
const sections = document.querySelectorAll('.diaristas-section');

regionSelect.addEventListener('change', function() {
const selectedRegion = this.value;

sections.forEach(section => {
if (selectedRegion === 'all' || section.id === selectedRegion) {
section.style.display = 'block';
} else {
section.style.display = 'none';
}
});
});

// Inicializa a visibilidade das seções
document.addEventListener('DOMContentLoaded', function() {
regionSelect.dispatchEvent(new Event('change'));
});









    





  


    // Script para calcular o valor total baseado na quantidade de cada cômodo
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.comodidades-form input[type="number"]').forEach(input => {
            const quantity = parseInt(input.value) || 0; // Quantidade de vezes (0 caso esteja vazio)
            const price = parseFloat(input.dataset.preco); // Preço do cômodo
            total += quantity * price; // Soma ao total o valor de cada cômodo
        });
        // Atualiza o botão com o valor total
        document.querySelector('.contratar-btn').textContent = `Contratar - R$${total.toFixed(2)}`;
    }

    // Adiciona o evento de entrada para todos os campos numéricos
    document.querySelectorAll('.comodidades-form input[type="number"]').forEach(input => {
        input.addEventListener('input', updateTotal);
    });

    function calcularTotal() {
        // Captura os valores dos inputs
        let quarto = parseInt(document.querySelector('[name="quarto"]').value) || 0;
        let sala = parseInt(document.querySelector('[name="sala"]').value) || 0;
        let cozinha = parseInt(document.querySelector('[name="cozinha"]').value) || 0;
        let banheiro = parseInt(document.querySelector('[name="banheiro"]').value) || 0;

        // Calcula o total
        let total = (quarto * 40) + (sala * 30) + (cozinha * 35) + (banheiro * 20);

        // Atualiza o link da contratação com o valor total
        let link = document.querySelector('.contratar-btn');
        link.href = `TelaPagamento.html?total=${total}`;

        // Atualiza o texto do botão com o valor
        link.innerText = `Contratar - R$${total.toFixed(2)}`;
    }








    


