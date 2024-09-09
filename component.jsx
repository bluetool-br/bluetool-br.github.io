<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Usuário</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .form-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        .form-container h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
        }
        .form-container input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        .form-container button {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            cursor: pointer;
        }
        .form-container button:hover {
            background-color: #0056b3;
        }
        .error-message {
            color: red;
            font-size: 14px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Cadastro de Usuário</h2>
        <form id="userForm">
            <input type="text" id="nome" placeholder="Nome completo" required>
            <input type="text" id="cpf" placeholder="CPF" required>
            <input type="text" id="whatsapp" placeholder="WhatsApp" required>
            <button type="submit">Cadastrar</button>
            <p class="error-message" id="error-message"></p>
        </form>
    </div>

    <script>
        document.getElementById("userForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio do formulário

            const nome = document.getElementById("nome").value.trim();
            const cpf = document.getElementById("cpf").value.trim();
            const whatsapp = document.getElementById("whatsapp").value.trim();
            const errorMessage = document.getElementById("error-message");

            // Validação básica do CPF
            if (!validarCPF(cpf)) {
                errorMessage.textContent = "CPF inválido.";
                return;
            }

            // Validação do WhatsApp (apenas números e 11 dígitos)
            if (!/^\d{11}$/.test(whatsapp)) {
                errorMessage.textContent = "Número de WhatsApp inválido.";
                return;
            }

            // Se tudo estiver válido, pode prosseguir com o cadastro
            errorMessage.textContent = "";
            alert("Cadastro realizado com sucesso!");
            // Aqui você pode enviar os dados para o backend via AJAX ou Fetch API
        });

        function validarCPF(cpf) {
            // Remove caracteres não numéricos
            cpf = cpf.replace(/\D/g, '');

            if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
                return false;
            }

            let soma = 0;
            let resto;

            for (let i = 1; i <= 9; i++) {
                soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
            }

            resto = (soma * 10) % 11;

            if (resto === 10 || resto === 11) {
                resto = 0;
            }

            if (resto !== parseInt(cpf.substring(9, 10))) {
                return false;
            }

            soma = 0;
            for (let i = 1; i <= 10; i++) {
                soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
            }

            resto = (soma * 10) % 11;

            if (resto === 10 || resto === 11) {
                resto = 0;
            }

            return resto === parseInt(cpf.substring(10, 11));
        }
    </script>
</body>
</html>
