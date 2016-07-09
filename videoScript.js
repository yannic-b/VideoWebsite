var cgpvideo = document.getElementById("video");


function updateChapters() {
    var time = cgpvideo.currentTime;
    if (time >= 0 && time < 66) {
        resetChapters();
        highlightChapter(document.getElementById("intro"));
    } else if (time >= 66 && time < 212) {
        resetChapters();
        highlightChapter(document.getElementById("phyla"));
    } else if (time >= 212 && time < 298) {
        resetChapters();
        highlightChapter(document.getElementById("horse"));
    } else if (time >= 298 && time < 424) {
        resetChapters();
        highlightChapter(document.getElementById("autos"));
    } else if (time >= 424 && time < 552) {
        resetChapters();
        highlightChapter(document.getElementById("shape"));
    } else if (time >= 552 && time < 685) {
        resetChapters();
        highlightChapter(document.getElementById("prof"));
    } else if (time >= 685 && time < 765) {
        resetChapters();
        highlightChapter(document.getElementById("creala"));
    } else if (time >= 765 && time < 900) {
        resetChapters();
        highlightChapter(document.getElementById("conc"));
    }
}
cgpvideo.ontimeupdate = function() {updateChapters() };

function highlightChapter(element) {
    element.style.backgroundColor = "rgba(255,255,255,0.3)";
}

function resetChapters() {
    for (var i = 0; i < 8; i++) {
        document.getElementsByClassName("chap")[i].style.backgroundColor = "rgba(255,255,255,0.1)";
    }
}

function setChapter(id) {
    resetChapters();
    switch (id) {
        case "intro":
            cgpvideo.currentTime = 0;
            updateVideoDescription("<p>Introduction.</p><p>Every human used to have to hunt or gather to survive. But humans are smart-ly lazy so we made tools to make our work easier. From sticks, to plows to tractors we&rsquo;ve gone from everyone needing to make food to, modern agriculture with almost no one needing to make food &mdash; and yet we still have abundance.</p><p>Of course, it&rsquo;s not just farming, it&rsquo;s everything. We&rsquo;ve spent the last several thousand years building tools to reduce physical labor of all kinds. These are mechanical muscles &mdash; stronger, more reliable, and more tireless than human muscles could ever be.</p><p>And that's a good thing. Replacing human labor with mechanical muscles frees people to specialize and that leaves everyone better off even though still doing physical labor. This is how economies grow and standards of living rise.</p><p>Some people have specialized to be programmers and engineers whose job is to build mechanical minds. Just as mechanical muscles made human labor less in demand so are mechanical minds making human brain labor less in demand.</p><p>This is an economic revolution. You may think we've been here before, but we haven't.</p><p>This time is different.</p>");
            break;
        case "phyla":
            cgpvideo.currentTime = 66;
            updateVideoDescription("<p>Physical Labor</p><p>When you think of automation, you probably think of this: giant, custom-built, expensive, efficient but really dumb robots blind to the world and their own work. There were a scary kind of automation but they haven't taken over the world because they're only cost effective in narrow situations.</p><p>But they are the old kind of automation, this is the new kind.</p><p>Meet Baxter.</p><p>Unlike these things which require skilled operators and technicians and millions of dollars, Baxter has vision and can learn what you want him to do by watching you do it. And he costs less than the average annual salary of a human worker. Unlike his older brothers he isn't pre-programmed for one specific job, he can do whatever work is within the reach of his arms. Baxter is what might be thought of as a general purpose robot and general purpose is a big deal.</p><p>Think computers, they too started out as highly custom and highly expensive, but when cheap-ish general-purpose computers appeared they quickly became vital to everything.</p><p>A general-purpose computer can just as easily calculate change or assign seats on an airplane or play a game or do anything by just swapping its software. And this huge demand for computers of all kinds is what makes them both more powerful and cheaper every year.</p><p>Baxter today is the computer in the 1980s. He&rsquo;s not the apex but the beginning. Even if Baxter is slow his hourly cost is pennies worth of electricity while his meat-based competition costs minimum wage. A tenth the speed is still cost effective when it's a hundred times cheaper. And while Baxtor isn't as smart as some of the other things we will talk about, he's smart enough to take over many low-skill jobs.</p><p>And we've already seen how dumber robots than Baxter can replace jobs. In new supermarkets what used to be 30 humans is now one human overseeing 30 cashier robots.</p><p>Or the hundreds of thousand baristas employed world-wide? There&rsquo;s a barista robot coming for them. Sure maybe your guy makes your double-mocha-whatever just perfect and you&rsquo;d never trust anyone else -- but millions of people don&rsquo;t care and just want a decent cup of coffee. Oh and by the way this robot is actually a giant network of robots that remembers who you are and how you like your coffee no matter where you are. Pretty convenient.</p><p>We think of technological change as the fancy new expensive stuff, but the real change comes from last decade's stuff getting cheaper and faster. That's what's happening to robots now. And because their mechanical minds are capable of decision making they are out-competing humans for jobs in a way no pure mechanical muscle ever could.</p>");
            break;
        case "horse":
            cgpvideo.currentTime = 212;
            updateVideoDescription("<p>Luddite Horses</p><p>Imagine a pair of horses in the early 1900s talking about technology. One worries all these new mechanical muscles will make horses unnecessary.</p><p>The other reminds him that everything so far has made their lives easier -- remember all that farm work? Remember running coast-to-coast delivering mail? Remember riding into battle? All terrible. These city jobs are pretty cushy -- and with so many humans in the cities there are more jobs for horses than ever.</p><p>Even if this car thingy takes off you might say, there will be new jobs for horses we can't imagine.</p><p>But you, dear viewer, from beyond 2000 know what happened -- there are still working horses, but nothing like before. The horse population peaked in 1915 -- from that point on it was nothing but down.</p><p>There isn&rsquo;t a rule of economics that says better technology makes more, better jobs for horses. It sounds shockingly dumb to even say that out loud, but swap horses for humans and suddenly people think it sounds about right.</p><p>As mechanical muscles pushed horses out of the economy, mechanical minds will do the same to humans. Not immediately, not everywhere, but in large enough numbers and soon enough that it's going to be a huge problem if we are not prepared. And we are not prepared.</p><p>You, like the second horse, may look at the state of technology now and think it can&rsquo;t possibly replace your job. But technology gets better, cheaper, and faster at a rate biology can&rsquo;t match.</p><p>Just as the car was the beginning of the end for the horse so now does the car show us the shape of things to come.</p>");
            break;
        case "autos":
            cgpvideo.currentTime = 298;
            updateVideoDescription("<p>Automobiles</p><p>Self-driving cars aren't the future: they're here and they work. Self-driving cars have traveled hundreds of thousands of miles up and down the California coast and through cities -- all without human intervention.</p><p>The question is not if they'll replaces cars, but how quickly. They don&rsquo;t need to be perfect, they just need to be better than us. Humans drivers, by the way, kill 40,000 people a year with cars just in the United States. Given that self-driving cars don&rsquo;t blink, don&rsquo;t text while driving, don&rsquo;t get sleepy or stupid, it easy to see them being better than humans because they already are.</p><p>Now to describe self-driving cars as cars at all is like calling the first cars mechanical horses. Cars in all their forms are so much more than horses that using the name limits your thinking about what they can even do. Lets call self-driving cars what they really are:</p><p>Autos: the solution to the transport-objects-from-point-A-to-point-B problem. Traditional cars happen to be human sized to transport humans but tiny autos can work in wear houses and gigantic autos can work in pit mines. Moving stuff around is who knows how many jobs but the transportation industry in the United States employs about three million people. Extrapolating world-wide that&rsquo;s something like 70 million jobs at a minimum.</p><p>These jobs are over.</p><p>The usual argument is that unions will prevent it. But history is filled with workers who fought technology that would replace them and the workers always loose. Economics always wins and there are huge incentives across wildly diverse industries to adopt autos.</p><p>For many transportation companies, the humans are about a third of their total costs. That's just the straight salary costs. Humans sleeping in their long haul trucks costs time and money. Accidents cost money. Carelessness costs money. If you think insurance companies will be against it, guess what? Their perfect driver is one who pays their small premium but never gets into an accident.</p><p>The autos are coming and they're the first place where most people will really see the robots changing society. But there are many other places in the economy where the same thing is happening, just less visibly.</p><p>So it goes with autos, so it goes for everything.</p>");
            break;
        case "shape":
            cgpvideo.currentTime = 424;
            updateVideoDescription("<p>The Shape Of Things To Come</p><p>It's easy to look at Autos and Baxters and think: technology has always gotten rid of low-skill jobs we don't want people doing anyway. They'll get more skilled and do better educated jobs -- like they've always done.</p><p>Even ignoring the problem of pushing a hundred-million additional people through higher education, white-collar work is no safe haven either. If your job is sitting in front of a screen and typing and clicking -- like maybe you're supposed to be doing right now -- the bots are coming for you too, buddy.</p><p>Software bots are both intangible and way faster and cheaper than physical robots. Given that white collar workers are, from a companies perspective, both more expensive and more numerous -- the incentive to automate their work is greater than low skilled work.</p><p>And that's just what automation engineers are for. These are skilled programmers whose entire job is to replace your job with a software bot.</p><p>You may think even the world's smartest automation engineer could never make a bot to do your job -- and you may be right -- but the cutting edge of programming isn't super-smart programmers writing bots it's super-smart programmers writing bots that teach themselves how to do things the programmer could never teach them to do.</p><p>How that works is well beyond the scope of this video, but the bottom line is there are limited ways to show a bot a bunch of stuff to do, show the bot a bunch of correctly done stuff, and it can figure out how to do the job to be done.</p><p>Even with just a goal and no example of how to do it the bots can still learn. Take the stock market which, in many ways, is no longer a human endeavor. It's mostly bots that taught themselves to trade stocks, trading stocks with other bots that taught themselves.</p><p>Again: it's not bots that are executing orders based on what their human controllers want, it's bots making the decisions of what to buy and sell on their own.</p><p>As a result the floor of the New York Stock exchange isn't filled with traders doing their day jobs anymore, it's largely a TV set.</p><p>So bots have learned the market and bots have learned to write. If you've picked up a newspaper lately you've probably already read a story written by a bot. There are companies that are teaching bots to write anything: Sports stories, TPS reports, even say, those quarterly reports that you write at work.</p><p>Paper work, decision making, writing -- a lot of human work falls into that category and the demand for human metal labor is these areas is on the way down. But surely the professions are safe from bots? Yes?</p>");
            break;
        case "prof":
            cgpvideo.currentTime = 552;
            updateVideoDescription("<p>Professions</p><p>When you think 'lawyer' it's easy to think of trials. But the bulk of lawyering is actually drafting legal documents predicting the likely outcome and impact of lawsuits, and something called 'discovery' which is where boxes of paperwork gets dumped on the lawyers and they need to find the pattern or the one out-of-place transaction among it all.</p><p>This can all be bot work. Discovery, in particular, is already not a human job in many firms. Not because there isn't paperwork to go through, there's more of it than ever, but because clever research bots sift through millions of emails and memos and accounts in hours not weeks -- crushing human researchers in terms of not just cost and time but, most importantly, accuracy. Bots don't get sleeping reading through a million emails.</p><p>But that's the simple stuff: IBM has a bot named Watson: you may have seen him on TV destroy humans at Jeopardy &mdash; but that was just a fun side project for him.</p><p>Watson's day-job is to be the best doctor in the world: to understand what people say in their own words and give back accurate diagnoses. And he's already doing that at Slone-Kettering, giving guidance on lung cancer treatments.</p><p>Just as Auto don&rsquo;t need to be perfect -- they just need to make fewer mistakes than humans, -- the same goes for doctor bots.</p><p>Human doctors are by no means perfect -- the frequency and severity of misdiagnosis are terrifying -- and human doctors are severely limited in dealing with a human's complicated medical history. Understanding every drug and every drug's interaction with every other drug is beyond the scope of human knowability.</p><p>Especially when there are research robots whose whole job it is to test 1,000s of new drugs at a time.</p><p>Human doctors can only improve through their own experiences. Doctor bots can learn from the experiences of every doctor bot. Can read the latest in medical research and keep track of everything that happens to all his patients world-wide and make correlations that would be impossible to find otherwise.</p><p>Not all doctors will go away, but when doctor bots are comparable to humans and they're only as far away as your phone -- the need for general doctors will be less.</p><p>So professionals, white-collar workers and low-skill workers all have something to worry about.</p><p>But perhaps you're still not worried because you're a special creative snowflakes. Well guess what? You're not that special.</p>");
            break;
        case "creala":
            cgpvideo.currentTime = 685;
            updateVideoDescription("<p>Creative Labor</p><p>Creativity may feel like magic, but it isn't. The brain is a complicated machine -- perhaps the most complicated machine in the whole universe -- but that hasn't stopped us from trying to simulate it.</p><p>There is this notion that just as mechanical muscles allowed us to move into thinking jobs that mechanical minds will allow us all to move into creative work. But even if we assume the human mind is magically creative -- it's not, but just for the sake of argument -- artistic creativity isn't what the majority of jobs depend on. The number of writers and poets and directors and actors and artist who actually make a living doing their work is a tiny, tiny portion of the labor force. And given that these are professions that are dependent on popularity they will always be a small part of the population.</p><p>There is no such thing as a poem and painting based economy.</p><p>Oh, by the way, this music in the background that your listening to? It was written by a bot. Her name is Emily Howel and she can write an infinite amount of new music all day for free. And people can't tell the difference between her and human composers when put to a blind test.</p><p>Talking about artificial creativity gets weird fast -- what does that even mean? But it's nonetheless a developing field.</p><p>People used to think that playing chess was a uniquely creative human skill that machines could never do right up until they beat the best of us. And so it goes for all human talent.</p>");
            break;
        case "conc":
            cgpvideo.currentTime = 765;
            updateVideoDescription("<p>Conclusion</p><p>Right: this might have been a lot to take in, and you might want to reject it -- it's easy to be cynical of the endless, and idiotic, predictions of futures that never are. So that's why it's important to emphasize again this stuff isn't science fiction. The robots are here right now. There is a terrifying amount of working automation in labs and wear houses that is proof of concept.</p><p>We have been through economic revolutions before, but the robot revolution is different.</p><p>Horses aren't unemployed now because they got lazy as a species, they&rsquo;re unemployable. There's little work a horse can do that do that pays for its housing and hay.</p><p>And many bright, perfectly capable humans will find themselves the new horse: unemployable through no fault of their own.</p><p>But if you still think new jobs will save us: here is one final point to consider. The US census in 1776 tracked only a few kinds of jobs. Now there are hundreds of kinds of jobs, but the new ones are not a significant part of the labor force.</p><p>Here's the list of jobs ranked by the number of people that perform them - it's a sobering list with the transportation industry at the top. Going down the list all this work existed in some form a hundred years ago and almost all of them are targets for automation. Only when we get to number 33 on the list is there finally something new.</p><p>Don't that every barista and officer worker lose their job before things are a problem. The unemployment rate during the great depression was 25%.</p><p>This list above is 45% of the workforce. Just what we've talked about today, the stuff that already works, can push us over that number pretty soon. And given that even our modern technological wonderland new kinds of work are not a significant portion of the economy, this is a big problem.</p><p>This video isn't about how automation is bad -- rather that automation is inevitable. It's a tool to produce abundance for little effort. We need to start thinking now about what to do when large sections of the population are unemployable -- through no fault of their own. What to do in a future where, for most jobs, humans need not apply.</p>");
            break;
        default:
            break;
    }
}

function playPause() {
    if (cgpvideo.paused)
        cgpvideo.play();
    else
        cgpvideo.pause();
}

function stop() {
    if (!(cgpvideo.paused))
        cgpvideo.pause();
    cgpvideo.currentTime = 0;
}

function subtitles() {
    var trackMode = video.textTracks[0].mode;
    video.textTracks[0].mode = (trackMode == 'showing') ? 'disabled' : 'showing';
}

function fullscreen() {
    cgpvideo.webkitEnterFullscreen();
}

function makeBig() {
    cgpvideo.width = 1280;
    cgpvideo.height = 720;
    document.getElementById("video").style.right = "10px";
}

function makeSmall() {
    cgpvideo.width = 640;
    cgpvideo.height = 360;
    document.getElementById("video").style.right = "300px";
}

window.onkeyup = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 32) {
        playPause();
    }
};

function updateVideoDescription(p)
{
    document.getElementById("videoDescription").innerHTML = "<p>"+p+"</p>";
}
