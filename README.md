# UBS Coding Exercise

Here is a screenshot of the application...

![UBS Coding Exercise Screenshot](/screenshot.jpg)

## Features of the Application

<ul>
  <li>
    Developed using React, TypeScript, JavaScript, HTML5 and CSS3
  </li>
  <li>
    Developed without any external libraries such as SASS or Google Material Design
  </li>
  <li>
    Fully functional tree navigation, which animates when clicked/toggled
  </li>
  <li>
    Custom UBS slider component, styled using CSS3 (only tested on Webkit)
  </li>
  <li>
    Application state managed with React's Context API, using the Provider pattern
  </li>
  <li>
    The UI follows the UBS style guide
  </li>
  <li>
    GBP prices from the JSON data converted into currencies of interest
  </li>
</ul>

## Setup

To get started, install the dependencies with `npm install`.

Run the application with `npm start`.

Launch application in browser at [http://localhost:3000](http://localhost:3000).


## Task

This task is to build a simple data explorer as shown in the image below. This wireframe was supplied as a guide to get me started. Based on this, I styled the application in my own fashion to improve the design and UX.


![Pharos Coding Exercise wireframe](/pharos-coding-exercise.png)


The data is a list of application records and is fetchable at `/data`. Each application has 3 levels of business capabilities. Business capabilities are hierarchical as shown in the image (Business capability 1 -> Business capability 2 -> Business capability 3)
Important: Use the data file provided

## Requirements

- Request the dataset.
- Build a hierarchical navigation tree displaying the different levels of business capabilities. Bonus points if we can expand/collapse the navigation tree.
- Have a range slider to be able to further filter the dataset based on the total spending value
- Present a list of applications from the data set, showing name and total spend. The list depends on the navigation tree and the range filter 

Additional notes from UBS...

- Please spend as much time as you feel necessary to complete the task and show off your skills.  
- We will be looking at code/file structure, code quality & best practices, design & user experience. 
- Add comments where necessary or to document any assumptions/considerations you may have. 
- You shouldn't need to use any external libraries 
