function calcularPromedio(nota1, nota2, nota3) {
    if ([nota1, nota2, nota3].some(
        nota => typeof nota !== "number" ||
        !Number.isFinite(nota) ||
        nota < 0 || nota > 20
    )) {
        throw new Error("Las notas deben estar entre 0 y 20");
    }

    return (nota1 + nota2 + nota3) / 3;
}

function obtenerEstado(promedio) {
    if (typeof promedio !== "number" ||
        !Number.isFinite(promedio) ||
        promedio < 0 || promedio > 20) {
        throw new Error("Promedio inválido");
    }

    return promedio >= 11 ? "APROBADO" : "DESAPROBADO";
}

module.exports = {
    calcularPromedio,
    obtenerEstado
};
