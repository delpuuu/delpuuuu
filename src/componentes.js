import React from 'react'
import item from './lista'
import ListaMiembros from './lista';

function Grid(){
    return(
    <div class="cajas">
        <div class="c1">
            <h1>cabercera</h1>

        </div>
        <div class="c2">
            <h1>MENU</h1>
        </div>
        <div class="c3">
            <h1>contenido</h1> 
            <ListaMiembros/>
        </div>
        <div class="c4">
            <h1>barra lateral</h1>
        </div>
        <div class='c5'>
            <h1>footer</h1>
        </div>
    </div>
)

}
export default Grid;
