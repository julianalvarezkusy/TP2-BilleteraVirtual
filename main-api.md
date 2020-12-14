# API

Detalle de los métodos expuestos.

## Realizar operación en dolares

El método recibe los datos del cliente junto con el tipo y el monto de la operación que desea realizar.  Se validan los datos, si son correctos se devuelve el monto en pesos y se guardan los datos.

### HTTP Request
```
http://[host]:[port]/operar
```

#### Parametros requeridos
```
cliente | string | El nombre y el apellido del cliente.
tipo    | string | El tipo de operación que desea realizar el cliente.
monto   | number | El monto en dolares que el cliente desea transaccionar.
```

#### Códigos de estado
```
200 | Exito.
450 | El monto ingresado es menor a 1.
451 | El tipo de operación ingresada es invalida.
452 | El tipo de cotización ingresada es invalida.
??? | Errores de conección o de ejecución en la base de datos.
```

#### Respuesta
```
cliente | string | El nombre y el apellido del cliente.
tipo    | string | El tipo de operación realizó el cliente.
monto   | number | El monto en dolares que el cliente transaccionó.
pesos   | number | El monto en pesos que el cliente debe pagar.
```

## Listar operaciones en dolares

El método no recibe ningún parametro. Devuelve la lista de operaciones que fueron realizadas.

### HTTP Request
```
http://[host]:[port]/operaciones
```

#### Parametros requeridos
```
cliente | string | El nombre y el apellido del cliente.
tipo    | string | El tipo de operación que desea realizar el cliente.
monto   | number | El monto en dolares que el cliente desea transaccionar.
```

#### Respuesta
```
_id     | token  | El identificador único de la operación.
cliente | string | El nombre y el apellido del cliente.
tipo    | string | El tipo de operación realizó el cliente.
monto   | number | El monto en dolares que el cliente transaccionó.
pesos   | number | El monto en pesos que el cliente debe pagar.
```

#### Códigos de estado
```
200 | Exito.
??? | Errores de conección o de ejecución en la base de datos.
```
