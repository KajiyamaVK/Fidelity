export default function teste() {

    let lista = [];

    for (let counter = 1; counter <= 10; counter++) {
        if (counter == 10) lista.push(<span>{counter} </span>)
        else lista.push(<span>{counter}, </span>)
    }

    return lista
}