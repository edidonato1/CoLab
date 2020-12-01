# CoLab
### A social app bringing creative-doers together


- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**CoLab** is a messageboard-style application meant to bring creatives from various mediums together for collaborations. Taking the concepts of multimedia and mixed media, **CoLab** aims to create an environment for Mixed Medium projects to be imagined._
For example, take Cara.  Cara is an up-and-coming chef, currently known for her pop-up series, which is gaining in popularity.  For her next series, she wants to highlight the artistic nature of her culinary prowess.  To do this, she wants to showcase a thoroughfare that combines visual arts with culinary arts, and needs a visual artist who shares her passion.  By utilizing the tools provided by **CoLab**, Cara can quickly connect with many artists who may want to contribute to her series in the coming months.

### Features
- Users start by registering for the application, which gains them access to their user profile
  - A user selects a primary medium - their main form of artistic expression - but can choose up four secondary mediums to add to their profile.
- Each medium has its own messageboard where users can post in search of artists operating in that medium that they may want to collaborate with.
- When two users find each other on a messageboard, they can create a new "collaboration", which will be a place where they can bouce ideas off of one another, and create a list of to-dos to be completed for their project.

<br>

## MVP

_The **CoLab** MVP in its most raw form will be series of messageboards, where each medium represnts its own separate messageboard. They are all public, and anyone has the ability to view or post to them. ._

<br>

### Goals

- Implement a token-authenticated user login process.
- Create a fully-integrated back-end with full and partial CRUD functionality, depending on the table.
- User profile gives quick access to their associated messageboards.
- Build a stylish and interactive front-end that gives users the tools they need to connect.

### Challenges

- I have several relationships to consider. Figuring out how to manage these may take some trial and error.
- My Mediums model needs to exist on its own, but also needs to belong to Users.  It exists both as a "tag", and as a messageboard, each of which with the ability to display its own unique screen.  
- Attaching Posts to the Mediums is something I haven't seen in class, and will take some heavy application and research to figure out once things get started.

<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|  Ruby on Rails   | Back-end framework for the application. |
|    PostgreSQL    | Handles the relational database on which the app is built.|
|       Axios      | HTTP client that will connect the front-end application to our database. |
|       CORS       | Allows for resource sharing between client and server.|
|      React       | Front-end framework for the application. |
|   React Router   | Used to seamlessly link and route components.|
| Styled Components| Allows for more dynamic styling of components in React. |
|    FontAwesome   | Icon library for attractive and mobile-friendly UI. |

<br>

### Client (Front End)

#### Wireframes

[Web breakpoint](https://www.figma.com/file/C3tycpZaLnBFCmo2XyuuYt/CoLab?node-id=0%3A1)

[Mobile breakpoint](https://www.figma.com/file/C3tycpZaLnBFCmo2XyuuYt/CoLab?node-id=7%3A97)


#### Component Hierarchy

``` structure

src
|__ assets/
    |__ fonts
    |__ icons
    |__ images
    |__ wireframes
|__ components/
    |__ shared
        |__ Nav.jsx
        |__ Header.jsx
        |__ Layout.jsx
|__ containers/
    |__ MediumContainer.jsx
    |__ CollabContainer.jsx
|__ screens/
    Home.jsx
    |__ medium
        |__ Mediums.jsx
        |__ MediumDetail.jsx
        |__ MediumRequest.jsx
    |__ post
        |__ PostCreate.jsx
        |__ PostEdit.jsx
    |__ user
        |__ ProfileEdit.jsx
        |__ Profile.jsx
        |__ Login.jsx
        |__ Register.jsx
    |__ collab
        |__ Collaborations.jsx
        |__ CollabDetail.jsx
        |__ CreateCollab.jsx
|__ services/
    |__ apiConfig.js
    |__ auth.js
    |__ users.js
    |__ mediums.js
    |__ collaborations.js
    |__ posts.js
  App.jsx
  index.js

```


#### Component Tree 
[component tree](https://github.com/edidonato1/CoLab/blob/master/images/Component_Tree.png) 


#### Time Estimates

| Task                | Priority | Estimated Time |  Actual Time  |
| ------------------- | :------: | :------------: |  :---------:  |
| add models          |    H     |     2 hrs      |      1 hr     |
| build routes        |    H     |     2 hrs      |      2 hrs    |
| create associations |    H     |     6 hrs      |      4 hrs    |
| seed data           |    L     |     2 hrs      |     .5 hrs   |
| add React services  |    H     |     2 hrs      |      TBD      |
| build frontend skeleton |    H     |     3 hrs      |      TBD      |
| build frontend forms|    H     |     5 hrs      |      TBD      |
| test frontend CRUD  |    M     |     3 hrs      |      TBD      |
| streamline functionality |    H     |     6 hrs      |      TBD      |
| CSS styling         |    H     |     16 hrs      |      TBD      |
| post-MVP - collaborations |   L   |     10    |     TBD     |
| TOTAL               |          |     57 hrs      |      TBD       |



<br>

### Server (Back End)

#### ERD Model
[CoLab ERD](https://github.com/edidonato1/CoLab/blob/develop/images/CoLab_ERD.png)


<br>

***

## Post-MVP 


_As my proposed project is becoming a bit more ambitious than I had originally imagined, There are certain components and features that I'm considering now to be a part of the Post-MVP, or second iteration.  For instance, the **Collaborations** feature is starting to seem more complex as I further develop the concept._

#### Collaborations
For Post-MVP, the collaborations model will be exclusive to the users that are participating in it, meaning it will only be accessible through the user's profile.

The primary challenge will be managing the relationship between users and collaborations. Through a non-programmatic lens of association it would seem that the user belongs to a collaboration, in the sense that they are a contributing member, but the more I think about it, it will have to be the other way around, where a single collaboration must be created by one user, and then can belong to many users.  




***

## Code Showcase



## Code Issues & Resolutions

