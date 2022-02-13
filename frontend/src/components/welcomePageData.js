import Solar from "../Images/Solar.jpg"
import Shuttle from "../Images/Shuttle.jpg"
import Mars from "../Images/Mars.png"

export default function welcomePageData ()
 {return [
     {image: Solar, title: "The Solar System", link:"/info/solar"},
     {image: Shuttle, title: "The Space Shuttle", link:"/info/shuttle"},
     {image: Mars, title: "Mars", link:"/info/mars"}
]};