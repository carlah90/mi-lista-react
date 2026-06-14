function RememberCard({ pendientes}) {
    return (
        <div  className="remeber-card card">
             <h4>Tener Presente</h4>
              <p>Te quedan <strong>{pendientes}</strong> cosas pendientes</p>
             </div>
            
    );
}

export default RememberCard;