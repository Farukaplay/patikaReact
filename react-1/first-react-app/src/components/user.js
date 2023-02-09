import PropTypes from "prop-types";

function User({name, surname, isLoggedIn, friends, age, adress}){

    if(!isLoggedIn){
        return <div>Giriş Yapılmadı</div>
    }

    return (
        <>
            <h1>
                {name} {surname} ({age})   
            </h1>
        
            {adress.title}

            {friends.map((friend) => {
               return <h1 key={friend.id}>{friend.name}</h1>
            })}
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    friends: PropTypes.array,
    adress: PropTypes.shape({
        title: PropTypes.string.isRequired,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "Anonymous",
    isLoggedIn: false
}

export default User