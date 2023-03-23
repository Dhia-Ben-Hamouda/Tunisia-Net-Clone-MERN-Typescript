import React from "react";
import { Checkbox, Slider } from "@mui/material";
import { FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

interface EventTarget {
    name: string
}

export default function ({ params, setParams }: any) {
    const [priceRange, setPriceRange] = useState<any>([0, 2000]);

    function handleFilters(e: any) {
        const name = e.target.name;
        const value = e.target.value;

        if (e.target.checked) {
            let arr = params[name];
            arr.push(value);
            setParams({ ...params, [name]: arr });
        }
        else {
            let arr = params[name];
            arr = arr.filter((item: any) => item !== value);
            setParams({ ...params, [name]: arr });
        }
    }

    return (
        <>
            <div className="desktop-filters">
                <div className="header">
                    Filter By
                </div>
                <div className="wrapper">
                    <div className="price">
                        <h1>Price</h1>
                        <div className="slider">
                            <Slider
                                className="s"
                                step={200}
                                style={{ color: "#777", transform: "scale(.9)", marginBottom: ".75rem" }}
                                min={0}
                                max={2000}
                                value={priceRange}
                                valueLabelDisplay="auto"
                                onChange={(e, newValue) => { setPriceRange(newValue) }}
                                onChangeCommitted={(e, newValue) => { setParams({ ...params, price: newValue }) }}
                            />
                        </div>
                        <div className="price-inputs">
                            <input
                                className="min"
                                value={priceRange[0]}
                                onChange={(e) => { setPriceRange([e.target.value, priceRange[1]]) }}
                            />
                            <input
                                className="max"
                                value={priceRange[1]}
                                onChange={(e) => { setPriceRange([priceRange[0], e.target.value]) }}
                            />
                        </div>
                    </div>
                    <div className="brand">
                        <h1>Brand</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="brand" value="HP" onChange={handleFilters} />}
                                label="HP"
                            />
                            <FormControlLabel
                                control={<Checkbox name="brand" value="LG" onChange={handleFilters} />}
                                label="LG"
                            />
                            <FormControlLabel
                                control={<Checkbox name="brand" value="Asus" onChange={handleFilters} />}
                                label="Asus"
                            />
                            <FormControlLabel
                                control={<Checkbox name="brand" value="Redragon" onChange={handleFilters} />}
                                label="Redragon"
                            />
                            <FormControlLabel
                                control={<Checkbox name="brand" value="Dell" onChange={handleFilters} />}
                                label="Dell"
                            />
                        </FormGroup>
                    </div>
                    <div className="size">
                        <h1>Size</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="size" value="21" onChange={handleFilters} />}
                                label="21'"
                            />
                            <FormControlLabel
                                control={<Checkbox name="size" value="24" onChange={handleFilters} />}
                                label="24'"
                            />
                            <FormControlLabel
                                control={<Checkbox name="size" value="27" onChange={handleFilters} />}
                                label="27'"
                            />
                            <FormControlLabel
                                control={<Checkbox name="size" value="32" onChange={handleFilters} />}
                                label="32'"
                            />
                        </FormGroup>
                    </div>
                    <div className="resolution">
                        <h1>Resolution</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="resolution" value="HD" onChange={handleFilters} />}
                                label="HD"
                            />
                            <FormControlLabel
                                control={<Checkbox name="resolution" value="Full HD" onChange={handleFilters} />}
                                label="Full HD"
                            />
                            <FormControlLabel
                                control={<Checkbox name="resolution" value="QHD" onChange={handleFilters} />}
                                label="QHD"
                            />
                            <FormControlLabel
                                control={<Checkbox name="resolution" value="4K" onChange={handleFilters} />}
                                label="4K"
                            />
                        </FormGroup>
                    </div>

                </div>
            </div>
        </>
    )
}