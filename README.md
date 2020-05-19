# README Generator

## A command-line application that dynamically generates a README file from user input

This application brings the user a tool for more eficiency for his projects. When running the application, the user is given a set of prompts, which will gather all the information needed for the readme.md file to be generated. It also grabs the user's github profile, avatar and email, along with a badge for the license.

## Installation

To run and develop the code for yourself, you can use an IDE such as [VS Code](https://code.visualstudio.com/). 

In order to use this application, you must have Node.js installed. You can download it [here](https://nodejs.org/en/download/).

You must also download Inquirer and Axios, which you can do by calling `npm init` and `npm install` from the command line. For more detailed information, check out the documentation for [Inquirer](https://www.npmjs.com/package/inquirer) and [Axios](https://github.com/axios/axios). 

## Usage 

From the terminal, run `node index.js`. Then, answer each question with the proper information. When all prompts are completed, a readme file is automatically generated.

## License

MIT License

Copyright © 2020 Yuri Oliveira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.