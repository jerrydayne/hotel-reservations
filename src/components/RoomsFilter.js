import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from '../components/Title';

//getting all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}; 

function RoomsFilter({ rooms }) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    //get unique types
    let types = getUnique(rooms, "type");
    // add all
    types = ['all', ...types];
    // map to jsx
    types = types.map((item, index) => {
        return (<option value={item} key={index}>{item}</option>);
    });
    return (
        <section className="filter-container">
            <Title title="serach rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control"
                        onChange={handleChange}
                    >{types}</select>
                </div>
                {/* end of select type*/}
            </form>
        </section>
    )
}

export default RoomsFilter
