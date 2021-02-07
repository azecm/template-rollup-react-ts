import {useCallback} from "react";
import styled from "styled-components";

const HeaderH2 = styled.h2``;

const {hostname} = window.location;

export function Header({title}:{title: string}){

    const onClick = useCallback(()=>{
        const t = title;

    }, [title]);

    return <HeaderH2>{title}</HeaderH2>;
}
