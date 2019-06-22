# Blues.io Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

```
npm install
npm start
```

This will launch a local dev service running on port `3000` which will 
include hot-deploy module reloading for super fast dev iteration. 

## Dependencies

For this project I used the following libraries:

- React
  - View layer
- Redux
  - Application data and state management
- Redux Thunk
  - A redux middleware that allows dispatching async actions (makes API requests way easier to manage)
- Reach Router
  - A super useful package that manages mapping between page routes and components.
  - Handles back/forward button support, and is fully compliant with modern accessibility guidelines and requirements.
  - Is a ground-up re-write of the older `react-router` package by one of the original authors 
- Material UI
  - A powerful, if bloated, component library.
  - Used in this demo primarily to show how a component library can be used, and to let the focus of the demo be on the application and business logic.
  
  
## Directory Structure and Architecture

This project was built using Redux for application data management which allows a clean separation between presentation and business logic. 
In this design, `container`s act as the dividing line between application and presentation logic.

### Application Logic

#### API
```
src/api/
-- mocks/
-- BluesAPI.js
```      

The `src/api`directory contains the mocked API and data structures. `mocks/mockUtils` has a mocked fetch that just fakes a server fetch and returns a promise that resolves after a random timeout of 200-500ms. 
`BluesAPI` shows examples of simple GET wrappers which just pull / filter data from the static json of various objects in the `api/mocks` folder.

#### Actions

```
src/actions/
-- actionTypes/
-- <object>Actions.js
```

In `src/actions` you'll find both `actions` and `actionType` constants. 
The `actions` are what is called by the view tier, and generally have two types: asynchronous or complex actions, and "action primitives" which simply return a redux action of the shape `{ type, payload }`. 
Separating out the `actionTypes` to their own constants files makes testing and bundle splitting MUCH easier (we ran into this issue in the past).

#### Store / Reducers

```
src/
-- reducers/
-- store.js
```

The `store` is effectively the global state/data manager for the application. 
`reducer`s effectively manage a slice of the store and consume one or more actions with payloads to update the global data in some way.
Strategies for creating / organizing `reducer`s vary from application to application, but for this one I just used one per primary object type.
The `store` is created with a middlware that enables some really nice developer tooling and debugging, but in production I would create a version of the store that doesn't include that in the prod build.


### Presentation Logic

#### Containers

```
src/containers/
```

Containers are used to "connect" a React component (or component tree) to the redux `store`. 
Redux provides a `connect` function that takes two arguments: `mapStateToProps` and `mapDispatchToActions`.
This is a great place to map any server data or business logic into view-appropriate format. 
The `connect` call manages setting up observer binding to specific pieces of the `store` so that the components only re-render when data they care about changes.

Containers are what is known as a "Higher Order Component (HOC)". This means that they are actually a function that takes a Component as an argument, enhances it in some way, and then return it.
In this way the component can be written 100% agnostic of the data tier, taking actions and store data as props and not caring where they came from.
They can also be reused across many different components.

```jsx harmony
import UserContainer from '../containers/UserContainer';

class FooComp extends Component { /*...*/ };

export default UserContainer(FooComp);
```

#### PropTypes

```
src/proptypes/
``` 

React uses `propTypes` as a way to do runtime validation on the types of arguments passed into a component on `props`.
`PropTypes.shape` allows you to provide effectively a schema for known objects, so I like to use this pattern specifically for any remote datatypes. 
I use the extension `Foo.pt.js` to indicate that it's a `propType` file, but that's a convention of my own design, not an industry standard.

#### Route Controllers

```
src/routes/
```

RouteControllers are the way I like to organize my component roots. 
These are what gets rendered by the Router based on URL path and params, and also where I try to do the majority of my Container usage.

#### Components

```
src/componenets/
-- AppHeader/
-- Devices/
-- Fleets/
-- Users/
``` 

These are all of the various individual rendering pieces, organized by type of object they are rendering. 

**Note**: The way styles are being handled is specific to MUI and I mostly just copied this from their documentation for the most part. 
I would want to do a bit deeper dive on this before committing to tye `makeStyles` format vs. CSS modules, or just general SASS implementation.  

## TODO 

#### Testing

Currently Material UI has some specific testing requirements that were too much of a pain to integrate for this demo. 
Consequently, there are no unit tests. That would obviously be fixed in production!

#### Login / Users

I'm not a fan of the login flow. It should be persisting the login state and not making you re-login to view the Users list.
I ran out of time to clean this up. I also hate the User select view, and would prefer to do a more polished representation of this.


#### General

- Breadcrumbs for better navigation.
- Better support for refreshing the page on a lower route by either fetching necessary upstream objects or force-redirecting to login to start the flow again.
- More consistent route pathing.  
