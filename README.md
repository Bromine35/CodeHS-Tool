# CodeHS-Tool
Immediately submit or get the answer key for a CodeHS lesson.

> Yes, this could look suspicious, [see anti-cheating measures](https://help.codehs.com/en/articles/990684-preventing-student-cheating). Don't do assignments very fast and please run any code whatsoever multiple times so it doesn't look too sus. Use copyjail when copy-pasting code.

### CodeHS Answer Key Grabber

**Yes**, create aother *bookmark*(let), make this the URL:

```
javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/Bromine35/CodeHS-Tool@main/answers.js').then(r=>r.text()).then(t=>eval(t)).catch(e=>console.error('Error executing script:', e))})()
```

and click it while on a lesson. The teacher's answer key will pop up.

> Remember to run the copyjail bookmarklet before copy-pasting. We also highly recommend that you rewrite that code.

## Turn-in Immediately

Create a *bookmark*(let), make this the URL:
```
javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/Bromine35/CodeHS-Tool@main/main.js').then(r=>r.text()).then(t=>eval(t)).catch(e=>console.error('Error executing script:', e))})()
```

Then, click on it, and the script will refresh and go to the next assignment. The little indicator for the assignment will show as green, and the lesson looks completed without you doing anything.

**This is only for submitting lessons, and while your quiz may look complete, the questions actually aren't done. Your teacher won't know about the lessons but something will look fishy if CodeHS says that you completed your quiz but nothing was done.

### CopyJail

Stop the teacher from seeing that you copy-pasted code.

Create a *bookmark*(let), make this the URL:
```
javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/Bromine35/CodeHS-Tool@main/copyjail.js').then(r=>r.text()).then(t=>eval(t)).catch(e=>console.error('Error executing script:', e))})()
```

Then, click on it. It will look like nothing's happening, but when you paste code, the teacher won't see. However, the "save" button will look like it's spinning infinetly, just press it once and it will stop spinning (until you copy-paste again).

### Tampermonkey Script

**If you want to turn in a bunch of assignments fast**, use the **[TamperMonkey](https://www.tampermonkey.net/)** script. Copy all of the code from `monkey.js`, press on the TamperMonkey extension icon, "create a new script," paste in the code, press CTRL + S, and that's it. Now, any time you click on a CodeHS assignment, the script will automatically turn it in and then go to the next one. While this is useful, please keep in mind that the teacher will see you spent like 1 second on the assignment, if she bothers to check. Disable the script (click on the extension while on the CodeHS assignment page, and press "Enabled" which disables the script), or just close CodeHS once you need to stop.

**This way, you can do literal units in the background, incredibly fast.**

### KillLogger
We don't really know what this does but it's probably useful.

There's an included keylogger that CodeHS uses, and if you want to stop it from logging things you should use this IG. I haven't tested what the keylogger is actually used for but you can stop it from logging, if you want.

```
javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/Bromine35/CodeHS-Tool@main/killogger.js').then(r=>r.text()).then(t=>eval(t)).catch(e=>console.error('Error executing script:', e))})()
```

### Extras

<details>
<summary>CopyJail + KillLogger + Answerkey</summary>
<br>
```
javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/Bromine35/CodeHS-Tool@main/jailloggeranswer.js').then(r=>r.text()).then(t=>eval(t)).catch(e=>console.error('Error executing script:', e))})()
```
</details>

<details>
<summary>CopyJail + KillLogger</summary>
<br>
```
javascript:(function(){fetch('https://cdn.jsdelivr.net/gh/Bromine35/CodeHS-Tool@main/jaillogger.js').then(r=>r.text()).then(t=>eval(t)).catch(e=>console.error('Error executing script:', e))})()
```
</details>

### What if Bookmarklets/JS/Devtools are blocked?

You'll need to use this with another personal device, or unenroll.

## Credits

- Bromine35
  
(doxr) - everything

Licensed under GNU GPL v3.