# Kamala Facts 2

![Kamala Facts](https://i.imgur.com/nQnW09R.png)

This second version of Kamala Facts is currently built using an Algolia API and a react frontend. 

Kamala Facts is a website dedicated to providing the truth about all things Kamala. As a strong political woman, who fights for equal rights and better living conditions for minorities and underrepresented communities, Kamala faces a lot of backlash, rumors, and criticism. With Kamala Facts, we intend to put those issues to rest by providing the true facts about Kamala and her works. When users visit Kamala Facts, they can search for whatever rumor or story they’ve heard and learn the real truth of the matter, as well as become more educated about it.<br /> 
This API provides access to specific facts, which have been collected and reviewed by subject matter experts and those working closely with Kamala. 

## React: 
[React Docs](https://reactjs.org/docs/getting-started.html)
Purpose: To build the application the developers used React on the frontend. React allowed the developers to create a simpler user interface (UI) that gives them the ability to write reusable components, which ultimately makes the entire codebase simpler and shorter. React also allows the use of multiple built-in libraries and packages, that allow the application to run smoother and faster, without the page needing to refresh/reload when loading new information. 

## Algolia search: 
[Algolia Search](https://www.algolia.com/)
[Algolia Documentation](https://www.algolia.com/doc/)
Purpose: To create a robust search engine that is fast and powerful. Ever wonder how on earth does the internet know what you are trying to search for before you even finish typing it? That's what the Algolia search functionality does. This search engine provides users the ability to search even when they don’t fully really know what they want to search for or may not be sure what specific words to use. It does this by providing users with hints or suggestions on what to type into the search bar. 
# Getting Started 

## Prerequisites 
* npm 
  ```bash 
  npm install npm@latest -g
  ```

## Installation

1. Install Docker
We used docker to set up our runtime environment<br />
Purpose: For users to be able to run the code on any computer even when their environment is not set up with the required dependencies. Users can clone the repo and fire off the application with just a few docker commands. The docker build will install all the required dependencies without the user having to install everything manually. This saves a lot of time for developers, because they can get right to work without having to conduct multiple searches to figure out what dependency or package they need to run a specific command or function. Docker has already taken care of that for them. 

To download docker on linux run these commands

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

2. Clone the repo

Using ssh

```bash
git clone git@github.com:Kamala-Facts-Team/kamala_facts_2_frontend.git
```

Switch directories into your newly cloned project, and at the root run this command in your terminal to install all project dependencies

3. Install NPM packages 
```bash
npm install 
```
4. Run app using Docker
```bash
docker-compose up
```

## Port

Visit this link to view the project

[http://172.20.0.2:3000/](http://172.20.0.2:3000/)


# Used on the Backend 

### Visit the backend Repo here: 
https://github.com/Kamala-Facts-Team/kamala-facts-2-backend 

## Rails API:
https://kamala-facts-2-backend.herokuapp.com/api/v1/myths<br />
Purpose: The team used Rails to build the API because Rails is one of the frameworks that includes a more complete combination of the things needed to “create a database-backed web application” (according to [Model-View-Controller (MVC)](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) pattern). This ultimately makes storing information in the database easier and more accessible during user searches. 

## Gitpod:
https://emerald-sheep-qfyxx9t9.ws-us25.gitpod.io/
### Run Gitpod in browser: 
https://3000-emerald-sheep-qfyxx9t9.ws-us25.gitpod.io/

## Contributors to this Project Repo
[Sydnee Sampson - Software Engineer](https://github.com/Sydnee510)<br /> 
[Malasia Woods - Software Engineer](https://github.com/malasia-415)<br />
[Brittany Ball - Documentation Egineer](https://github.com/SincerelyBrittany)<br />
[Angelines Yaport-Garcia - Technical Writer](https://github.com/AngelinesYG)<br />
[Carlos - Software Engineer](https://github.com/Clue355)<br />
[]()

