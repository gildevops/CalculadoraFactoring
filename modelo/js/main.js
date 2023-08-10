function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('btn-clear'),

        inicia() {     /*chave de um objeto*/
            this.cliqueBotoes();
            this.pressioneEnter();
        },

        pressioneEnter() {
            this.display.addEventListener('keyup', e => {
               if(e.keyCode === 13) {
                this.realizaConta()
               }
            });
        },


        realizaConta() {   /*btn-ep*/ 
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta) {
                    alert('Conta invalida');
                    return;
                }

                this.display.value = String(conta);
            } catch (e) {
                alert('Conta invalida');
                return;
            }
        },


        ClearDisplay() {
            this.display.value = ''; /*limpar*/
        },


        apagaUm() {
            this.display.value = this.display.value.slice(0, -1) /*apagar um indice digitado */
        },

        cliqueBotoes() {      /* chave de um objeto this é calculadora*/
            document.addEventListener('click', function (e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.ClearDisplay(el.innerText);
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm(el.innerText);
                }  

                if (el.classList.contains('btn-ep')) {
                    this.realizaConta(el.innerText);
                }


            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();