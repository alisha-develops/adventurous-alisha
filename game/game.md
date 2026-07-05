## documentation for the game!

this was the part i was most excited about. this started as a small feature inside my portfolio site - originally i had a campfire chat section in the forest part of my site, and i thought it would be fun to have a little mini game tucked inside it. i wanted visitors to actually have something to do on my site, not just scroll and read.
<table>
  <tr>
    <td align="center" style="padding: 15px; background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px;">
      <p style="margin-top: 0;">this is the exact section where i thought i will be presenting/previewing the game later on.</p>
      <img src="https://github.com/user-attachments/assets/c9ce7af5-ba85-489e-8b78-7c9ee1cdc757" alt="game presentation area" max-width="650" width="100%">
    </td>
  </tr>
</table>
but honestly i was out of ideas so i thought of moving it in the bush. and when you hover over it u will see something like: 
<table>
  <tr>
    <td align="center" style="padding: 15px; background-color: #1c1f0d; border: 1px solid #30363d; border-radius: 6px;">
      <img src="https://cdn.hackclub.com/019f3259-75f4-772d-b859-0d1dc1553f7c/2026-07-05%20(3).png" alt="stage 1" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 15px; background-color: #1c1f0d; border: 1px solid #30363d; border-radius: 6px;">
      <img src="https://cdn.hackclub.com/019f325a-9065-7a1f-94c7-493be6d8d471/2026-07-05%20(5).png" alt="stage 2" width="100%">
    </td>
  </tr>
</table>

## little glimpses
<table>
  <tr>
    <td align="center" style="padding: 15px; background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px;">
      <p>half the canvas black, game rendering incorrectly</p>
      <img src="https://cdn.hackclub.com/019f3251-0aff-77b0-8a31-bfd9265afe30/2026-07-04%20(1).png" alt="stage 1" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 15px; background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px;">
      <p>game rendering correctly but on different origin</p>
      <img src="https://cdn.hackclub.com/019f3251-b8f5-7c5f-8507-5b26156897d9/2026-07-05%20(1).png" alt="stage 2" width="100%">
    </td>
  </tr>
  <tr>
    <td align="center" style="padding: 15px; background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px;">
      <p>fully functional with start screen, score tracking, win/lose</p>
      <img src="https://cdn.hackclub.com/019f3252-8dd9-7a79-9375-5b98dfe1f70d/2026-07-05%20(2).png" alt="stage 3" width="100%">
    </td>
  </tr>
</table>

this is a project on its own, coded entirely during the development of this personal site. it *can* be played on an external link, but i chose not to publish it anywhere outside of this site - i consider it a sub-project that lives here and only here.


personally, i would say phaser is honestly one of the most beginner friendly game frameworks out there. it handles physics, collisions, sprites, and game loops so you don't have to build any of that from scratch. also it runs in the browser which was perfect since i needed it to load inside an iframe on my site which an engine like godot couldnt do.

the game itself is simple: apples fall from the top of the screen and you move a basket left and right to catch them. you have 15 seconds. catch 10 or more and you win. it doesn't sound like much but building even something this small taught me a lot about how game loops work, how physics engines handle gravity and velocity, and how to manage game state like score, time, and win/lose conditions.
