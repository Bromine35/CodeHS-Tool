# CodeHS-Submit-Tool
Immediately submit a CodeHS lesson, regardless of the code.

> Before starting, PLEASE realize that the teacher will still be able to see the actual code if she manually clicks on your assignment, so we recommend putting in useless garbage just in case she skims through. Yes, the teacher will see this as a normally completed assignment at glance, but if you're teacher isn't lazy, this could look suspicious, [see anti-cheating measures](https://help.codehs.com/en/articles/990684-preventing-student-cheating). Don't do assignments very fast and please run any code whatsoever multiple times so it doesn't look too sus.

## How do I use it?

Create a *bookmark*(let), make this the URL:
```
javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/Bromine35/CodeHS-Tool@main/min.js').then(r=>r.text()).then(t=>eval(t)).catch(e=>console.error('Error executing script:', e))})()
```

Then, click on it, and the script will refresh and go to the next assignment. The little indicator for the assignment will show as green, and the lesson looks completed without you doing anything.

**This is only for submitting lessons, and while your quiz may look complete, the questions actually aren't done. Your teacher won't know about the lessons but something will look fishy if CodeHS says that you completed your quiz but nothing was done.

### Is there another way to use it?

**Yes**, copy all of the code in main.js and paste it in devtools console.

### Can I do a bunch of assignments at once?

**Yes**, but you'll need **[TamperMonkey](https://www.tampermonkey.net/)**. Copy all of the code from `monkey.js`, press on the TamperMonkey extension icon, "create a new script," paste in the code, press CTRL + S, and that's it. Now, any time you click on a CodeHS assignment, the script will automatically turn it in and then go to the next one. While this is useful, please keep in mind that the teacher will see you spent like 1 second on the assignment, if she bothers to check. Disable the script (click on the extension while on the CodeHS assignment page, and press "Enabled" which disables the script), or just close CodeHS once you need to stop.

**This way, you can do literal units in the background, incredibly fast.**

### What if Bookmarklets/JS/Devtools are blocked?

You'll need to use this with another personal device, or unenroll.

## Credits

- Bromine35
  
(doxr) - everything
