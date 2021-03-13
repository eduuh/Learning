#!/bin/python3

# Print string
print("Hello, wold!") # double quotes

print("\n ") # new line

print('Hello world')  # single quotes


print("""This string runs multiple lines
  this is nice to do
      """) # triple quoates for multiline

print("This string is " + "awesome") # we can also concantenate


## Math

print(555+55) #add
print(555-55) #subtract
print(555*55) # multiplication
print(555/55) # divide
print(45-454*4545-5445) #PEMDAS
print(45**4) #exponnets
print(55 % 5) #modulo
print((56 / 5)) # division
print(56 // 5) # no leftovers

### variables and methods
quote = "All is fair in love and war."
print(quote)
print(quote.upper()) # uppercase
print(quote.lower()) # uppercase
print(quote.title()) # uppercase
print(len(quote))


### 
name = "Edwin" #string
age = 56 # int int(30)
gpa = 3.8 # float float(23.e)

print(name)
print(age)
print(gpa)

print(int(age)) #
print(int(60.9)) ## does not round
print("My name is " + name + " and I am " + str(age) + "  years old")

age +=1
print(age)

#### functions
print("here is is the example function")
print("\n")

def who_am_I():
    name = "edwin"
    age = 23
    print("My name is " + name + " and I am " + str(age) + "  years old")

who_am_I()


### relational

les_than = 7 < 5
greater_than = 2 > 7
greater_than_equal_to = 7 >= 7
less_than_equal_to = 2 <= 7

#and 

test_and = (1>5) and (7<5) # both statement must be true 
test_and = (1>5) or (7<5)  # only one statement have to be true
test_not = not True  #false

def nl():
    print("\n")

### conditional statements
### if else scenarios

def drink(money):
    if money >= 3:
        return "You/ve got yourself a drink!"
    else:
        return "No drink for you"

print(drink(5))


def alcohol(age,money):
    if(age >= 21) and (money >= 5):
        return "We`re getting a drink!`"
    elif (age >= 21) and (money < 5):
        return "Come back with more money"
    else:
        return "You`re too poor and too young`"

print(alcohol(21,5))
print(alcohol(21,4))
print(alcohol(20,4))

### List
## List are datastructures in python

nl()
names = ["Edwin", "Muraya", "Kamau"]
print(names[0]) # Edwin
print(names[1]) # Muraya
print(names[1:4]) # grabs the first 4 items
print(names[1:]) # grabs all the lists items
print(names[:3]) # grabs all the lists items

## tuples

nl()

## tuples do not change
grades = ("a", "b", "c", "d")
print(grades)
print(grades[1])

## Looping
## for loops start to finish of an iterate

vegatables = ["cucumber", "spinash", "cabbage"]

for x in vegatables:
  print(x)

## while loops
## executes as long as true

i = 1

while i < 10: 
    print(i)
    i +=1

### importing modules

import sys
from datetime import datetime


## Advanced string
my_name = "Health"
sentence = "This is a sentence"
sen = sentence.split()
for x in sen:
    print(x)

sentence_split = sentence.split()
sentenc_join = " ".join(sentence_split)
quote = "He said, give me all your money"

print("Sentence join print below")
quote = "He said, \" give me all your money\""
print(sentenc_join)
print(quote)


too_much_space = "                    hello" # a string with a big space
print("trim below")
print(too_much_space.strip()) # trim out spaces

print(sys.version)
print(datetime.now())
print(sentence[:3])


letter = "A"
word = "Apple"
print(letter.lower() in word.lower()) #improved
movie = "The hangover"
print("My favorite movie is", movie)

### Dictionaries
### key value pairs
drink = {"white Russian": 4, "Olb Fashion": 16, "Lemon Drop": 8}
print(drink["white Russian"])

employees = { "finance": ["Bob", "Linda", "Tina"], "IT": { "Edwin", "Muraya", "Kamau" } }
print(employees)

employees["legal"] = ["Mr. fond"]

print(employees)

employees.update({"Sales": ["edwin", "Muraya", "Kimani"]})

print(employees)

print(employees.get("finance"))

### Sockets
import socket

HOST = "127.0.0.1"
PORT = 7777

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect((HOST, PORT))









