### What you should know

Selecting transcript lines in this section will navigate to timestamp in the video

- [Instructor] There are a few things you need to get the most out of this course. SignalR is built on top of ASP.NET core, so you should have an understanding of the patterns in ASP.NET Core 2.0 or higher. You don't need to be an expert, but you should be familiar with how controllers, services, and basic dependency injection work. If you need a refresher, check out the course ASP.NET Core New Features by Phil Japikse, or Learning ASP.NET Core MVC by Jess Chadwick. You should also be familiar with the concepts of web programming, such as how frontend and backend code communicate and how to write JavaScript. If you need to brush up, follow the Become a Full-Stack Web Developer learning path here on LinkedIn learning. You'll also need a code editor to follow along. I'll be using the free community edition of Visual Studio, but you can also use Visual Studio Code, Atom, Sublime, or whatever editor you prefer. Sound good? Let's start from the beginning and take a look at what SignalR is and what it does.

### What is SignalR?

Selecting transcript lines in this section will navigate to timestamp in the video

- [Instructor] SignalR is a library that makes it easy to add real-time functionality to applications. Let's explore exactly what real-time functionality means. A classic example is a chat application. Imagine you're building a chat app that has a server and many clients. Each client can send a message to the chat room and wants to be notified if anyone else sends a message too. One way to build this is to have each client check for new messages on the server regularly with a loop or a timer. The downside of polling with a loop is that updates are not immediate or real-time. You either have to make the client check in very often, which means a lot of extra connections for the server to handle, or less frequently, which is easier on the server but means that updates will feel slower to users. With SignalR, the connection between the server and each client is more powerful. Instead of the client polling, or making repeated requests to the server to check for new messages, each client establishes a long-lived connection that acts as a pipe for messages in either direction. A client can send a message to the server just like before, but the server can now push messages through that pipe as well. These connections are persistent and bi-directional, which means that you can send messages in either direction. Each client can send messages to the server, and the server can push messages to a single client or broadcast to all connected clients simultaneously. SignalR establishes and manages those pipes, or bi-directional connections between the client and the server for you. It uses a number of technologies under the hood to make those connections work, but all that is hidden from you. SignalR abstracts away the complexity of things like web sockets so you can focus on building the parts of your application that you actually care about. This means that you don't have to worry about building the transport layer, you just get methods that make it easy to send a message from the client to the server, or from the server to one or more clients. So, what can you do with Signal R? Chat and communication apps are a common example, but there are a lot of other things you can do once you have a connection that can transport messages in either direction. You could use SignalR to push notifications, alerts, and content updates down to web clients in real-time, to build rich UI experiences. Think of an auction site that immediately shows new bids or maybe a notification icon that appears instantly when you have a new message. You can also use SignalR for collaboration apps, such as a shared whiteboard or a document editor, or for games that require real-time communication. In this course, we'll build a simple chat example, but the principles will apply to anything else you want to build with SignalR. It's also important to cover what SignalR does not do. Since SignalR is focused on creating connections and transporting messages, it doesn't include any persistence or data storage. In other words, once you send a message, it's forgotten. If you want to show a message history or keep a log, you'll need to do that separately. SignalR also doesn't try to manage the users connected to your application. It's focused on the connections themselves, so allowing a new user to register or check in the last time someone logged in is also outside its scope. I'll cover this in a little bit more detail as we look at how to build a project with SignalR.

### SignalR vs. WebSockets vs. WebRTC

Selecting transcript lines in this section will navigate to timestamp in the video

- [Instructor] When I started learning SignalR, my first question was, why not just use WebSockets? What benefit does SignalR have over using the WebSockets API that's already in every browser? And what about WebRTC, a separate but related API that's also in most browsers? Let's explore these questions to understand how SignalR fits in. If you haven't heard of WebSockets before, it's an API in modern browsers that makes it possible to create bidirectional connections between a client and a server. It sounds kinda familiar, right? WebSockets is actually the underlying transport that SignalR uses, at least most of the time. SignalR has the ability to fall back to other ways of transporting messages, such as long-polling over HTTP. This is useful in situations where you don't have WebSockets support. This means that SignalR is really an abstraction layer over the underlying transport, so the code that you write doesn't have to know or care how the messages get delivered. When a connection is established, SignalR determines the best technique and uses it for that connection. It might be WebSockets, it might be long-polling, or it might be some new transport that isn't available yet. The SignalR client provides a clean and consistent interface for establishing and managing connections. Regardless of whether the connection uses WebSockets or something else, you just need to interact with the SignalR client interface. One more advantage is that SignalR includes a server implementation that works out of the box. If you're working with a raw WebSockets API, you'll need to find or build a WebSockets server yourself that can handle the client connections. Another API that most browsers support is WebRTC. WebRTC also does real-time communication, but it's intended for streaming audio and video. Because of this, there are some technical differences under the hood, WebRTC is built on top of UDP, while SignalR and WebSockets use TCP. These two connection protocols behave a little bit differently, UDP means that WebRTC messages are typically delivered faster but they have less delivery guarantees. Furthermore, WebRTC is designed to allow clients to stream data directly to one another in a peer-to-peer way, while WebSockets and SignalR route all messages through a server. So when could it make sense to use WebRTC? If you're building a video chat app or another project where you need to stream audio and video between clients, WebRTC is a good fit. If you have extremely strict requirements around latency, WebRTC might also be a good fit because it uses UDP. High-performance games sometimes fall into this category. For web applications that don't involve streaming media, I'd recommend WebSockets and SignalR because they're a lot simpler and easier to use.

### SignalR and ASP.NET Core

Selecting transcript lines in this section will navigate to timestamp in the video

- [Instructor] The SignalR sever is built on top of ASP.NET Core, Microsoft's cross-platform web framework. On the technical level, SignalR is just a piece of middleware that plugs into the ASP.NET Core pipeline. This means that SignalR can benefit from the features already included in ASP.NET Core, like serializing and deserializing data models, connection security, and authentication. ASP.NET Core can be deployed to Docker or any Linux or Windows host, which gives you plenty of flexibility when hosting the server. Any application can connect to a SignalR sever, even apps that aren't built on top of ASP.NET Core. There are SignalR clients for JavaScript and .NET apps, with more clients on the way. Each client just needs to be given the address of a SignalR sever to establish a connection.

  Skip to section

Skip to search
Accessibility feedbackContact LinkedIn’s Disability Answer Desk with accessibility feedback or issues
Close jump menu
LinkedIn Learning logoLEARNING
Browse
Search for skills, subjects or software
Home
My Learning
Edwin Muraya
Me

EN
Change language. Current language is English.

PlayPlay

Skip back 10 secondsSkip back

Skip ahead 10 secondsSkip ahead

Turn closed captions onShow captions

Mute
Learning SignalR with ASP.NET Core
Create an ASP.NET Core project
00:09 / 01:06

Like content

195 View 195 likers

1,258
1,258 bookmarks

Overview

Q&A

Notebook

Transcript
Find in transcript
In this video
Create an ASP.NET Core project
Selecting transcript lines in this section will navigate to timestamp in the video

- [Instructor] To get started, let's create an ASP.net core project. I'll be using Visual Studio 2017 in these videos, but you can also use Visual Studio Code or any other editor you prefer. The easiest way to follow along is by downloading the sample project available in the exercise files for this course. My starting point is a Razor Pages project built with ASP.netcore 2.1. It includes the style sheets and images for the fictional Explore California brand. You don't need these files to follow along with the course, but you're welcome to use this project as a starting point. If you want to create a project totally from scratch, choose file, new project, pick ASP.netcore web application and choose an application template. SignalR works with any type of ASP.netcore project. I'm using Razor Pages here to keep the sample web views really simple. Picking web application creates a new project using the Razor Pages template. If you're using another editor besides Visual Studio, you can get the same result by running dotnet new razor on the command line. This project doesn't use SignalR yet, but we can add it with only a few lines of code.

Give feedback
0 notifications total
