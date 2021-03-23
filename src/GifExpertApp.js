import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {


    const [categorias, setCategoria] = useState(["Pokemon" ]);

    return ( 
        <>
            <h2>GifExpertApp</h2>
            <hr/>

            <AddCategory 
                setCategoria= {setCategoria}
                categorias = {categorias}
            />

            <ol>
                {
                    categorias.map(categoria => (
                    <GifGrid 
                    key = {categoria}
                    categoria={categoria}
                    />
                ))
                }
            </ol>

        </>
     );
}
 
export default GifExpertApp;