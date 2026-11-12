const test = require("node:test");
const assert = require("node:assert/strict");

const {
    calcularPromedio,
    obtenerEstado
} = require("../src/estudiantes");

test("Calcular promedio correctamente", () => {
    assert.equal(calcularPromedio(15, 16, 17), 16);
});

test("Determinar estudiante aprobado", () => {
    assert.equal(obtenerEstado(15), "APROBADO");
});

test("Determinar estudiante desaprobado", () => {
    assert.equal(obtenerEstado(8), "DESAPROBADO");
});

test("Detectar notas fuera del rango", () => {
    assert.throws(() => calcularPromedio(25, 15, 17));
});

test("Detectar promedio inválido", () => {
    assert.throws(() => obtenerEstado(25));
});
