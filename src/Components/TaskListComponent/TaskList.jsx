import React from 'react'
import { useState } from 'react'

function TaskList(props) {

    const [input, setInput] = useState("");
    const handleInput = (e) => { setInput(e.target.value) };
    
   
    return (
        <div className='mainList'>
            <h1>Tareas creadas</h1>

            <ul id="lista-tareas">
                {props.lista.map((item) =>
                    <><div className='liContainer'><li
                        className={item.clase}
                        value={item}>{item.nombre}</li>
                        <button name='btnEdit' id={item.id} onClick={()=>props.show(item.id)}
                            className='btnEdit'>Editar</button>
                        <button className='btnBorrar' onClick={() => props.delete(item)}>Borrar</button>
                    </div>
                        <div name='divEdit' id={item.id} className={ props.act == item.id? 'inputActive inputContainer' : 'inputInactive inputContainer'}>
                            < input onChange={handleInput} name="inputEdit" id={`${item.id}`}  className="inputEdit" type="text" minLength={4} maxLength={25} />
                            <button onClick={() => props.edit(input, item)} className='btnGuardar'>Guardar</button>
                        </div ></>
                )}
            </ul >
        </div>
    )
}
//  
export default TaskList