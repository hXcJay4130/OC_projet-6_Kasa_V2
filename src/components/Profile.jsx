import RatingScale from './RatingScale'
import '../styles/flatForm.scss'

function Profile({flatObject}) {
    let tagsArray = flatObject.tags
    let nameArray = flatObject.host.name
    nameArray = nameArray.split(' ')

    return (
        <section className="flatFormSection">
                <div>
                    <h1>{flatObject.title}</h1>
                    <p>{flatObject.location}</p>
                    <ul className="tagsList">
                        {tagsArray.map((tag) => (
                            <li key={tag} className="tag">{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='profil'>
                    <div className="profil__name-pix">
                        <div className='profil__name'>
                            <p>{nameArray[0]}</p>
                            <p>{nameArray[1]}</p>
                        </div>
                        <img src={flatObject.host.picture} alt="" className='profil__photo'/>
                    </div>
                    <div className="profil__rating">
                        <RatingScale careType='activeStar' scaleValue={flatObject.rating} />
                        <RatingScale careType='inactiveStar' scaleValue={5-(flatObject.rating)} />
                    </div>
                </div>
            </section>
    )
}

export default Profile