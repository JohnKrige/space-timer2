import React from 'react';

import Accordion from '../components/Accordion/Accordion';

export default {
    title: 'components / Accordion',
    component: Accordion,
};

const content1 = (
    <div>
        <p>
            This aftershave made women want me, but it also made me impotent! You're growing up
            fast, fast, Morty. You're going into a great big thorn straight into my ass.
            Rikitikitavi, bitch! Oh I
        </p>
        <br />
        <p>
            say good sir, oh harumph, ohh a bope-a-dope-o-bobo. Lick, lick, lick my balls! Wait, the
            whole time? I was screaming for help, and you stayed on the roof? There is no god, in
            your face! One dot muthafucka! And that's why I always say 'Shumshumschilpiddydah!'
        </p>
    </div>
);

const title1 = (
    <div className="flex items-center">
        <p className="">I am fancy, I have a line</p>
        <hr className="flex-grow ml-4 border-t border-text-grey border-opacity-50" />
    </div>
);

const content2 = (
    <div>
        <p>
            This aftershave made women want me, but it also made me impotent! You're growing up
            fast, fast, Morty. You're going into a great big thorn straight into my ass.
            Rikitikitavi, bitch! Oh I
        </p>
        <br />
        <p>
            say good sir, oh harumph, ohh a bope-a-dope-o-bobo. Lick, lick, lick my balls! Wait, the
            whole time? I was screaming for help, and you stayed on the roof? There is no god, in
            your face! One dot muthafucka! And that's why I always say 'Shumshumschilpiddydah!'
        </p>
        <br />
        <p>
            This is it, Morty! It's full circle from the pilot! Full circle! … Oh, I guess we, uh… I
            guess we both just had to take a shit. Oh, that's Million Ants. I can't see the ants
            from over here, I just assumed that was um.. Turd Man, Wiggly Turd Man. You little
            monster! I thought you were masturbating! Cause he roped me into this!
        </p>
        <br />
        <p>
            This is it, Morty! It's full circle from the pilot! Full circle! … Oh, I guess we, uh… I
            guess we both just had to take a shit. Oh, that's Million Ants. I can't see the ants
            from over here, I just assumed that was um.. Turd Man, Wiggly Turd Man. You little
            monster! I thought you were masturbating! Cause he roped me into this!
        </p>
        <br />
        <p>
            Alan Rails, ladies and gentlemen. After his parents' tragic death in a railroad
            accident, he gained the power to summon ghost trains. It's not all bad though, they were
            spared having to see their grown son wear a whistle. Countries known for their sexually
            aggressive men. Shadow Jacker, you haven't come out of your masturbation cave in eons!
            You know what shy pooping is, Rick?
        </p>
        <br />
        <p>
            I'll tell you how I feel about school, Jerry. It's a waste of time. Bunch of people
            runnin' around bumpin' into each other, got a guy up front says, '2 + 2,' and the people
            in the back say, '4.' Then the bell rings and they give you a carton of milk and a piece
            of paper that says you can go take a dump or somethin'. I mean, it's not a place for
            smart people, Jerry. I know that's not a popular opinion, but that's my two cents on the
            issue. You created a day care for my dad? Did you just come into the cafeteria through a
            portal? You don't have to try to impress me Morty.
        </p>
        <br />
        <p>
            Morty, please. Step back. That vat is full of acid. It will melt you completely, leaving
            only your bones. Aww, gee, you got me there, Rick. This isn't Game of Thrones, Morty.
            Must… continue… moving… in… ways… that… lead… to… dying… with… you.
        </p>
        <br />
        <p>
            This isn't Game of Thrones, Morty. I don't get it, and I don't need to. 5 more minute of
            this and I'm going to get mad! We're gonna nine eleven this bitch unless Morty gets
            better math grades!
        </p>
        <br />
        <p>
            Well, if it's God power that gets you going, light some candles and put on the Billy
            Ocean, 'cause Moses is home, and he's ready to burn some bush! Morty! The principal and
            I have discussed it, a-a-and we're both insecure enough to agree to a three-way! You're
            not gonna believe this, because it usually never happens, but I made a mistake. If I've
            learned one thing, it's that before you get anywhere in life, you gotta stop listening
            to yourself.
        </p>
        <br />
        <p>
            They're not infinite universes left in sync with the show. Why don't you ask the
            smartest people in the universe, Jerry? Oh yeah you can't. They blew up. Allahu blehhhh
            Akbar! God-damn!
        </p>
    </div>
);

const content3 = (
    <div>
        <p>
            Well, if it's God power that gets you going, light some candles and put on the Billy
            Ocean, 'cause Moses is home, and he's ready to burn some bush! Morty! The principal and
            I have discussed it, a-a-and we're both insecure enough to agree to a three-way! You're
            not gonna believe this, because it usually never happens, but I made a mistake. If I've
            learned one thing, it's that before you get anywhere in life, you gotta stop listening
            to yourself.
        </p>
        <br />
        <p>
            They're not infinite universes left in sync with the show. Why don't you ask the
            smartest people in the universe, Jerry? Oh yeah you can't. They blew up. Allahu blehhhh
            Akbar! God-damn!
        </p>
    </div>
);

export const SampleAccordion = () => {
    return (
        <div className="m-10 px-8 py-8 border border-white border-opacity-50">
            <h2 className="mb-8">Some or other component</h2>
            <Accordion title={title1}>{content1}</Accordion>
            <Accordion title="I have a shitload of content">{content2}</Accordion>
            <Accordion title="1 second transition time" duration="1000">
                {content3}
            </Accordion>

            <div>
                <p className="mb-2">No props - only defaults</p>
                <Accordion />
            </div>
        </div>
    );
};
