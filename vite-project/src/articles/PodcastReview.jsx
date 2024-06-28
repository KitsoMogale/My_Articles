

export const PodcastReview = ()=>{
    return (
        <>
           <h1>Coding in JavaScript: Data Management Over Creativity</h1>

           <p>
           JavaScript is one of the most widely-used programming languages in the world, particularly for web development. It’s often seen as a creative tool, enabling developers to build dynamic and interactive user interfaces. However, a deeper look into the day-to-day work of JavaScript developers reveals that much of their effort is focused on data management rather than pure creativity.This is one of the concepts that ran through my mind as I was building a podcast app with reactJS.
           <br/> This article explores how and why data management plays a crucial role in JavaScript coding.
           </p>
           <p>
            When we take a glance at the biggest software companies in the world, their end software products seem to be very basic , with no touch of extra creative interactivity. One of the most visited websites, YouTube, <br/>
            <div className="youTube">
               <p className='ptube'>This layout and design is very basic. Infact any junior developer can produce this layout and design.</p>
               <img className='youtube' src='/Screenshot (120).png'/>
            </div>
           
            Discord is a big global platform, used by millions per day,but again , if we take a look at their layout and design , there is nothing spectacular.
            <div className='youTube'>
                <img className="youtube" src='/Screenshot (119).png'/>
                <p className='ptube'>A very foundational layout, no animations, no attempts to impress the user whatsoever. </p>
            </div>
           </p>

           <h4>The reason for these companies to focus less on design and creativity is due to the overload of having to manage data across their platform.The skill to produce a creativly interactive platform is there but a big problem arises as the data increases and managing the a consistent user experience becomes congested.Thus these top companies focus on keeping a simple design for the pre-advantage of managing data flow as error-free as possible.
            <br/>
            
           </h4>

        </>
    )
}
