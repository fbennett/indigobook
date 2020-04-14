import React, {useState, useEffect, useCallback} from "react";
import axios from 'axios';
import './fieldlist.css';
import displayer from "./displayer.js";
import Spinner from "react-spinner";

import './react-spinner.css';

export default (props) => {
    const [listItems, setListItems] = useState([]);
    const getItems = useCallback((data) => setListItems((listItems) => listItems = data), []);
    useEffect(() => {
        var func = async () => {
            const lst = props.test_id.split("-");
            const key = lst[1];
            var locator = "";
            if (lst.length === 4) {
                locator = atob(lst[3]);
            }
            var response = await axios({ url: props.urlStub + 'itemdata/' + key + '.json' });
            // Magic here to transform CSL key/val on item to array of label + value objects
            var displayItem = await displayer(response.data, locator);
            getItems(displayItem);
        }
        func();
    }, []);
    if (listItems.length) {
        return <table className="table-display">
                 <tbody>
            {
                listItems.map(info => {
                    return (
                        <tr key={info.label}>
                            <td className="label">{info.label}</td>
                            <td className="value">{info.value}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    } else {
        return <Spinner />
    }
    
}
