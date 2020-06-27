### Michael Quarne

This is the README file for my solution to the problem posed. I stuck to the 4 hour window that was recommended in the original README file.

#### My Solution

I didn't do anything with authorizing the endpoints. I assume that is something that would need to be added in the future.  
I also would have done some validation on the front-end side of the application to make sure that the form inputs would have the proper data in them beofre they were sent to the API.

I created an API that has two endpoints. A users endpoint and an events endpoint. There are routes to 'get' users and events and there are routes to 'post' users and events. The post routes are to create users and events and have some validation to make sure the fields aren't empty and have the required data to create a new entry. The 'get' routes would be used to get all of the created events or users, if needed.

I wasn't sure how to accomplish the following things that were required. If I had more time I would do more research into how to return these events. Or I would reach out to colleagues for advice on how to accomplish the task.
The following use cases should be satisfied to get user event data

- return all failed login events for all users
- return all login events for a single user
- return all events for the day before last
- return all events for the week before not including session timeout

I know I didn't get everything done that was required to solve the problem, but I wanted to say that I am a fast learner and willing to work hard to overcome my weaknesses.

Thank You,
Michael Quarne

## Overview

Please complete this exercise with node.js and ES6. This exercise is intended to take no longer than 4 hours. Please limit the detail of your solution with that time in mind. Please include a README with your submission detailing your solution.

## Problem

Lets assume Cascade Fintech has contracted you to build a small **RESTful API** to support their new user tracking software.

Data does not need to be persisted between server restarts.

## Submission

Choose one of the following

- Come back to this repository and submit a pull request of your solution.
