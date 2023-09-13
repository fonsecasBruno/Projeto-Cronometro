const numeroFormatado = (number) => (number <=9 ? `0${number}` : number);

export const displayTempo = (segundos) => {
    let horas = 0;
    let minutos = 0;

    if (segundos < 0){
        segundos = 0;
    }

    if (segundos < 60) {
        return `00:00${numeroFormatado(segundos)}`
    }

    let sobraSegundos = segundos % 60;
    minutos = (segundos - sobraSegundos) / 60;

    if (minutos < 60) {
        return `00:00${numeroFormatado(minutos)}:${numeroFormatado(sobraSegundos)}`;
    }

    let sobraMinutos = minutos % 60;
    horas = (minutos - sobraMinutos) / 60;

    return `${numeroFormatado(horas)}:${numeroFormatado(sobraMinutos)}:${numeroFormatado(sobraSegundos)}`;
}