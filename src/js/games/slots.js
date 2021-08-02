export default function slots() {
    return `
    <h1>Slots</h1>
    <ol>
         ${() => {
             let slorts = "";
             for(let i=0; i<50; i++){
                slorts+="slorts ";
             }
            return `
                <li>
                    ${slorts}
                </li>

          `
         }}   
    `
}
