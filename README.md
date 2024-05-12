# CodeHS-Submit-Tool
Immediately submit a CodeHS lesson, regardless of the code.

> Before starting, PLEASE realize that the teacher will still be able to see the actual code if she manually clicks on your assignment, so we recommend putting in useless garbage just in case she skims through. Yes, the teacher will see this as a normally completed assignment, and it won't trigger any CodeHS anti-cheats.

## How do I use it?

Create a *bookmark*(let), make this the URL:
```
javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/Bromine35/CodeHS-Tool@main/main.js').then(r=>r.text()).then(t=>eval(t)).catch(e=>console.error('Error executing script:', e))})()
```

Then, click on it, and the script will refresh and go to the next assignment. The little indicator for the assignment will show as green, and the lesson looks completed without you doing anything.

**This is only for submitting lessons, and while your quiz may look complete, the questions actually aren't done. Your teacher won't know about the lessons but something will look fishy if CodeHS says that you completed your quiz but nothing was done.

### Is there another way to use it?

**Yes**, copy all of the code in main.js and paste it in devtools console.

### What if Bookmarklets/JS/Devtools are blocked?

You'll need to use this with another personal device, or unenroll.

## Credits

- Bromine35
  
(doxr) - everything

This will probably get patched when the actual code is verified to work on the serverside or something.