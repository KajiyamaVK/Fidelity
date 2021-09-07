export default function teste() {

    let x = <span></span>;

    for (let counter = 1; counter <= 10; counter++) {
        x += <span>{counter}</span>
    }

    return x

}
/*
export default function teste() {

    let lista = [];

    for (let counter = 1; counter <= 10; counter++) {
        if (counter == 10) lista.push(<span>{counter} </span>)
        else lista.push(<span>{counter}, </span>)
    }

    return lista
}
*/