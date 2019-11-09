export default [{
        crdNormal: ` margin: 10px;
    padding: 25px 25px;
    width: 20vw;
    max-width: 320px;
    min-width: 270px;
    height: 50vh;
    max-height: 500px;
    min-height: 400px;
    border-radius: 20px;
    box-shadow: 2px 2px 20px var(--shadow);
    color: white;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    overflow: hidden;
    position: relative;
    &:hover {
        transform: scale(1.05);
        box-shadow: 3px 3px 20px var(--shadow);
        .crd__more {
            bottom: -2rem;
        }
    }
    &:hover .more {
        bottom: -2rem;
    }
    @media screen and (max-width:765px) {
        width: 90vw;
        height: 15vh;
        max-height: unset;
        min-height: unset;
        min-width: unset;
        max-width: unset;
        flex-direction: row;
        justify-content: space-evenly;
        padding: 2px 2px;
    }
    `,
        crd__location: ` @media screen and (max-width:765px) {
        max-width: 30%;
        h1 {
            font-size: 6vmin;
        }
        h2 {
            font-size: 4vmin;
        }
    }
    `,
        icon: ` img {
        max-width: 20vw;
        width: auto;
    }
    `,
        mobCardLink: ` text-decoration: none;
    color: white;
    `,
        crd__more: ` position: relative;
    margin-top: -8vh;
    transition: all 0.25s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    text-decoration: none;
    bottom: -6rem;
    color: white;
    font-size: 1.5rem;
    i {
        position: relative;
        top: 0.3rem;
        font-size: 1.8rem;
    }
    @media screen and (max-width:765px) {
        display: none;
    }
}

`,
        crd__temp: ` font-size: 4vmin;
@media screen and (max-width:765px) {
    h2 {
        font-size: 5vmin;
    }
    h4 {
        font-size: 3vmin;
    }
}

`,
        crd__condition: ` font-size: 1.4rem;
text-transform: uppercase;
`,
        crd__highLow: ` font-size: 2.8vmin;
width: 90%;
display: -webkit-flex;
flex-direction: row;
justify-content: space-between;
@media screen and (max-width:765px) {
    display: none;
}

`,
        max: ` color: red;
text-transform: uppercase;
text-shadow: 0.5px 0.5px 2px rgba(255, 255, 255, 0.185);
`,
        min: ` color: blue;
text-transform: uppercase;`
    },
    {
        crdNormal: ` margin: 10px;
        padding: 6px;
    border-radius: 20px;
    box-shadow: 2px 2px 20px var(--shadow);
    color: white;
    display: -webkit-flex;
    align-items: center;
    text-align: center;
    position: relative;
    width: 35vw;
    min-width: 350px;
    max-width: 550px;
    height: 15vh;
    max-height: 150px
    flex-direction: row;
    justify-content: space-evenly;
    transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);

     @media screen and (max-width:765px) {
        width: 75vw;
        height: 15vh;
        max-height: unset;
        min-height: unset;
        min-width: unset;
        max-width: unset;
        flex-direction: row;
        justify-content: space-around;
        padding: 8px 8px;
    }

    `,
        crd__location: `
        max-width: 30%;
        h1 {
            font-size: 4vmin;
        }
        h2 {
            font-size: 2vmin;
        }
        @media screen and (max-width:765px) {
        max-width: 30%;
        h1 {
            font-size: 5vmin;
        }
        h2 {
            font-size: 4vmin;
        }}
    
    `,
        icon: ` 
        img {
            width: 70%;
            max-width: 10vw;
            min-width: 60px;
            height: auto;
    }
    `,
        mobCardLink: ` text-decoration: none;
    color: white;
    `,
        crd__more: `display:none;`,
        crd__temp: `
    h2 {
        font-size: 5vmin;
    }
`,
        crd__condition: ` font-size: 0.9rem;
text-transform: uppercase;
`,
        crd__highLow: `
    display: none;

`,
        max: ` color: red;
text-transform: uppercase;
text-shadow: 0.5px 0.5px 2px rgba(255, 255, 255, 0.185);
`,
        min: ` color: blue;
text-transform: uppercase;`
    }
]