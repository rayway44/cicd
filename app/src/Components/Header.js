import React from 'react'
import './CSS/Header.css';

export default function Header() {

console.log('we are hitting the header')

function watsonTester(){

  // put value of from textbox in variable question
  let question = document.getElementById('textBox').value

  // take question and replace an of special characters
  let trimmer = question.replace(/[$/!/@/#/$/%/^/&/*/+/{/}/[/:/;/?//>/</]/g, "")

  // the question and trim any white space
  let finalQuestion = trimmer.trim();

  // check if final question is trimmed correctly 
  console.log(finalQuestion);

  // get box and clear it out
  let demoBox = document.getElementById('demoBox')
  // demoBox.innerHTML = ""

  demoBox.innerHTML = `<p>Searching. . . . ${finalQuestion} </p>`

}

  return (
    <div>
      
      <img src="./Images/turners-logo.png" alt='turners logo'/>
      <h1>FAQ Search</h1>
      <input type="text" id="textBox" placeholder="e.g. what fees are there ?" />

      <button onClick={watsonTester}>Search</button>

      <div id="demoBox" class="results">
      </div>

    </div>
  )
}
