import { Link } from "react-router-dom"
import AbouSection from "./AbouSection"

const About = () => {
  return (
	<div>
				<p>Hello I am About page!!!!!!!!!!!!!!!!</p>
				<AbouSection/>
				<Link to={'/'}>Go To Home page!</Link>
			</div>
  )
}

export default About