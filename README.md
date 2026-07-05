[jump to hackatime glitch info](#a-must-read-for-horizon-reviewers-hackatime-glitch-info)

## my new personal site! (more like my playground) 
this is not my typical professional portfolio, this is my unprofessional personal site! i wanted people to do something when they visited my site, not just scroll and skim. so i built it like a tiny adventure game. you start in the sky, land on mountains, walk into a forest, and find things along the way. every section has something to click, something to open, something to play.

### adventure...?
yes, adventure! a plane flies in from the left. the door opens. a character jumps out and floats down through the clouds onto the mountain peaks below. you watch it happen, then the page unlocks and you can take over.
<table>
  <tr>
    <td align="center" style="padding: 15px; background-color: #323438; border: 1px solid #30363d; border-radius: 6px;">
      <img src="https://cdn.hackclub.com/019f32fc-c997-7e9b-8af2-37b08482b7d8/2026-07-05%20(6).png" alt="stage 1" width="100%">
    </td>
    <td align="center" style="padding: 15px; background-color: #323438; border: 1px solid #30363d; border-radius: 6px;">
      <img src="https://cdn.hackclub.com/019f32fd-bf1e-7e64-9324-0c2bf7a687c3/2026-07-05%20(7).png" alt="stage 2" width="100%">
    </td>
    <td align="center" style="padding: 15px; background-color: #323438; border: 1px solid #30363d; border-radius: 6px;">
      <img src="https://cdn.hackclub.com/019f32fd-1c36-7948-8385-2491c16d9068/2026-07-05%20(8).png" alt="stage 3" width="100%">
    </td>
  </tr>
</table>
the character is controllable with wasd - and as you walk near the flags or the camp, they glow like something's there. three flags sit on three different peaks. click one and a window opens right there on the page. it shows you a little about the project first, then gives you the option to view it live inside an iframe.

### forest!
this is the most packed section. three things to find:
<table>
  <tr>
    <td align="center" style="padding: 15px; background-color: #274b32; border: 1px solid #30363d; border-radius: 6px;">
      <p>the bonfire: click it and a drawing canvas opens. leave me something cute. there's a pencil, eraser, color picker, brush sizes, and shapes. when you're done you can send it directly to my email.</p>
      <img src="https://cdn.hackclub.com/019f330b-39c7-71b6-b100-7ea98d2ca6ee/2026-07-05%20(12).png" alt="stage 1" width="100%">
    </td>
    <td align="center" style="padding: 15px; background-color: #274b32; border: 1px solid #30363d; border-radius: 6px;">
      <p>the book: tilted slightly on the grass. click it and it opens like a real book. i have attached my photos there so it previews like an album of me!</p>
      <img src="https://cdn.hackclub.com/019f330c-f92a-79fe-a350-2bf1801eee09/2026-07-05%20(13).png" alt="stage 2" width="100%">
    </td>
    <td align="center" style="padding: 15px; background-color: #274b32; border: 1px solid #30363d; border-radius: 6px;">
      <p>the bush: has a mini game. click it and apple catcher loads inside a styled window. catch 10 apples in 15 seconds. there are in canvas buttons for mobile players.</p>
      <img src="https://cdn.hackclub.com/019f3308-d327-744e-aad3-4b10a2abda79/2026-07-05%20(5).png" alt="stage 3" width="100%">
    </td>
  </tr>
</table>

## cdn over local installation
i used gsap in animating the character and phaser for making the game. for a project this size, cdn is just the simpler choice. i personally did not want to install it locally. grab your cdn links directly from the library sites:

- gsap: [cdnjs.com](https://cdnjs.com/libraries/gsap)
- phaser: [cdnjs.com](https://cdnjs.com/libraries/phaser)

drop them in your html before your own scripts and you're done.

## built-in game documentation!

this was the part i was most excited about. this started as a small feature inside my portfolio site - originally i had a campfire chat section in the forest part of my site, and i thought it would be fun to have a little mini game tucked inside it but honestly i was out of ideas so i thought of moving it in the bush. this is a project on its own, coded entirely during the development of this personal site. it *can* be played on an external link, but i chose not to publish it anywhere outside of this site - i consider it a sub-project that lives here and only here.

### little glimpses
<table>
  <tr>
    <td align="center" style="padding: 15px; background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px;">
      <p>half the canvas black, game rendering incorrectly</p>
      <img src="https://cdn.hackclub.com/019f3251-0aff-77b0-8a31-bfd9265afe30/2026-07-04%20(1).png" alt="stage 1" width="100%">
    </td>
    <td align="center" style="padding: 15px; background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px;">
       <p>game rendering correctly but on different origin</p>
      <img src="https://cdn.hackclub.com/019f3251-b8f5-7c5f-8507-5b26156897d9/2026-07-05%20(1).png" alt="stage 2" width="100%">
    </td>
    <td align="center" style="padding: 15px; background-color: #0d1117; border: 1px solid #30363d; border-radius: 6px;">
      <p>fully functional with start screen, score tracking, win/lose</p>
      <img src="https://cdn.hackclub.com/019f3252-8dd9-7a79-9375-5b98dfe1f70d/2026-07-05%20(2).png" alt="stage 3" width="100%">
    </td>
  </tr>
</table>


personally, i would say phaser is honestly one of the most beginner friendly game frameworks out there. it handles physics, collisions, sprites, and game loops so you don't have to build any of that from scratch. also it runs in the browser which was perfect since i needed it to load inside an iframe on my site which an engine like godot couldnt do.

the game itself is simple: apples fall from the top of the screen and you move a basket left and right to catch them. you have 15 seconds. catch 10 or more and you win. it doesn't sound like much but building even something this small taught me a lot about how game loops work, how physics engines handle gravity and velocity, and how to manage game state like score, time, and win/lose conditions.


## a must read for horizon reviewer(s)!!! (hackatime glitch info)

so my hackatime looks a bit messy. it's showing like 13 hours and claims the project has been active for 15 days, but **2 of those hours are completely inflated because of a local cache glitch around june 19-20** that randomly pulled in 95+ ghost files from other projects on my pc (including a vibecoded project i worked on the other day name "cv_tool_vercel" which is why you see a lot of copilot(since it was used in this vibecoded project)).

anyways, i actually started this project on **june 17**, and the true manual dev time should be **~11 hours**. i talked to fs about it and they gave me the green light to just track normally and note it down here. if you check the time spent per file on the backend, you'll easily see which files don't belong to this repo. 

i took some screenshots for full transparency so you can see what's actually happening:
<table>
  <tr>
    <th width="65%">1. actual time filtered (june 17 - june 24)</th>
    <th width="35%">2. actual vs code file tree</th>
  </tr>
  <tr>
    <td valign="top">
      <p>here is the filtered view showing the actual hours logged during my real dev window:</p>
      <img src="https://cdn.hackclub.com/019ef9fb-aba7-7754-8b32-bea0206c7622/time%20spent%20on%20adv%20alisha%20from%2017%20june%20to%2024%20june.png" alt="hackatime logs" width="100%">
    </td>
    <td valign="top">
      <p>what my folder actually looks like (definitely not 95+ files lol):</p>
      <details>
        <summary style="cursor: pointer; color: #38bdf8; font-weight: bold;">click to expand file tree</summary>
        <div style="margin-top: 10px;">
          <img src="https://cdn.hackclub.com/019ef9fb-e265-7748-9675-db5ac5b8be67/file%20structure%20for%20adv-alisha.png" alt="vs code structure" width="100%">
        </div>
      </details>
    </td>
  </tr>
</table>
also: you see svgcode folder in the file tree, so the svg code here was exported from figma after hand-drawing the designs, opened up in notepad, and copy-pasted directly into vs code. the photos and assets folders just have standard pngs and stuff.

### reach out!

if you're coming from hackclub wrokspace then pls reach me out on slack for any queries: @Alisha!
