
Go to Next lectureQuiz 1: Azure Serverless Basics
Transcript
So that we know what server list is let's talk specifically about Microsoft Azure's implementation of

it.

So there are a number of categories and we'll talk about the various Servilius features within those

categories.

So within the computer model which could be observances could be virtual machines within server lists.

Those are Azure functions.

And so if you're talking about creating code sitting down into dot nets you know so sharp or javascript

or Java or ph be creating code.

Those those are done as azure functions.

It also provides storage options.

You can do Blob's tables cues like your storage account basically.

There are databases that can be accessed through the service model which are Cosmo's TB being the biggest

one kaso PDB includes a sequel options or Mongo D-B Cosmin has its own table model and Gramling which

is the graph API.

You have security through Azure active directory.

If you need messaging there's this event grid which is sort of the single model for handling messages

of all known sources and all destinations to the end or the traditional service bus logic apps which

is the workflow as a service option and is the glue that ties things together.

If you want to if you end up creating tons and tons of functions you may want to gather them together

group them under a single API and call that.

And that's a poor management has function proxies when you're dealing with Internet of things you're

dealing with lots of data coming through.

You need analytics extreme analytics and event hubs and hubs.

And finally there are these intelligence services now so you can have chat bots and those chaplets are

very flexible in terms of all the different channels that you can create bots on or the AI parts of

cognitive services.

So that was just sort of a fly through of all the functions that were basically going to talk about

in this course we're going to start to get through each of them one by one coming up next.

### Functions
So let's talk about the most significant part of Servilius model which is functions.

So functions are basically allowing you to run code on demand without having to her vision or manage

infrastructure in your language of your choice.

You can upload a piece of code into Microsoft and Microsoft takes care of creating infrastructure for

that you know making sure it's running quickly and distributing that scaling down etc..

Now functions are triggered on events.

And so there's a whole lot of possible events that can then trigger this code to run.

Now you can have an endpoint so an HGP endpoint that and other application can call that causes the

function to start.

It can be timed so every 10 minutes every half an hour every month this function can start some type

of external event such as a get hub check in or a merger or something like that where that event gets

a function to run or even monitoring of a storage account.

So if you create a new blob and stored in a particular container that causes the function to run and

there's just a lot more different triggers that can cause a function and we'll get into those.

Why would you want to create your Kotas functions so we live in this world where you have this option

of virtual machines you can create web apps and mobile apps API apps.

And now Microsoft has this new thing called functions.

So first of all they're called functions because they are very much similar to functional programming.

Ok so where you've got a named piece of code that takes an input properties does something with its

within its own scope and then returns a value at the end of that process.

It's very similar to how function as your functions work.

For one thing Azure functions have a start and finish.

So there's no continuously running Azure function.

It starts.

It does something and it ends and they also said they support various input properties and depending

on the properties the return and output.

So these are the I'm calling Sure.

And it's basically best practices for Azure functions.

So you could create big long running functions that take half an hour take an hour to run but functions

work best when they are small.

Their single purpose.

They do something form a single task because it takes input return output since you're charged based

on consumption not based on on the clock on the wall function.

It finishes quickly as possible.

So just do what it needs to do return no delay no waiting if it needs to communicate with another service.

It should do that asynchronously so instead of you don't say it needs to call an external API and wait

for the result.

Well it would be better design your function to to call the API asynchronously and and then have another

function that checks the result and continues on with the work.

Now you can write functions in your choice of programming language and there's lots of them so if you

want to write in one of the dotnet languages like C-Sharp F sharp no J.S. Java ph P in even great bash

scripts or basically anything that created into an executable so you can create.

Think of that small pieces of bits of code that are in any of these languages that you wish.

Now when you create the function you're going to be asked which model that you want to follow.

And you can't change it after the one is the pay for consumption model.

This is the consumption pie in.

You basically upload your code as a function and Azure will take care of scaling.

OK so if your function is never called You're never going to get charged.

And if it's called very frequently like hundreds of times a second Azure will take care of moving that

function into different regions and into different environments.

Or does it still support the app service models since functions are in service just like a web app or

a mobile app.

If you have an app service plan you can associate those functions to an existing service plan.

You're responsible for scaling at that point.

So if you can have a function if it gets actually popular than you're limited to the CPA you in the

memory of that service plan that's why Microsoft designed functions for that consumption plan.

That's sort of the ideal state for service but you can put a function into an up service plan and essentially

you have a server and it's not Cerebus it's a triggers all functions require a trigger to start McCain

at triggers anything that that basically causes the function to run.

And there's also this concept of bindings and so the function can then go in and get inputs and outputs

from other places.

You can connect with a database and pull on some data and they have various bindings you can bring your

own SDK or your own API.

But Microsoft offers a bunch of different bindings so you do need to go and query Azure table as part

of your function code.

You can do that using Microsoft's bindings to triggers can be run on a schedule.

So every case that every 10 minutes 20 minutes however a schedule you want you can have an issue.

The endpoint that causes a function to run an event to trigger a function based on event hub.

You know you'll have a storage account for functions and so having blobs and queues and those of events

creation of Blob's and the insertion of messages and queues or on the service bus side you can also

have queues and topic's the events of those cause functions to run.

Plus most D-B has a database and so in database events like subgraph also part of causality all those

sort of things can start a function.

Then we have other sources of data so you can go back to your storage account.

It could be a secret database cosmos D-B all the Microsoft Graf's stuff which is Excel in one drive

and things like that.

Then when you want to output stuff from your function you can if someone calls and a Shippey and point

you can return the output overshoe to Pete.

You can store data in a storage account create new Blob's or update Blob's or insert messages to cues.

You can create an event for that.

You can create an Q message on a service bus insert into the database.

Again with Cosmos Steve B you can do Moldau push notifications so if something happens the function

runs and you want to then push that out to your mobile app using the notification API.

You can do SS messages so if you want your phone to be texted when something happens uses Twilley for

that.

You can do an email and Sacra So lots of different things that functions can do.

So in the next video we're going to look at creating a function using the azure portal


### Go to Next lecture8. Assignment: Create Your Own Function
Transcript
So let's switch for a second from the slides into the azure portal so we can try to create our own function.

So we're in the azure portal at the dashboard.

I'm going to click the plus sign which is for the marketplace.

I can actually add the word function for the search it'll come up or I'm going to go to the computer

section and if I scroll a little bit I'll see a function app as a compute resource.

Now this is just like a web app in that you have to give it a name a fully qualified name.

The name that you give it is going to be the name that you can access at the endpoint name.

And so Azure Web sites dot net are going to call this is it a G D function.

C it's not taken it's not I'm going to use my page you go plan let's create a new resource group for

it.

You can also put it in existing resource group.

Now this is a pivotal decision in terms of how you want to do the hosting.

So at the time of creation you can choose the consumption plan which is pay per use which means that

you will potentially pay nothing if your function falls below the free limit or you can add it to an

existing service plan which you can mix it in with your existing web apps.

Mobile apps and other apps.

So I'm going to leave it on the consumption plan.

You pick your region as usual put it in east just to now volitions require a storage account for its

own purposes.

And so it's going to create one based on the name of the app and I'll leave application in sites turned

off.

I'm going to click Create the creation of the function actually goes by very quickly.

You'll see that the deployment succeeded.

I can go into all resources and I can see my I am Zed SJG function as being listed as an app service.

When I first started up even though the function says running I do not have any functions created so

it's an empty resource.

So this function app is more of a container where I can place functions inside of it.

So don't click the plus sign next to the functions to create my first function.

Now as discussed we have many different triggers for functions and we can have the HTP or API triggers

we can have stuff that runs based on data processing such as events and queues or we can have timebase

functions are going to choose a time based function for this example within this wizard we have these

four languages from C-Sharp javascript sharpened Java to choose from.

It says for power shell Python and batch we can go a different route.

Now if we if none of this is what you want you want totally different triggers.

You can create a blank custom function as well.

But let's go with a time trigger through using C-Sharp going to see create.

It's created a trigger for me timer trigger C-Sharp 1 well-named timer and it doesn't actually do anything

if I ran this it would write a string to the log.

So let's hit run and we can see here it compiles and it says C-Sharp trigger function is executed.

And so I can the string the output is now in the log file obviously need to modify the Center for it

to be useful.

The way that I would recommend that we modify this is by a is a binding an output to us.

So if we go into the integration step here we can see that first of all there's a timer that was chosen

as the input and the timer is called my timer and it's scheduled to run every five minutes.

This is called cron syntax.

You can google how cron can be customized but this divided by 5 is on the minute parameter and so that

means if the minute is divisible by five when the five minute mark it will execute.

Now let's choose an output binding so I want something to happen some action to create an output.

Again we have all of these examples.

Everything from Send grade for e-mails Twilio S-M mass a dippie if we have SCDP trigger but we don't

table storage queue storage Blob's storage are going to choose Blob's storage as an easy example.

So this is going to be pretty straightforward example here.

I've chosen blog storage.

Now I have to figure it now.

It gives me a default parameter name I'm going to have to modify my function to add this into the parameters

and it's going to ask for the connection string to the storage account I'm going to leave the default

because I'm going to use the storage account associated with this function that I created when I create

the function and the blob is going to be called out container slash random ID.

So I'm all good with this.

It's save now at the bottom here is a little hidden function in feature.

And let's say I needed another trigger.

So once I've written a new blob I want to create a trigger that executes when a new blob is created.

While this is like creating the next step as a new function over an I'm going to do that quite yet.

So they go back to the trigger the code hasn't actually changed.

We weren't expecting it to.

And we're going to have to ourselves do some little coding here.

So we we were told that the prime parameter name was called output blob.

I have to create an output parameter.

It's going to be a string and it's called output Lobb.

And that was set during the integration for the blob output.

Now that we have up a perimeter we need to do something with it.

They go into this code here and I see output blob equals.

Now what do I want the contents of this block to see.

So this is a test long now.

Now that I've done this I've got a function that runs every five minutes on the five minute mark.

That will create a new blob and the content of the blob will say this is a test blob.

That's a pretty useless function on its own but you can see here how small the code is how bug free

it is.

And it's just going to run by itself.

I've used a code editor built into Azure portal and haven't created a project.

I haven't created a dot net visual studio.

I haven't had to deploy anything.

This is all taken care of for me.

So if I run this

compilation succeeded and function started each year I still get the log message so the trigger function

executed and the function says success.

So let's see if it was indeed successful.

I'm going to go into my storage account go into Blob's.

I have my own container and I have a single blob that has a goofy ideas his name that was just created.

If I was to download this blob then I would get.

This is a test blob.

And so that's exactly what I'm expecting.


