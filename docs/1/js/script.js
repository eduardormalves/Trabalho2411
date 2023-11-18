var cor = document.getElementById('cor')
        function masculino(){
            cor.style.background = 'blue'
        }
        function feminino(){
            cor.style.background = 'pink'
        }
        function outros(){
            cor.style.background = 'red'
        }

        const futebol = document.querySelector('#fut');
        const basquete = document.querySelector('#bas');
        const tenis = document.querySelector('#ten');
        const atletismo = document.querySelector('#atl');
        const ciclismo = document.querySelector('#cic');

        futebol.addEventListener('change', function() {
            const image = document.getElementById('fute');
            image.src = futebol.checked ? "imagens/futebol.png" : "imagens/futebolnao.jpeg";
        })

        basquete.addEventListener('change', function() {
            const image = document.getElementById('basq');
            image.src = basquete.checked ? "imagens/basquete.png" : "imagens/basquetenao.jpeg";
        })

        tenis.addEventListener('change', function() {
            const image = document.getElementById('teni');
            image.src = tenis.checked ? "imagens/tenis.png" : "imagens/tenisnao.jpeg";
        })

        atletismo.addEventListener('change', function() {
            const image = document.getElementById('atle');
            image.src = atletismo.checked ? "imagens/atletismo.png" : "imagens/atletismonao.jpeg";
        })

        ciclismo.addEventListener('change', function() {
            const image = document.getElementById('cicl');
            image.src = ciclismo.checked ? "imagens/ciclismo.png" : "imagens/ciclismonao.jpeg";
        })

        function calcular(){
        let n1 = document.getElementById('n1').value;
        let n2 = document.getElementById('n2').value;
        let resultado = parseInt(n1) + parseInt(n2);
        document.getElementById('resultado').innerHTML = resultado;
        }