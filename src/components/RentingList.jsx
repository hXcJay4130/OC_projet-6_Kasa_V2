import { flatList } from '../datas/logements'
// import getData from '../datas/api'
import FlatCard from './FlatCard'
import '../styles/rentingList.scss'

function RentingList() {

	// const flatList = getData('../datas/logements.json'); 
	return (
		<section className="rentinglist">
			<ul className="rentinglist__list">
				{flatList.map(({ id, cover, title }) => (
					<FlatCard
						id= {id}
						key={id}
						cover={cover}
						title={title}
					/>
				))}
			</ul>
		</section>
	)
}
export default RentingList



// import { useEffect } from "react"
// import { useState } from "react"

// function RentingList() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Remarque : le tableau vide de dépendances [] indique
//   // que useEffect ne s’exécutera qu’une fois, un peu comme
//   // componentDidMount()
//   useEffect(() => {
//     fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json')
//     // fetch('../../datas/about.json')
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Remarque : il faut gérer les erreurs ici plutôt que dans
//         // un bloc catch() afin que nous n’avalions pas les exceptions
//         // dues à de véritables bugs dans les composants.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return (<div>Erreur : {error.message}</div>);
//   } else if (!isLoaded) {
//     return <div>Chargement...</div>;
//   } else {
//     return (
//       <div>
//         <ul>
//           {items.map(item => (
//             <li key={item.id}>
//               Propriétaire : {item.host.name}  Appart : {item.title}
//             </li>
            
//           ))}
//         </ul>
//     </div>
//     );
//   }
// }

// export default RentingList