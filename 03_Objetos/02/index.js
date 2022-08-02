const resultados = [
    {
        timeA: 5,
        timeB: 4
    },
    {
        timeA: 3,
        timeB: 3
    },
    {
        timeA: 2,
        timeB: 1
    },
    {
        timeA: 1,
        timeB: 3
    },
    {
        timeA: 2,
        timeB: 5
    },
    {
        timeA: 0,
        timeB: 1
    }
]

function maisVitorioso(array) {
    let vitoriasDoA = 0;
    let vitoriasDoB = 0;
    for (let item of array) {
        if (item.timeA > item.timeB) {
            vitoriasDoA++;
        } else if (item.timeA < item.timeB) {
            vitoriasDoB++
        }
    }
    if (vitoriasDoA > vitoriasDoB) {
        console.log("Time A")
    } else if (vitoriasDoA < vitoriasDoB) {
        console.log("Time B")
    } else {
        console.log("Empate");
    }
}

maisVitorioso(resultados);
