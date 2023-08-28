function exibir(...parametros: string[]): void {
    parametros.forEach(parametros => {
        console.log(parametros);
    });
}

exibir("a", "b");
exibir("a", "b", "c");
exibir("a", "b", "c", "d");