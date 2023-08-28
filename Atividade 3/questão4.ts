function ArrayFormatado(numbers: number[]): string {
    let StringFormatada = "";
    numbers.forEach((number, index) => {
        if (index !== 0) {
            StringFormatada += "-";
        }
        StringFormatada = StringFormatada + number.toString();
    });
    return StringFormatada;
}