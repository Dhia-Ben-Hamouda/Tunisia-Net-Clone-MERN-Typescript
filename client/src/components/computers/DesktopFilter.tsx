import React from "react";
import { Checkbox, Slider } from "@mui/material";
import { FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

export default function ({ params, setParams }: any) {
    const [priceRange, setPriceRange] = useState<any>([0, 4000]);

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
                                max={4000}
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
                                control={<Checkbox name="brand" value="Dell" onChange={handleFilters} />}
                                label="Dell"
                            />
                        </FormGroup>
                    </div>
                    <div className="procesor">
                        <h1>Procesor</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="procesor" value="AMDRyzen5" onChange={handleFilters} />}
                                label="AMD Ryzen 5"
                            />
                            <FormControlLabel
                                control={<Checkbox name="procesor" value="IntelCorei5" onChange={handleFilters} />}
                                label="Intel Core i5"
                            />
                            <FormControlLabel
                                control={<Checkbox name="procesor" value="AMDRyzen7" onChange={handleFilters} />}
                                label="AMD Ryzen 7"
                            />
                            <FormControlLabel
                                control={<Checkbox name="procesor" value="IntelCorei7" onChange={handleFilters} />}
                                label="Intel Core i7"
                            />
                        </FormGroup>
                    </div>
                    <div className="memory">
                        <h1>Memory</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="memory" value="8gb" onChange={handleFilters} />}
                                label="8 gb"
                            />
                            <FormControlLabel
                                control={<Checkbox name="memory" value="16gb" onChange={handleFilters} />}
                                label="16 gb"
                            />
                            <FormControlLabel
                                control={<Checkbox name="memory" value="24gb" onChange={handleFilters} />}
                                label="24 gb"
                            />
                            <FormControlLabel
                                control={<Checkbox name="memory" value="32gb" onChange={handleFilters} />}
                                label="32 gb"
                            />
                        </FormGroup>
                    </div>
                    <div className="drive">
                        <h1>Drive</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="drive" value="1TB256GBSSD" onChange={handleFilters} />}
                                label="1TB + 256GB SSD"
                            />
                            <FormControlLabel
                                control={<Checkbox name="drive" value="1TBSSD" onChange={handleFilters} />}
                                label="1TB SSD"
                            />
                            <FormControlLabel
                                control={<Checkbox name="drive" value="512GBSSD" onChange={handleFilters} />}
                                label="512GB SSD"
                            />
                        </FormGroup>
                    </div>
                    <div className="graphicsCard">
                        <h1>Graphics Card</h1>
                        <FormGroup className="group">
                            <FormControlLabel
                                control={<Checkbox name="graphicsCard" value="gtx1650" onChange={handleFilters} />}
                                label="GTX 1650"
                            />
                            <FormControlLabel
                                control={<Checkbox name="graphicsCard" value="rtx3050" onChange={handleFilters} />}
                                label="RTX 3050"
                            />
                            <FormControlLabel
                                control={<Checkbox name="graphicsCard" value="rtx3050ti" onChange={handleFilters} />}
                                label="RTX 3050 ti"
                            />
                        </FormGroup>
                    </div>
                </div>
            </div>
        </>
    )
}