import "../App.css"
import { useState } from 'react'

const spreadKeyAndVal = (data: Record<string, string>) => [...Object.keys(data), ...Object.values(data)];
const randomize = (arr: string[]) => arr.sort(
    () => Math.random() - 0.5
)

const CountryCapitalGame = ({ data }: { data: Record<string, string> }) => {
    const [countryCapitalArray, setCountryCapitalArray] = useState<string[]>(
        randomize(spreadKeyAndVal(data))
    );

    // state to track the clicked item
    const [clicked, setClicked] = useState<string>("");
    // state to track the wrong answer
    const [trackError, setTrackError] = useState<string[]>();

    const buttonClickHandler = (item: string) => {

        // check if the user already clicked on a button
        if (clicked.length) {

            if (data[item] == clicked || data[clicked] == item) {
                // remove the country and the capital if the answer is true
                setCountryCapitalArray(
                    countryCapitalArray.filter(
                        (filterItem) =>
                            !(filterItem == item || filterItem == clicked)
                    )
                );
                // set clicked to empty string
                setClicked(() => "");
            } else {
                // oh nah ! wrong answer put the value in the array
                setTrackError(() => [clicked, item]);
                // set clicked to empty string
                setClicked(() => "");
            }
            // the first click or a click after a wrong answer
        } else {
            setTrackError(() => []);
            setClicked(() => item);
        }
    }

    if (!countryCapitalArray.length) return <div>Congratulation</div>;

    return (
        <div>
            {countryCapitalArray.map((item) => {
                const wrongAnswer = trackError?.includes(item);
                return (
                    <button
                        className={`${clicked == item ? "blue " : ""} ${wrongAnswer ? "red" : ""}`}
                        onClick={() => buttonClickHandler(item)}
                        key={item}>
                        {item}
                    </button>
                );
            })}
        </div>
    );
}

export default CountryCapitalGame