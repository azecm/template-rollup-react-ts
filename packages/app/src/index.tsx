import ReactDOM from "react-dom";
import React from "react";

import {first} from '@ts-react/util-1';
import {Header} from "@ts-react/util-2";
import {third} from "@ts-react/util-1/dist/second";



export const r = 22;

//console.log(third);
console.log(Header);


console.log(r, first, 55, third);

ReactDOM.render(
    <React.StrictMode>
        <Header title={"555"}/>
    </React.StrictMode>
    ,
    document.getElementById('root')
);