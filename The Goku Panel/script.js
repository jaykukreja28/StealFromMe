/*
What we wnat to do is ... to switch the active class
on clicking

You can check by doing it manually by 
changing class=active in html section
*/

/*Let's get all the panels in our javascript file*/
/*
There are different ways to select elements ...

documnet.getElementById or querySelectors



querySelector allows us to select anything paragraph , class , id 
h1 , other tags ... whatever.


Now the thing is we want a  panels with class of panels.
Now since there are more than one panel hence we will use
querySelectorAll so that it can fetch all panels.
If we just put querySelector it will select the first one.

Now what will happen is ...
Instad of selecting the elements directlyit puts all the elements
in what we called the nodelist , which is similar to the array.




*/
const panels = document.querySelectorAll('.panel')

// console.log(panels[0])
//Now  what I will do is I will take a high order array
//method ...forEach which takes in function as the parameter.


panels.forEach((panel) => {
    /*So we will take each panel and add an eventlistener
    AND i want to listen for a click 
    And when that click happens , I want to run a function , that adds to the panel a class of active.

    So we add a classlist that gives us a list of classes but we also have methods like add on this
    classList object, by which we can specifically add a class.
    */
    panel.addEventListener('click',() => {
            // console.log(2);
            //console.log(panel)

            //Now before we put active on the panel we have to remove active for other panels

            removeActiveClasses()
            panel.classList.add('active')

        })

})

/*
What we actually want is that we want an event listener
on each panel so that when we click on them somehing happens
*/


function removeActiveClasses(){
    //since there is more than one class we have to loop through and rmeove all active classes
    panels.forEach((panel) => {
        panel.classList.remove('active')
    }) 
}





