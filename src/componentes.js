import React from 'react'
import item from './lista'
import ListaMiembros from './lista';
import Title from './title';
import Card from './bootstrap/card';
import Tarjeta from './bootstrap/card';
import BasicExample from './bootstrap/navbar'

function Grid(){
    return(
    <div class="cajas">
        <div class="c1">
            <Title title="Titulo"/>
        </div>

        <div class="c2">
           <BasicExample/>
        </div>
        <div class="c3">
            <h1>contenido</h1> 
            <ListaMiembros/>
        </div>
        <div class="c4">
           <Card/>
        </div>
        <div class='c5'>
            <h1>footer</h1>
        </div>
    </div>
)

}
export default Grid;
