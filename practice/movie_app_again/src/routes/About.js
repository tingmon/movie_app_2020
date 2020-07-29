import React from 'react';

class Profile extends React.Component {    
    render(){
        const info = ['Korean Name: Taekmin Jeong', 'English Name: Thomas',
                        'Baptismal Name: Iuliano'];
        return(
            <ul className="names">{info.map((name, index) => <li key={index} className="name">{name}</li>)}</ul>
        )
    }
}

export default Profile;