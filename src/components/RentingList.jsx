import { useEffect, useState } from "react"
import FlatCard from './FlatCard'
import '../styles/rentingList.scss'

function RentingList() {

	const [flatList, setFlats] = useState([]);

	useEffect(() => {
		fetch('/src/datas/logements.json')
			.then(res => res.json())
			.then(result => setFlats(result))
		}, [])
	
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