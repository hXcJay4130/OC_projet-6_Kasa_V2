import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Slideshow from '../../components/Slideshow'
import Collapse from '../../components/Collapse'
import Profile from '../../components/Profile'
import '../../styles/flatForm.scss'


function FlatForm() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [flats, setFlats] = useState([]);
  const navigate = useNavigate();
  const {flatNumber} = useParams()
  // Remarque : le tableau vide de dépendances [] indique que useEffect ne s’exécutera qu’une fois
  useEffect(() => {
    fetch('/src/datas/logements.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          // setFlats(result);
          setFlats(result.filter(item => item.id === flatNumber));
          // if (flats.length == 0) {
          //   setError(error);
          // }
          // console.log(result);
        },
        // Il faut gérer les erreurs ici plutôt que dans un bloc catch() afin que nous n’avalions pas les exceptions dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [navigate])

  if (error) {
    navigate("/*");
    
  } else if (flats.length === 0) {
    navigate("/*");
  }
   else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    
    // const flatFiltered = flats.filter(item => item.id === flatNumber)
    // const flatData = flatFiltered[0]
    const flatData = flats[0]
 
    return (
      <main>
        <Slideshow flatImg={flatData.pictures} />
        <Profile flatObject={flatData} />
        <section className="flatFormSection">
          <div className="flatFormSection__left">
            <Collapse title="Description" content={flatData.description} collapseType="text" collapseClass="" />
          </div>
          <div className="flatFormSection__right">
            <Collapse title="Equipements" content={flatData.equipments} collapseType="list" collapseClass="" />
          </div>
        </section>
      </main>
    );
  }
}

export default FlatForm