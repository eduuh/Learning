### Introduction to the MERN Stack

Topics to cover at these step.

1. The MVC arhcitectural pattern
2. Installing and configuring MongoDB
3. Installing Node.js
4. Installing NPM packages.

#### Technical Requirements

1. You will be required to have an IDE, Visual studio code, Node.js and MongoDB.
2. You will also need to install Git, in order to use the Git repository of this book.
3. The code files of this chapter can be found on Github. 
4. Check out the following video to see the code in action.

#### Intoduction.
The *MERN* stack is a solution composed of four main components:

1. MongoDB: A database that uses a document-oriented data model.
2. ExpressJS: A web application framework for building web application  and Apis.
3. ReactJs: A declarative, components-based and isomorphic javascript library for building user interfaces
4. Node.js : A cross-platform javascript runtime environent built on chrome's V8 javascript engine allows developers bo build diverse tools, servers and application. 

The fundamental componets tht comprises the MERN stack are open source and are thus maintained and developed by a great community of developers. What ties these componets together is a common language, Javascript
.

#### The MVC architectural pattern

Most modern web application implements the MVC architectural pattern. It consists of three interconnected parts that separate the internal represents of information in a web application:

    - **Model** Manages the business logic of an application that determines how data should be stored , created and modified.
    - **View** : Any visual representation of the data or information.
    - **controller**: interprets user-generated events and transforms them into commands for the model and view to update accordingly:

The **Separation of Concern(SoC)** design pattern separates frontend from backend code. Following the Mvc architectural patterns, developers are able to adhere to the Soc design, result, resulting in a consistent and manageable application structure.

### Getting ready.

Installing MongoDB and configurin it my require additionl steps. I choose to use docker.

#### Alternatives
You can use a **Database as a services** (DBaas) such as **MongoDB Atlas** and **Mlab**.

#### Installing Node.j

The official Node.js websites provides two packages containing LTS and currents (containing latest feature) binaries to install Node.js on Linux, OS x and windows.


### Building a Web server with ExpressJs.
1. Routing In expressJs.
2. Modular route handlers.
3. Writing middleware functions.
4. Writing configurable Middleware functions.
5. Writing route-level middleware functions.
6. Writing error-handler middleware functions.
7. Using expressJs built-in middleware functions to serve static assets.
8. Parsing the HTTP reuest body.
9. Compressing HTTP responses.
8. Using an HTTP request logger.
9. Managing and creating virtual domains.
10. Securing an ExpressJs web applcatin with helmet.
11. Using template engines.
12. Debuggin your ExpressJs web application.


### Routing in ExpressJs

Routing refers to how an application responds or acts when a resource is requested via an **Http** verb or **Http** method.

*HTTP* stands for __Hypertext Transfer Protocal__ and it's the basis of data communication for the WWW . All documents and data in the WWW are identified by a **Uniform Resource Locator (URL)**.

HTTP verbs or HTTP method are a client-server model. Typically , a web browser as a client, and in our case ExpressJS in the framework that allows us to create a server capable of understanding these requests. Every request expexts a responses to be sent to the client to recognize the status of the resource that it is requesting.

##### Request method can be.

