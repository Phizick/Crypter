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
import AuctionItem from "../AuctionItem/AuctionItem";
// @ts-ignore
import image2 from '../../Images/ImageItems/image_1.png'
// @ts-ignore
import image1 from '../../Images/ImageItems/image_2.png'
// @ts-ignore
import image3 from '../../Images/ImageItems/image_3.png'
// @ts-ignore
import image4 from '../../Images/ImageItems/image_5.png'
// @ts-ignore
import image5 from '../..//Images/ImageItems/image_6.png'
import Carousel from "../Carousel/Carousel";
import HeaderNav from "../HeaderNav/HeaderNav";


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

    const slides = [
        <AuctionItem imageUrl={image1} username="Alice" price={1500} imageName="Image for bottoms" expiryTime={20000}  />,
        <AuctionItem imageUrl={image2} username="Bob" price={1200} imageName="Image for tops" expiryTime={20000}  />,
        <AuctionItem imageUrl={image3} username="Charlie" price={1800} imageName="Image for shoes" expiryTime={20000}  />,
        <AuctionItem imageUrl={image4} username="Bobster" price={4200} imageName="Image for any" expiryTime={22000}  />,
        <AuctionItem imageUrl={image5} username="Charlie Brown" price={70000} imageName="Image for Charlie" expiryTime={18000}  />,
        <AuctionItem imageUrl={image5} username="Charlie Brown" price={70000} imageName="Image for Charlie" expiryTime={18000}  />,
    ];


    return (
        <>
            <HeaderNav/>
       <Carousel slides={slides}/>
            <Footer/>
        </>
    )
}



export default App;
