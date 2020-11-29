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

_**CoLab** is a messageboard-style application meant to bring creatives from various mediums together for collaborations. Taking the concepts of multimedia and mixed media, **CoLab** aims to create an environment for Mixed Medium projects to be imagined._
_For example, take Cara.  Cara is an up-and-coming chef, currently known for her pop-up series, which is gaining in popularity.  For her next series, she wants to highlight the artistic nature of her culinary prowess.  To do this, she wants to showcase a thoroughfare that combines visual arts with culinary arts, and needs a visual artist who shares her passion.  By utilizing the tools provided by **CoLab**, Cara can quickly connect with many artists who may want to contribute to her series in the coming months._

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

- _Implement a token-authenticated user login process._
- _Create a fully-integrated back-end with full and partial CRUD functionality, depending on the table._
- _User profile gives quick access to associated messageboards and collaborations._
- _Build a stylish and interactive front-end that gives users the tools they need to connect and collaborate._


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|  Ruby on Rails   | _Back-end framework for the application._ |
|    PostgreSQL    | _Handles the relational database on which the app is built._ |
|       Axios      | _HTTP client that will connect the front-end application to our database._ |
|       CORS       | _Allows for resource sharing between client and server._ |
|      React       | _Front-end framework for the cpplication._ |
|   React Router   | _Used to seamlessly link and route components._ |
| Styled Components| _Allows for more dynamic styling of components in React._ |
|    FontAwesome   | _Icon library for attractive and mobile-friendly UI._ |

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Web breakpoint](https://www.figma.com/file/C3tycpZaLnBFCmo2XyuuYt/CoLab?node-id=0%3A1)

- Web Wireframes

![Mobile breakpoint](https://www.figma.com/file/C3tycpZaLnBFCmo2XyuuYt/CoLab?node-id=7%3A97)

- Mobile wireframes


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
          |__ layouts
              |__ Nav.jsx
              |__ Header.jsx
              |__ Layout.jsx
      |__ forms
          |__ StyledForms.js
          |__ user
              |__ Login.jsx
              |__ Register.jsx 
          |__ CreatePost.jsx
          |__ EditUser.jsx
|__ containers/
    |__ MediumContainer.jsx
    |__ CollabContainer.jsx
|__ screens/
    |__ Profile.jsx
    |__ LoginRegister.jsx
    |__ Mediums.jsx
    |__ MediumDetail.jsx
    |__ CreateMedium.jsx
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
![component tree](https://github.com/edidonato1/CoLab/blob/master/images/Component_Tree.png "Component Tree") 


#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model
![CoLab ERD](https://github.com/edidonato1/CoLab/blob/master/images/CoLab_ERD.png "ERD Model")


<br>

***

## Post-MVP vis


_As my proposed project is becoming a bit more ambitious than I had originally imagined, There are certain components and features that I'm considering now to be a part of the Post-MVP, or second iteration.  For instance, the **Collaborations** feature is starting to seem more complex as I further develop the concept._

#### Collaborations
For Post-MVP, the collaborations model will be exclusive to the users that are participating in it, meaning it will only be accessible through the user's profile.

Another challenge will be managing the relationship between users and collaborations. Through a non-programmatic lens of association it would seem that the user belongs to a collaboration, in the sense that it's a contributing member, but the more I think about it, it will have to be the other way around, where a single collaboration must be created by one user, and then can belong to many users.  




***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.