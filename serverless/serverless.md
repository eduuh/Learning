## Facts about serverless

1. Event-driven.
2. Don't have applications that are always running , no concepts of "continous"
3. Requires an event for something to happen, even a timer.
4. Microsoft **sub-second** billing (consumption).
5. If your app never runs, you don't get charged.

## Small code.

Since a function is only doing one thing, the code is small.
Small code is easier to create, easier to manage, less prone to bugs.
Some functions can be 15 lines of code.
Develops in the cloud

### Serverless is **Service not Servers**

-> Evolution of cloud compute.

### Azure Serverless Features.

- **Compute**: Azure functions
- **Messagin**: Event grid  
- **Storage**: Blob, tables, queues and files.
- **Data**: Cosmos DB, including SQL, Mongodb, Table and Gremlin
- **Security** : Azure Active Directory.
- **Api Management** Including Functions Proxies.
- **Analytics:** Stream analytics and Event hubs.
- **Intelligence** Bot service and cognitive services.


### Functions.

- Allow you to run **code on demand** without having to provison or manage infrastructure.
- Respond to a variety of events.
- calls to a URL(HTTP)
- Timed events 
- Github 

#### Why Functions?

- Azure calls thes pice of code `functions` because they act similar to programming functions.
- Function have **start** and **finish**
- Function have input and outputs.

#### Shoulds.

- Function should be single-purpose bits of code that perform a single task.
- Functions should finish as quickly as possible.
- Function should prefer asynchromous operations.

#### code.

- can write function in your choice of languge:
- C#
- F#
- Node.js
- Java
- PHP
- Bash
- Or anything executable

#### How Much?

- Two options(chosen at creation , can't change)

    1. Pay only for the resources your code consumers
      - Consumeption plan
      - Azure will do the scalling
    2. Or put it in an App service plan.
        - Alongside web, mobile or Api apps.
        - You're responsible for scale.

#### Triggers and Bindings.

- A **trigger** is something that can cause a function to run.
- A **binding** is an action that a function can use as input or outputs.
You can bring You own SDK or Api and not even use the binding microsoft offers.

- schedule.
- HTTP.
- Events from Event Hub.
- Storage Events (blobs, queues)
- Queues and Topic from service Bus.
- NoSQL DB from cosmos DB.
- Microsoft Graph Events.

#### Output Bindings.

- Http outpus(if trigger was Http)
- Storage (blobs, queuse, Table)
- Event from Event hub.
- Queuse and topics from service Bus.
- Sql Data.
- NoSql Data from cosmosDB.
- Push Notifications.
- Twilio SMs.
- SendGrid Email
- Microsoft Graph (excel , onedrive , outlook email, Graph events)


#### Assignment: Functions

- Log in to Azure Portal, and create an empty function App.
- Add your first function using Azure's Quickstart Templates.
- Triggered by **Http** call, ananymous function.
- Write new blob with contents of parameters , Including date and time received, and **Ip address**








