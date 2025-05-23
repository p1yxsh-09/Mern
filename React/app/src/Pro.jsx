export default function Pro({numSides=6}){
    const roll = Math.floor(Math.random() * numSides) + 1;

        return(
            <>
                    <p>{numSides}-sided die roll -{roll}</p>
            </>
        );
    }