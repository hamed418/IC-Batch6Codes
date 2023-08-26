

const Skills=(props)=>{
    return (
        <div className="skills">
           <h2>Skills of {props.name}:</h2>
           <ul>
            {props.Skillsar.map(items=>(
                <li>
                      {items}
                </li>
            ))}
            <h2>{props.demo?.a}</h2>
            </ul>
        </div>
    )
}

export default Skills