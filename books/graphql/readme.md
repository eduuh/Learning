The main root element for graphql are three.

1. Query
2. Mutation
3. Subscription

### Using Query Variables

We have changed data by sending new string values as mutation arguments.
You could use input variables.
Variables replace the static value in the query so that we can pass
dynamic values instead.

Lets use variable names to add dynamic object to the database.

```js
mutation createSong($title: String! $numberOne: Int $by: String){
  addSong(title, numberOne:$numberOne, performerName: $by) {
    id
    title
    numberOne
  }
}
```

The static value is replace by $variable. We state the $variable can be
accepted by the mutation.

From there we map each $variable names with the arguments name.

Variables are very Useful when sending arguments data. Not only will this keep our
mutation more organized in a test, but allowiing dynamic inputs we be hugely helpful for
client interface.

## Subscriptions

Ther are times when a client might want to have real-time updates pushed from the server.
A subscription allows us to listen to the GraphQL Api for real-time data changes. Every
client is subscribed to the real-time event and sees information updated in real time.

Data Changes client can listed to are defined in an Api schema as fields under the
subscription type. Writing the GraphQL query to listen for a subscription is also similar
to how we would define other operations.

```js
subscription {
  litStatusChange {
    name
    capacity
    status
  }
}
```

When we run this subscription, we listen for lift status changes over a websocket. When
the subscription is sent to the server, the subscription is listening for any changes to
the data.

To see data pushed to the subscription, we need to make a change. We need to open a new
window, send change via mutation,

After a subscription operation is running in a Graphql Playground tab, we cannot run
anymoer operationg using the same window or tab. Open a new web browser.

From the new web browser Lets send a lift status changes mutation.

```js
mutation closeLift {
  setLiftStatus(id: "astra-express" status: HOLD) {
    name
    status
  }
}
```

Unlike queries and mutations, subscription remains open. New data will be pushed
this subscription every time there is a status change on a chairlift. To stop listening
for status changes, you need to unsubscribe from your subscription. To do this with the Graphql
playground, simply press the stop button.

### Introspection

One of the most powerful feature of Graphql is **introspection**. Introspection is the ability
to query details about the current Api's schema.

Introspection is how those nifty Graphql documents are added to the Graphql Playground interface.
You can send queries to every Graphql Api that returns data about a given API's schema.

```js
query {
  __schema{
    types {
      name
      descriptionnn
    }
  }
}
```

When we run this query, we see every type available on the API, including root types, custome types, and even
scalar types. If we want to see the details of a particular type, we can run the type query and send the name
ot the type that we want to query as an argument.

```js
query liftDetails {
  __type(name: "Lift") {
    name
    fields {
      name
      description
      type {
        name
      }
    }
  }
}
```

This introspection query shows us all of the fields that are available to query on the lift type. When getting
to know a new Graphql API, its good ide to find out what fields are available on the root types.

This probable the first step to find out more about an api with postman.
It shows all the availabe roots elements. **query, mutation, subscription**

```js
query root {
  __schema {
    queryType {
      ...typeFields
    }
    mutationType {
      ...typeFields
    }
    subscriptionType {
      ...typeFields
    }
  }
}

fragment typeFields on __Type {
  name
  fields {
    name
  }
}
```

An introspection query follow the rules of Graphql query lanquage. The redunadancy of the precinding query has
been reduced by using a **fragment**.

We are querying the name of the type and the available fields of each root type. Introspection gives the client
the ability to find out how the current API schema works.

#### Abstaract syntax Trees

The query document is a string. When we send a query to a Graphql, API, that string is parsed into
an abstract syntax tree and validated before the operation is run. An abstract syntax tree, is a hierarchical
object that represents our query.

#### Lexical analysis

You queries start of as Graphql document. A document contains at least one definition, but it can also contains
a list of definition. Definitions aren only one of two types. OperationDefinition or fragmentDefinition

An operation definition can contain only one of three operation types:

1. Mutation query.
2. Subscription Query.
3. query

Each operation definition contains the OperationType and the SelectionSet.

The curly bracket that comes after each operation contains the operation's SelectionSet.

SelectionSets are nested within one another.

Graphql can travers this AST and validate its details against the Graphql Language and the current schema. If
the query language syntax is correct and the schema contains the filds and types that we are requesting, the
operation is executed. If not, a specific error is returned , instead.

Every opeation is pased into an AST so that it can be validated and eventually executed.

The definition ot types are called the **Graphql schema**.

#### Designing a Schema

Graphql is going to change your design process.

Instead of looking at your Api as a collection os Rest endpoints, you are going to begin looking at your APIs
as a collection ot types. Before breaking ground on your new API you need to think about, talk about, and
formally define the data type that your Api will expose. This collection of type is called a **schema**

**Schema First** is a design methodology that well get all your teams on the same page about the data types
that makes up your application. The backend team will have a clearn understaing about the data that it need to
store and deliver. The frontend team will have the definition that it needs to beginbuiling user interfaces.

Everyone will have a clear vocabulary that they can use to communicate about the system they are building. To
facilitate definition types, Graphql comes with a language that we can use to define our schemas, called the
**scheam definition language\*** . Just like the graphql language, the graphql SDL is the same no mater what
language or framework you use to construct your application.

Graphql schema used by both client and servers to validate Graphql requests.

#### Defining Types

The best way to learn about Graphql types and schema is to build one. The photo sharing application will lets
users log in witl their Github account to post photos and tag user in those photos. Managing users and posts
represents functionalyity that is core to just about every type of internet application.

The photshare application will have two main types . User and photo. Let's get started desiginig the schema
for the entire applicaiton.

### Type

The core unit of any Graphql Schema is the type. In graphql, a type represents a custom object and these
objects describe your application core features.

A type has filds that represent the data associated with each object. Each feld returns a specific type of
data. This could mean an interger or a string, but it also could mean a custome object type or list of types.

A **schema** is a collection of type definition. You can write your schema in javaScript file as a string or in
any text file. Thes files usually carry the .graphql extension.

```js
type photo {
  id: ID!
  name: String!
  url: String!
  description: String
}
```
