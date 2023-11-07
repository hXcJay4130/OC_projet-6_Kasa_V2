import Wrapper from '../../components/Wrapper'
import Collapse from '../../components/Collapse'
import backgroundabout from '../../assets/background-about.png'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"

function About() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  // Remarque : le tableau vide de dépendances [] indique que useEffect ne s’exécutera qu’une fois
  useEffect(() => {
    fetch('src/datas/about.json')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          // console.log(result);
        },
        // Il faut gérer les erreurs ici plutôt que dans un bloc catch() afin que nous n’avalions pas les exceptions dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    // return (<div>Erreur : {error.message}</div>);3
    navigate("/*");
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <main>
        <Wrapper pixURL={backgroundabout} text="" />
       {items.map(({ title, content }) => (
					<Collapse key={title} title={title}	content={content} collapseClass="collapse about__" collapseType="text" />
				))}  
      </main>
    );
  }
}

export default About