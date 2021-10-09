export default class Client {

    #name
    #cpf
    #tel1
    #tel2
    #current_points

    constructor(name, cpf, tel1, tel2, current_points) {

        this.#name = name;
        this.#cpf = cpf;
        this.#tel1 = tel1;
        this.#tel2 = tel2;
        this.#current_points = current_points

    }

    get name() {
        return this.#name;
    }

    get cpf() {
        return this.#cpf;
    }

    get tel1() {
        return this.#tel1;
    }

    get tel2() {
        return this.#tel2;
    }

    get current_points() {
        return this.#current_points;
    }
}