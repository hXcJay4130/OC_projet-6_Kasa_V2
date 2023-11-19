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
  
  useEffect(() => {
    fetch('/src/datas/logements.json')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          const tempFlat = result.filter(item => item.id === flatNumber);
          tempFlat.length!==0 ? (
            setFlats(result.filter(item => item.id === flatNumber))
          ) : (
            navigate("/*")
          );
        },
        // Il faut gérer les erreurs ici plutôt que dans un bloc catch() afin que nous n’avalions pas les exceptions dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
          navigate("/*");
        }
      )
  }, [navigate, flatNumber])

  if (error) {
    console.log('erreur');
    navigate("/*");
  }
  else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {

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