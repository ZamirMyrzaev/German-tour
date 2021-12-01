import React, { useContext, useState } from 'react';
import './FilterBrand.css'
import { FormControlLabel, Grid, Paper, Radio, FormControl, RadioGroup, FormLabel, Slider, Box } from "@mui/material"
import { productContext } from '../../ProductContext';
import history from '../helpers';



const FilterBrand = () => {
    const { getProducts } = useContext(productContext)
    const [ price, setPrice ] = useState(getBrands())

    function getBrands(){
        let search = new URLSearchParams(history.location.search)
        return search.get('price')
    }


    function handleChangeBrands(e){
        if(e.target.value === 'all'){
            history.push(`${history.location.pathname.replace('price')}`)
            getProducts()
            return
        }
        let search = new URLSearchParams(history.location.search)
        search.set('price', e.target.value)
        history.push(`${history.location.pathname}?${search.toString()}`)
        getProducts(search.toString())
        setPrice(e.target.value)
    }



    return (
   
             <div className="filter_brand">
                  <Grid item md={4}>
                       <Paper className="grid" style={{backgroundColor: "#f1f4fa"}}>
                            <FormControl className="menu_dis" component="fieldset">
                                <FormLabel className="bg-dark text-black" component="legend">Price</FormLabel>
                                    <RadioGroup className="price_block" value={price} onChange={handleChangeBrands} aria-label="memory" name="memory1">
                                        <FormControlLabel className="radio_input" value="3000" control={<Radio />} label="3000" />
                                        <FormControlLabel value="5000" control={<Radio />} label="5000" />
                                        <FormControlLabel value="4000" control={<Radio />} label="4000" />
                                        <FormControlLabel value="all" control={<Radio />} label="All" />
                                    </RadioGroup>
                            </FormControl>
                        </Paper>
                    </Grid>
            </div>
     
    );
};

export default FilterBrand;