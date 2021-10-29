var botaoAdicionar = document.querySelector("#botao-adiciona");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#formDonation");
    
    var donation = getForm(form);

    addDonationOnTable(donation);
    
    form.reset();
});

function getForm(form) {
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var hora    = data.getHours();
    var min     = data.getMinutes();
    dataAtual = dia + '/' + mes + '/' + ano + ' ' + hora + ':' + min;
    
    var donation = {
        valor: form.valor.value,
        data: dataAtual
    }

    return donation;
}

function createTr(donation) {
    var donationTr = document.createElement("tr");
    donationTr.classList.add("donation");
    
    donationTr.appendChild(createTd(donation.valor, "valor"));
    donationTr.appendChild(createTd(donation.data, "data"));
    
    return donationTr;
}

function createTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;
    
    return td;
}

function addDonationOnTable(donation) {
    var donationTr = createTr(donation);
    var tabela = document.querySelector("#tabela-donations");
    tabela.appendChild(donationTr);
}
