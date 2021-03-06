
#### Functional requirements.

1. Mantain a library of albums/songs.
2. Allow users to browse albums/songs.
3. Allow users to select individual songs.
4. Prevent user from selecting entire albums.
5. Maitain a queue of song to play.
6. Play music.
7. Allow users to sort by artist.
8. Identity Indivitual users.
9. Track number of plays per users.

#### Not_Functional Requirement

1. Intutive to use in space.
2. Available 24/7
3. Low power
4. Updatable

### Use Cases

###### Use case 1

**Title:** Play a Song
**Primary Actor:** User
**Success Scenario:** System identifies user. User browse library of available
albums. User selects an albums and browse list of songs on the selected albums.
User select a song. System plays the selected song.

**Title:** Select Multiple Songs
**Primary Actor:** User
**Success scenarion**

1. System identifies user.
2. User browses available albums and songs.
3. User selects a song
4. System begins playing selected song.
5. System adds second song to play a queue.
6. System plays second song after first song is over.

#### UserStories. Help uncover new requirements

As a user , I want \*\*my song to be added to the front fo a long play queue, so
that I don't have to wait hours to hear it.

As a user, I want to be identified without touching anything, so that my hands
are fre to do other things.

As a user, i want to sort and browse songs by artist, so that I can listen to
every song by ABBA.

As a spaceship commander I want to be able to cancel selection so that i dont
have to listen to disco all the way to moon.

#### Domain Modelling

The picking out nouns.

User
Admin
Library
Albums
Queue
Space

#### Picking out verbs

browose libary.
select a song.
Plays the selected song.
Adds second song to play queue.
Plays second song.
Cancel selection

Add song to queue
Play song from queue
Cancel song in queue
Identify user

####  class diagrams.

Admin is a User?