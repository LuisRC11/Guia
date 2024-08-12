function fibonacci(n) {
    let a = 0;
    let b = 1;

    // Mostrar los números de Fibonacci dentro del ciclo for
    for (let i = 0; i < n; i++) {
        console.log(a); // Mostrar el número actual de Fibonacci

        let next = a + b; // Calcular el siguiente número de Fibonacci
        a = b; // Mover a a la posición de b
        b = next; // Mover b al siguiente número de Fibonacci
    }
}

// Mostrar los números de Fibonacci
fibonacci(1);