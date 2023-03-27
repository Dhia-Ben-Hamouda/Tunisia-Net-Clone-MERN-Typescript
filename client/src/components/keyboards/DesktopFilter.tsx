import React from "react";
import { Checkbox, Slider } from "@mui/material";
import { FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

export default function ({ params, setParams }: any) {
    const [priceRange, setPriceRange] = useState<any>([0, 500]);

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
                                step={25}
                                style={{ color: "#777", transform: "scale(.9)", marginBottom: ".75rem" }}
                                min={0}
                                max={300}
                                value={priceRange}
                                valueLabelDisplay="auto"
                                onChange={(e, newValue) => { setPriceRange(newValue) }}
                                onChangeCommitted={(e, newValue) => { setParams({ ...params, price: newValue }) }}
                            />
                        </div>
                        <div className="price-inputs">
                            <input
                                className="min"
                                value={priceRange[0] + " DT"}
                                disabled
                            />
                            <input
                                className="max"
                                value={priceRange[1] + " DT"}
                                disabled
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
                    <div className="mechanical">
                        <h1>Mechanical</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="mechanical" value="Yes" onChange={handleFilters} />}
                                label="Yes"
                            />
                            <FormControlLabel
                                control={<Checkbox name="mechanical" value="No" onChange={handleFilters} />}
                                label="No"
                            />
                        </FormGroup>
                    </div>
                    <div className="wireless">
                        <h1>Wireless</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="wireless" value="Yes" onChange={handleFilters} />}
                                label="Yes"
                            />
                            <FormControlLabel
                                control={<Checkbox name="wireless" value="No" onChange={handleFilters} />}
                                label="No"
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </>
    )
}