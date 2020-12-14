# Financiera

El módulo permite calcular la cantidad de pesos para la compra o venta de dolares de una determinada cotización a la fecha.

## Crear Financiera

El módulo cuenta con un factory que simplifica la creación. El factory resuelve la creación de dos componentes que necesita la **Financiera**, la **Calculadora** y el **Cotizador**. 
El código a continuación ilustra como puede ser creada una **Financiera** a través de un factory.

```
const importFactory = require('financiera-factory')
const financieraFactory = importFactory.crearFinancieraFactory();
const financiera = financieraFactory.obtenerFinanciera()
```

### Ahora a Pesificar

**Financiera** cuenta con la función **pesificar** que dado un tipo de cotización, la operación a realizar y el monto nos devuelve la cantidad de pesos que son necesarios para realizar la transacción.

IMPORTANTE: la función es asincronica y para su correcto se debe utilizar el **await** al utilizar la función **pesificar**.

```
const resultado = await financiera.pesificar(tipo_cotizacion, operacion_realizar, monto)
```

#### Los tipos de cotizaciones

* Dolar oficial: 'dolar-oficial'
* Dolar liqui: 'dolar-liqui'
* Dolar bolsa: 'dolar-bolsa'
* Dolar soja: 'dolar-soja'
* Dolar blue: 'dolar-blue'

#### Las operaciones que se pueden realizar

* Operar con el valor para la venta: 'venta'
* Operar con el valor para la compra: 'compra'

#### El monto

Valor númerico que se desea calcular.
