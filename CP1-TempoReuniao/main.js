function calcular() {
            let inicHora = parseInt(document.getElementById("inicHora").value)
            let inicMin = parseInt(document.getElementById("inicMin").value)
            let finalHora = parseInt(document.getElementById("finalHora").value)
            let finalMin = parseInt(document.getElementById("finalMin").value)

            let divResult = document.getElementById("result")

            if (isNaN(inicHora) || isNaN(inicMin) || isNaN(finalHora) || isNaN(finalMin) ||
            inicHora < 0 || inicHora > 23 || finalHora < 0 || finalHora > 23 ||
            inicMin < 0 || inicMin > 59 || finalMin < 0 || finalMin > 59) {
                alert ("Erro: Os horários inválidos ou não estão completamente preenchidos.");
                return;
            }

            let inicEmMin = (inicHora * 60) + inicMin
            let finalEmMin = (finalHora * 60) + finalMin

            if (finalEmMin <= inicEmMin) {
                finalEmMin += 24 * 60;
                console.log(finalEmMin, inicEmMin);
            }

            let resultEmMin = finalEmMin - inicEmMin;

            if (resultEmMin < 0) {
                divResult.textContent = "Erro: horário final inválido.";
                return;
            }

            let resultFinalEmHoras = parseInt(resultEmMin/60)
            let resultFinalEmMin = resultEmMin%60

            document.getElementById("horas").textContent = resultFinalEmHoras.toString().padStart(2, "0")
            document.getElementById("minutos").textContent = resultFinalEmMin.toString().padStart(2, "0")

            let horasFmt = resultFinalEmHoras.toString().padStart(2, "0");
            let minutosFmt = resultFinalEmMin.toString().padStart(2, "0");

        }