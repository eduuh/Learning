### what is automated testing

The practice of writing code to test our code and then run those test in and automated fashion.

### automation testing consists

1. Production code.
2. Test code

### Manual Testin

1. launch the app.
2. Login
3. Navigate
4. fillout a form 
5. submit the form
6. Verify the results.

### As Application code Increase

The testing cost increases exponestianlly.

Automate the tests.

You could test all the excution path of function in a few **seconds**.

### Benefits

- Test your code frequently in less time,
- You can catch bugs before deploying your application
- Deploy your application with confidence
  - Reduce the number of bugs.
- Allow to refactor with confidence.
  - **Refactoring means** changing the structure of the code without changing the functionality.
- Focuc more on the quality of the methods your are writing.

### Types of Tests

1. Unit Tests

Test a unit of the application witout its **external dependencies**
Test a unit of work.

- cheap to write
- Execute fast.

can be use to verify each functionality works

2.Intergration Tests.
Test the application with its **external dependencies**.

- Take longer to execute.
- Helps with deployment with confidence.

3. **End to End Test**

- Drives an application throug the UI.
Give you the greatest confidence.

- Very slow,
- Very brittle, same changes on user interface breaks them.

### Testing Pyramid.

1. Most **test** should be in the category of the **unit** test.

2. You should also have some intergartion tests.

3. You should write very few E2E.

Unit tests are use to test **algorithms** to test all the exectution paths. Not all application have.

### TakeAwayes

1. Favour unit tests to e2e tests.
2. Cover unit tests gaps with intergration tests.
3. Using end to end test sparinly.

### The tooling.

You will need a testing framework **Nunit** , **mstests** , **xUnit**. 
All this framework gives a **untility library** and a **test runner**. Dont get hand up to the tooling. Focus on the fundamentals.

#### Write your first unit test.


#### Test-driven Development (TDD)

Wit TDD you write your tests before writing the production code. 

1. You start by writing a failing test.
2. Write the simplest code to make the test pass.
3. Refactor if necessary.

### Benefits of TDD

1. Testable source code.
2. Full coverage by tests.
3. Simpler Implementation

 Test first / code first.

 In theory **Test first** if promissing.

#### Fundamental of Unit Testing.

1. **Characteritic of good unit tests.**
   - **First class citizen**. Writng clean, readable and maintable codes.
   - **Should not have any logic** if(){} **foreach(){}**
   - Each test should be called in Isolation.
   - Test should not be too specific.
2. **What to test and what not to test**
     - Testable code is clean.
     - code should be clean
     - Test the results to functions. and verify the funciton is return the right value
        - types of functions.
           - query and commands.
              - **Command** functions does and actions.
                   - Ensure the command make the right call.
     - Don't test language features.
     - Dont test 3rd party code. Assume that they are well tested
     - Always test your code.

3. **Naming and orgainising tests**
4. **Basic techniques**
5. **Writing reliable tests**

### Test Projects.

Create a **Unit testing Projects** . The project has test class.

Number of test >= Excutiton paths.

**Namin methods**

    [Methods]_[Scenario]_[ExpectedBehaviour]

### Rider

#### Writing Unit Tests.

Ensure you write tests for all the exectution paths. Don't limit yur thinking to the current implementation, try to think beyound and see all posible scenarios and esure ther are all properly tested.

Nunt provide **method** that could be used to setup object in the arrange part.

```C#
 private readonly _math;

  // Setup
  // TearDown > mostly used with intergration tests
  //Used to do clean up for database

  [Setup]
  public void Setup()
  {
      _math = new Math();
  }
```

Ignoring a test to focus on other on a specific part of the code.

```csharp
[Test]
[Ignore("Because I Wanted To!")]
public void Max_FirtArgumentIsGreater_ReturnThefirstArgument(){

   var result = _math.Max(2,1);
   Assert.That(result, Is.EqualTo(2));

}
```

- *Test** should be **TrustWorthy**.
Be **pragmatic**. 

const of a **Software bug**

Focus on delivering **quality** software with less defects. Build sotware is
costly, you either choose to pay that cost upfront during development or later
in production

#### Parameterized tests







#### Core unit testing Techiniques.

#### Exercises.

#### Breaking external Dependencies.

#### Exercises.

#### Challanges.



### Testing Method that returns a value

```

```

### Testing Void Methods/ command function

Void methods are methods that does not return a value. usually for command functions. Command
function usuall changes the state of a objects., They may do some external calls. Voids methods
that changest the state of some object.

```csharp

 public class ErrorLogger
 {
     public string LastError { get; set; }

     public event EventHandler<Guid> ErrorLogged; 
     
     public void Log(string error)
     {
         if (String.IsNullOrWhiteSpace(error))
             throw new ArgumentNullException();
             
         LastError = error; 
         
         // Write the log to a storage
         // ...

         ErrorLogged?.Invoke(this, Guid.NewGuid());
     }
 }

// testing methods that changes the state.
[TestFixture]
public void Log_whenCalled_SetTheLastErrorProperty(){
 var logger = new ErrorLogger();
 logger.Log("a");
 Assert.That(logger.LastError, Is.EqualTo("a"));
}

```


### Testing methods that throw and exception.

```csharp
[Test]
[TestCase(null)]
[TestCase("")]
[TestCase(" ")]
public void Log_InvalidError_ThrowArgumentNullException(string error){
  var logger = new ErrorLogger();
  // calling the method directly, use a lambda expression.
  Assert.That(()=> logger.log(error), Throws.ArgumentNullException);
}
```
#### Testiing Methods that Raise and Events.

```csharp
[Test]
public void Log_validError_RaiseErrorLoggedEvent(){
 var logger = new ErrorLogger();
 // subscribe to the event and when the event is created you will be notified
 var id = Guid.Empty;
 logger.ErrorLogger += (sender, args)=> {id = args};

 logger.log("a");

 Assert.That(id, Is.Not.EqualTo(Guid.Empty));
}

```
#### Testing Private Methods.

Don't test them.

#### Test Methods that return strings.
when testing strings the results test are usually case sensitive and to ingnore the case you could
use IgnoreCase method.

```csharp
Assert.That(result, Does.StartWith("<strong>").IgnoreCase());
```

When testing method that returns string, its better to ensure your methods are **more general**

```csharp
 // More general
 Assert.That(result, Does.StartWith("<strong>").IgnoreCase());
 Assert.That(result, Does.EndWith("</strong>"));
 Assert.That(result, Does.Contain("abs"));
```
#### How do we know if we have enough Tests.

Code coverage tools scans your code and tells you the part if your code that is not tested.

Example of code covorage tools.

1. Visual STudo Enterprise.
2. Resharper code coverage.
3. Ncover

#### Testing in the Real-worlds

Legacy application which are not build with testing in mind. 
 - Write tests for the key tests.
- Startup project which is moving fast.

When you are the only developer that write testable code.   





