# Atomic Design - Factories

## Estrutura

Como utilizamos uma estrutura atômica/modular para que possamos reaproveitar ao máximo tudo que criarmos possuimos algumas pastas *"globais"* para o projeto, pois os módulos apenas usarão o que já tiver sido criado.

Essas pastas são:

- _atoms
- _config
- _factories
- _hadrons
- _organelles
- _quarks

Falarei sobre cada uma.

### \_atoms

### \_config

### \_factories

### \_hadrons

### \_organelles

#### ribossomos

### \_quarks

### modules

## Como fazer

Tudo começa pela configuração do nosso projeto.

### Configurações

Quando configuramos o projeto só precisamos mudar 2 valores:

- PROJECT_NAME
- MOLECULE_FACTORY

O `PROJECT_NAME` nem preciso explicar né, mas para garantir já aviso que você precisa colocar o nome exatamente como está escrito na sua pasta. E o `MOLECULE_FACTORY` é o nome da sua *factory* de *Model*, que nesse caso é  *Mongoose*, o código dele não podia ser mais simples:

```js
module.exports = (Formula) => require('mongoose').Schema(Formula)

```

Pois futuramente basta você criar um módulo específico para a biblioteca que for usar.

Essa é nossa configuração do projeto, **FAVOR NÃO MEXER NOS OUTROS VALORES!**

```js
// _config/project
const PROJECT_NAME = 'factories'
const PROJECT_PATH =  __dirname.split(PROJECT_NAME)[0]+PROJECT_NAME
const QUARKS_PATH = PROJECT_PATH + '/_quarks/'
const ATOMS_PATH = PROJECT_PATH + '/_atoms/'
const FACTORIES_PATH = PROJECT_PATH + '/_factories/'
const ORGANISM_FACTORY = FACTORIES_PATH + 'organism'
const MOLECULE_FACTORY = FACTORIES_PATH + 'molecule.mongoose'
```

Depois disso você deve começar a criar os átomos que ainda não existem no nosso repositório para que possa usá-los no sistema.

> Tudo que você fizer terá que ser encapsulado em um módulo, não deves mexer em nenhum código interno. #ficadica


Vamos usar um exemplo simples de módulo usando os átomos já existentes.

Para iniciar você deve criar uma pasta dentro de `modules`, por exemplo: `User`.

E nela precisará definir qual sua estrutura molecular, ou seja, quais campos/átomos fazem parte desse módulo, por exemplo:

```js
// modules/User/molecular.structure.js
module.exports = [
  'name',
  'email',
  'created_at'
]
```