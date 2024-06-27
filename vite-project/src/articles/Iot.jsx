
export const Iot = ()=>{
    return(
        <div id='iot'>
          <h1>
          Programming the physical world 
          </h1>

          <main>
             <p>
                Calculating things such as velocity, acceleration, temperature, humidity etc requires inputs from dedicated electronic devices.
                Devices such as an arduino are utilized to take in varying input data and compute which operations should be ran to give an output.
                An arduino is like a mini computer, that can be programmed dynamically. The most used programming language is c++ in the programming of an arduino.
             </p>
             <img id='arduino' src='/Screenshot_20240627_134114.jpg'/>
             <p>
             One person may be concerned about having to learn a new programming language after having learned JavaScript. In reality, most programming languages are similar to each other than they are different. Fundamentals such as functions, variables, loops and object are so similar you’d think there is no point in having different programming languages. The main differences occur in syntax, memory management and type of technology intended. Api’s, libraries and backend programming are still applicable regarding the programming of hardware like arduinos. 
             </p>

             <p>
             Meaning you could still do majority of the programming in a nodesjs server, and decide what should happen when certain input data is received. One person may also ask how a plain electronic device like an arduino can communicate with a server. This is made possible by other electronic devices called sensors or electronic modules.  
             </p>
             
          </main>

        </div>
    )
}
