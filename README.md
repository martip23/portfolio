# PatrickMartinez.us Website
[![CircleCI](https://circleci.com/gh/martip23/portfolio/tree/portfolio.svg?style=svg)](https://circleci.com/gh/martip23/portfolio/tree/portfolio)
The code used to write/deploy patrickmartinez.us

## Features
Front end portfolio website.

Fully automated CI/CD pipeline which does the following:
* Pulls from github
* Runs Node Tests and the below steps in parallel
* Builds a docker image based on node
* Authenticates to AWS
* Pushes image to AWS ECR
* SSHs and authenticates into EC2 server
* Pulls the newest image
* Stops current docker container
* Starts new container with updated build

## Technologies Used
* React
* Material UI
* Docker
* AWS EC2
* AWS ECR
* AWS Route 53
* CircleCI
* Node.js
