
const CardList =(props)=> {
        console.log('render from props')
        const {monsters} = props;
        
        return (
            <div className="card-list">
                {monsters.map((rel,key)=>{
                    const {name,email,id} = rel;
                    return (
                        <div className='card-container' key={id}>
                            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt='' /> 
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </div>
        )
}
 export default CardList;