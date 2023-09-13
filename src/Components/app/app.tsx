import Button from "../UI_components/Button/Button";
import Label from "../UI_components/Label/Label";
import InputSingle from "../UI_components/InputField/InputSingle/InputSingle";
import InputBasic from "../UI_components/InputField/InputBasic/InputBasic";
import Select from "../UI_components/Dropdown/Dropdown";
import DropDown from "../UI_components/Dropdown/Dropdown";
import {PRIMARY_BLUE, PRIMARY_VIOLET, SECONDARY_YELLOW} from "../../Constants/Colors/Colors";
import SearchInput from "../UI_components/SearchInput/SearchInput";
import Accordion from "../UI_components/AccordionList/AccordionList";
import Navbar from "../HeaderNav/HeaderNav";
import Footer from "../Footer/Footer";


// @ts-ignore
function App() {


    const options = [
        {value: "1", label: "Option 1", color: `${PRIMARY_VIOLET}`},
        {value: "2", label: "Option 2", color: `${PRIMARY_BLUE}`},
        {value: "3", label: "Option 3", color: `${SECONDARY_YELLOW}`},
        {value: "4", label: "Option 4", color: `${PRIMARY_VIOLET}`},
        {value: "5", label: "Option 5", color: `${PRIMARY_BLUE}`},
        {value: "6", label: "Option 6", color: `${SECONDARY_YELLOW}`},
    ];
    const handleSelectChange = (selectedOption: any) => {
        console.log("Выбрано значение:", selectedOption);
    };

    const items = [
        {
            title: 'Заголовок 1',
            content: 'Содержимое 1'
        },
        {
            title: 'Заголовок 2',
            content: 'Содержимое 2'
        },
        {
            title: 'Заголовок 3',
            content: 'Содержимое 3'
        }
    ];




    return (
        <div style={{ margin: '0 auto' }}>
        <Navbar/>
        <Footer/>
        </div>

    )
}



export default App;
