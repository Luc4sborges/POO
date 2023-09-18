class Postagem{
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = 0;
    }



    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): string {
        return `${this.texto} (${this.quantidadeCurtidas} curtidas)`;
    }
}

class Microblog{
    postagens: Postagem[];

    constructor() {
        this.postagens = [];
    }

    adicionarPostagem(postagem: Postagem): void {
        this.postagens.push(postagem);
    }

    

    excluirPostagem(id: string): void{
        if (this.existePostagem(Number(id)))
        return
    }

    existePostagem(id: number): boolean {
        for (let postagem of this.postagens) {
            if (postagem.id === id) {
                return true;
            }
        }
        return false;
    }
    }

    postmaiscurtido(postagens: Postagem){
        let postagemMaisCurtida: postagens[0]
        let curtidasMaisAltas = 0;
    
        for (let postagem of this.postagens) {
            if (postagem.quantidadeCurtidas > curtidasMaisAltas) {
                postagemMaisCurtida = postagem;
                curtidasMaisAltas = postagem.quantidadeCurtidas;
            }
        }
    
        return postagemMaisCurtida;
    }
    
    curtirPostagem(id: number): void {
        for (let postagem of this.postagens) {
            if (postagem.id === id) {
                postagem.curtir();
                break;
            }
        }
    }



